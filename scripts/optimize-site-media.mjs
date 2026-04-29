import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, renameSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const TARGET_PREFIXES = [
	'src/assets/services/',
	'src/assets/projects/',
	'src/assets/hero/',
	'src/assets/about/',
	'public/assets/og/',
	'public/assets/video/',
];

const IMAGE_EXT = /\.(webp|jpe?g|png)$/i;
const TEXT_EXT = /\.(astro|css|html|js|json|md|mjs|ts|tsx|yaml|yml)$/i;

function trackedFiles() {
	return execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], { encoding: 'utf8' })
		.split(/\r?\n/)
		.filter(Boolean)
		.map((file) => file.replaceAll('\\', '/'));
}

function kb(bytes) {
	return Math.round(bytes / 1024);
}

function isInsideTarget(file) {
	return TARGET_PREFIXES.some((prefix) => file.startsWith(prefix));
}

function webpOutput(file) {
	return file.replace(/\.(jpe?g|png)$/i, '.webp');
}

function policyFor(file) {
	const basename = path.posix.basename(file);

	if (file.startsWith('src/assets/hero/')) {
		return { action: 'webp', width: 1600, quality: 78 };
	}

	if (file.startsWith('src/assets/about/')) {
		return { action: 'webp', width: 1280, quality: 76 };
	}

	if (file.startsWith('src/assets/services/')) {
		return { action: 'webp', width: 1280, quality: 74 };
	}

	if (file.startsWith('src/assets/projects/')) {
		if (basename === '_cover.webp' || basename === '_cover.jpg' || basename === '_cover.jpeg') {
			return { action: 'webp', width: 1600, quality: 78 };
		}

		if (file.includes('/featured/after.')) {
			return { action: 'webp', width: 1600, quality: 78 };
		}

		if (file.includes('/featured/')) {
			return { action: 'webp', width: 1280, quality: 76 };
		}

		return { action: 'webp', width: 1280, quality: 74 };
	}

	if (file.startsWith('public/assets/og/')) {
		return { action: 'jpeg', width: 1200, quality: 76 };
	}

	if (file.startsWith('public/assets/video/') && /poster\.(jpe?g|png|webp)$/i.test(file)) {
		return { action: 'jpeg', width: 1280, quality: 74 };
	}

	return null;
}

function makeCorpus(files) {
	return files
		.filter((file) => TEXT_EXT.test(file))
		.map((file) => ({ file, text: readFileSync(file, 'utf8') }));
}

function directReferences(file, corpus) {
	const basename = path.posix.basename(file);
	const noPublicPrefix = file.startsWith('public/') ? file.replace(/^public/, '') : file;
	const noSrcPrefix = file.startsWith('src/') ? file.replace(/^src\//, '') : file;
	const needles = new Set([file, noPublicPrefix, noSrcPrefix, basename]);
	const hits = [];

	for (const { file: textFile, text } of corpus) {
		if (textFile === file) continue;
		for (const needle of needles) {
			if (needle && text.includes(needle)) {
				hits.push(textFile);
				break;
			}
		}
	}

	return [...new Set(hits)];
}

async function optimizeToBuffer(file, policy) {
	const input = readFileSync(file);
	const image = sharp(input).rotate().resize({ width: policy.width, withoutEnlargement: true });

	if (policy.action === 'webp') {
		return image.webp({ quality: policy.quality, effort: 5 }).toBuffer();
	}

	return image.jpeg({ quality: policy.quality, mozjpeg: true }).toBuffer();
}

async function imageExceedsPolicyWidth(file, policy) {
	const input = readFileSync(file);
	const meta = await sharp(input).metadata();
	return Boolean(meta.width && meta.width > policy.width);
}

const tracked = trackedFiles();
const corpus = makeCorpus(tracked);
const files = tracked.filter((file) => IMAGE_EXT.test(file) && isInsideTarget(file));
const changed = [];
const skipped = [];

for (const file of files) {
	if (!existsSync(file)) {
		skipped.push({ file, reason: 'source already converted or removed' });
		continue;
	}

	const policy = policyFor(file);
	if (!policy) {
		skipped.push({ file, reason: 'no policy' });
		continue;
	}

	const before = statSync(file).size;
	const output =
		policy.action === 'webp' && !/\.webp$/i.test(file) ? webpOutput(file) : file;
	const buffer = await optimizeToBuffer(file, policy);
	const shouldWrite =
		output !== file ||
		(await imageExceedsPolicyWidth(file, policy)) ||
		buffer.length < before * 0.98;

	if (!shouldWrite) {
		skipped.push({ file, reason: 'already within optimization profile' });
		continue;
	}

	const tempOutput = `${output}.tmp`;
	writeFileSync(tempOutput, buffer);
	if (existsSync(output)) unlinkSync(output);
	renameSync(tempOutput, output);

	const after = statSync(output).size;
	changed.push({ file, output, before, after });

	if (output !== file) {
		const refs = directReferences(file, corpus);
		if (refs.length > 0) {
			skipped.push({ file, reason: `kept old source; direct refs in ${refs.join(', ')}` });
		} else {
			unlinkSync(file);
		}
	}
}

const beforeTotal = changed.reduce((sum, item) => sum + item.before, 0);
const afterTotal = changed.reduce((sum, item) => sum + item.after, 0);

console.log(`Optimized ${changed.length} image files.`);
console.log(`Optimized set before: ${kb(beforeTotal)} KB`);
console.log(`Optimized set after: ${kb(afterTotal)} KB`);
console.log(`Optimized set savings: ${kb(beforeTotal - afterTotal)} KB`);

if (skipped.length > 0) {
	console.log('');
	console.log('Skipped/deferred cleanup:');
	for (const item of skipped) {
		console.log(`- ${item.file}: ${item.reason}`);
	}
}
