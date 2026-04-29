import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const TARGET_PREFIXES = [
	'src/assets/services/',
	'src/assets/projects/',
	'src/assets/hero/',
	'src/assets/about/',
	'public/assets/',
];

const MEDIA_EXT = /\.(avif|webp|jpe?g|png|gif|svg|mp4|webm)$/i;
const IMAGE_EXT = /\.(avif|webp|jpe?g|png|gif|svg)$/i;
const TEXT_EXT = /\.(astro|css|html|js|json|md|mjs|ts|tsx|yaml|yml)$/i;

const outputJson = process.argv.includes('--json');

function trackedFiles() {
	return execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], { encoding: 'utf8' })
		.split(/\r?\n/)
		.filter(Boolean)
		.map((file) => file.replaceAll('\\', '/'));
}

function mb(bytes) {
	return Number((bytes / 1024 / 1024).toFixed(2));
}

function bucketFor(file) {
	if (file.startsWith('src/assets/services/')) return 'src/assets/services/';
	if (file.startsWith('src/assets/projects/')) return 'src/assets/projects/';
	if (file.startsWith('src/assets/hero/')) return 'src/assets/hero/';
	if (file.startsWith('src/assets/about/')) return 'src/assets/about/';
	if (file.startsWith('public/assets/')) return 'public/assets/';
	return 'other';
}

function globReferenced(file, text) {
	const dir = path.posix.dirname(file);
	const ext = path.posix.extname(file);
	const srcRelativeDir = dir.replace(/^src\//, '');
	const publicRelativeDir = dir.replace(/^public\//, '');

	const candidates = [
		`${dir}/*${ext}`,
		`${dir}/[0-9][0-9]${ext}`,
		`../${srcRelativeDir}/*${ext}`,
		`../${srcRelativeDir}/[0-9][0-9]${ext}`,
		`../../${srcRelativeDir}/*${ext}`,
		`../../${srcRelativeDir}/[0-9][0-9]${ext}`,
		`/${publicRelativeDir}/*${ext}`,
		`/${publicRelativeDir}/[0-9][0-9]${ext}`,
	];

	return candidates.some((candidate) => text.includes(candidate));
}

function referenceHits(file, corpus) {
	const basename = path.posix.basename(file);
	const noPublicPrefix = file.startsWith('public/') ? file.replace(/^public/, '') : file;
	const noSrcPrefix = file.startsWith('src/') ? file.replace(/^src\//, '') : file;
	const needles = new Set([file, noPublicPrefix, noSrcPrefix, basename]);
	const hits = [];

	for (const { file: textFile, text } of corpus) {
		if (textFile === file) continue;

		if (globReferenced(file, text)) {
			hits.push(`${textFile} (glob)`);
			continue;
		}

		for (const needle of needles) {
			if (needle && text.includes(needle)) {
				hits.push(textFile);
				break;
			}
		}
	}

	return [...new Set(hits)];
}

function addBucket(summary, key, bytes) {
	if (!summary[key]) summary[key] = { count: 0, bytes: 0, mb: 0 };
	summary[key].count += 1;
	summary[key].bytes += bytes;
	summary[key].mb = mb(summary[key].bytes);
}

const tracked = trackedFiles();
const corpus = tracked
	.filter((file) => TEXT_EXT.test(file))
	.map((file) => ({ file, text: readFileSync(file, 'utf8') }));

const mediaFiles = tracked.filter(
	(file) =>
		existsSync(file) &&
		MEDIA_EXT.test(file) &&
		TARGET_PREFIXES.some((prefix) => file.startsWith(prefix)),
);

const rows = [];

for (const file of mediaFiles) {
	const stat = statSync(file);
	const ext = path.extname(file).slice(1).toLowerCase();
	let width = null;
	let height = null;
	let format = ext;

	if (IMAGE_EXT.test(file) && ext !== 'svg') {
		try {
			const meta = await sharp(file).metadata();
			width = meta.width ?? null;
			height = meta.height ?? null;
			format = meta.format ?? ext;
		} catch {
			format = ext;
		}
	}

	const refs = referenceHits(file, corpus);
	rows.push({
		file,
		bytes: stat.size,
		mb: mb(stat.size),
		width,
		height,
		format,
		references: refs.length,
		referenceFiles: refs,
	});
}

rows.sort((a, b) => b.bytes - a.bytes);

const summary = {
	totalFiles: rows.length,
	totalBytes: rows.reduce((sum, row) => sum + row.bytes, 0),
	totalMB: 0,
	imageBytes: rows
		.filter((row) => IMAGE_EXT.test(row.file))
		.reduce((sum, row) => sum + row.bytes, 0),
	videoBytes: rows
		.filter((row) => /\.(mp4|webm)$/i.test(row.file))
		.reduce((sum, row) => sum + row.bytes, 0),
	byTarget: {},
	top10: rows.slice(0, 10),
	unreferenced: rows.filter((row) => row.references === 0),
};

summary.totalMB = mb(summary.totalBytes);
summary.imageMB = mb(summary.imageBytes);
summary.videoMB = mb(summary.videoBytes);

for (const row of rows) {
	addBucket(summary.byTarget, bucketFor(row.file), row.bytes);
}

if (outputJson) {
	console.log(JSON.stringify({ summary, files: rows }, null, 2));
} else {
	console.log(`Tracked target media: ${summary.totalFiles} files, ${summary.totalMB} MB`);
	console.log(`Images: ${summary.imageMB} MB; videos: ${summary.videoMB} MB`);
	console.log('');
	console.log('By target:');
	for (const [target, data] of Object.entries(summary.byTarget)) {
		console.log(`- ${target}: ${data.count} files, ${data.mb} MB`);
	}
	console.log('');
	console.log('Top 10 largest:');
	for (const row of summary.top10) {
		const dimensions = row.width && row.height ? `${row.width}x${row.height}` : 'n/a';
		console.log(`- ${row.mb} MB | ${row.format} | ${dimensions} | refs ${row.references} | ${row.file}`);
	}
	console.log('');
	console.log(`Unreferenced target media: ${summary.unreferenced.length}`);
	for (const row of summary.unreferenced.slice(0, 20)) {
		console.log(`- ${row.mb} MB | ${row.file}`);
	}
}
