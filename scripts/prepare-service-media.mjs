import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpeg from '@ffmpeg-installer/ffmpeg';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceRoot = path.join(root, 'FOTOS PRUEBAS');

const out = {
	terracerias: path.join(root, 'src/assets/services/terracerias'),
	mezcla: path.join(root, 'src/assets/services/mezcla-asfaltica'),
	chilixx: path.join(root, 'src/assets/projects/modernizacion-chilixx/featured'),
	video: path.join(root, 'public/assets/video'),
};

function fail(message) {
	console.error(message);
	process.exit(1);
}

function slug(value) {
	return value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, ' ')
		.trim();
}

function findDir(parent, wanted) {
	const wantedSlug = slug(wanted);
	const match = readdirSync(parent, { withFileTypes: true }).find(
		(entry) => entry.isDirectory() && slug(entry.name) === wantedSlug,
	);
	if (!match) fail(`Missing source folder: ${path.join(parent, wanted)}`);
	return path.join(parent, match.name);
}

function findFile(parent, wanted) {
	const wantedSlug = slug(wanted);
	const match = readdirSync(parent, { withFileTypes: true }).find(
		(entry) => entry.isFile() && slug(entry.name) === wantedSlug,
	);
	if (!match) fail(`Missing source file: ${path.join(parent, wanted)}`);
	return path.join(parent, match.name);
}

function resetDir(dir) {
	mkdirSync(dir, { recursive: true });
	for (const entry of readdirSync(dir)) {
		rmSync(path.join(dir, entry), { recursive: true, force: true });
	}
}

async function optimizeImage(input, output, width = 1600, quality = 78) {
	await sharp(input)
		.rotate()
		.resize({ width, withoutEnlargement: true })
		.webp({ quality, effort: 5 })
		.toFile(output);
}

function runFfmpeg(args) {
	const result = spawnSync(ffmpeg.path, args, { stdio: 'inherit' });
	if (result.status !== 0) {
		fail(`ffmpeg failed with exit code ${result.status}`);
	}
}

if (!existsSync(sourceRoot)) {
	fail(`Missing local source folder: ${sourceRoot}`);
}

for (const dir of Object.values(out)) {
	mkdirSync(dir, { recursive: true });
}
resetDir(out.terracerias);
resetDir(out.mezcla);
resetDir(out.chilixx);

const chilixxRoot = findDir(sourceRoot, 'CHILIXX');
const chilixxBeforeRoot = findDir(chilixxRoot, 'ANTES');
const chilixxAfterRoot = findDir(chilixxRoot, 'FINAL');
const terraceriasRoot = findDir(sourceRoot, 'TERRACERIAS');
const mezclaRoot = findDir(sourceRoot, 'MEZCLA ASFALTICA');
const amaacRoot = findDir(mezclaRoot, 'DISENO PROTOCOLO AMAAC');

await optimizeImage(
	findFile(chilixxBeforeRoot, 'WhatsApp Image 2026-04-20 at 5.51.39 PM (2).jpeg'),
	path.join(out.chilixx, 'before.webp'),
);
await optimizeImage(
	findFile(chilixxAfterRoot, 'WhatsApp Image 2026-04-20 at 5.51.52 PM.jpeg'),
	path.join(out.chilixx, 'after.webp'),
);

await optimizeImage(
	findFile(findDir(terraceriasRoot, 'COMPACTACION AASTHO'), 'WhatsApp Image 2026-04-20 at 6.05.14 PM.jpeg'),
	path.join(out.terracerias, 'compactacion-aashto.webp'),
);
await optimizeImage(
	findFile(findDir(terraceriasRoot, 'CBR LABORATORIO'), 'WhatsApp Image 2026-04-20 at 6.05.21 PM (2).jpeg'),
	path.join(out.terracerias, 'cbr-laboratorio.webp'),
);

await optimizeImage(
	findFile(amaacRoot, 'IMG_5842.JPEG'),
	path.join(out.mezcla, 'protocolo-amaac.webp'),
);

const videoInput = findFile(amaacRoot, 'PROCEDIMIENTO.MP4');
const videoOutput = path.join(out.video, 'protocolo-amaac.mp4');
const tempPoster = path.join(out.video, 'protocolo-amaac-source-frame.jpg');
const posterOutput = path.join(out.video, 'protocolo-amaac-poster.jpg');

rmSync(videoOutput, { force: true });
rmSync(tempPoster, { force: true });
rmSync(posterOutput, { force: true });

runFfmpeg([
	'-y',
	'-i',
	videoInput,
	'-an',
	'-map_metadata',
	'-1',
	'-vf',
	'scale=-2:1280',
	'-c:v',
	'libx264',
	'-preset',
	'medium',
	'-crf',
	'32',
	'-movflags',
	'+faststart',
	videoOutput,
]);

runFfmpeg([
	'-y',
	'-ss',
	'00:00:02',
	'-i',
	videoInput,
	'-frames:v',
	'1',
	tempPoster,
]);

await sharp(tempPoster)
	.resize({ width: 1280, withoutEnlargement: true })
	.jpeg({ quality: 76, mozjpeg: true })
	.toFile(posterOutput);
rmSync(tempPoster, { force: true });

console.log('Prepared optimized service media:');
console.log(`- ${path.relative(root, path.join(out.chilixx, 'before.webp'))}`);
console.log(`- ${path.relative(root, path.join(out.chilixx, 'after.webp'))}`);
console.log(`- ${path.relative(root, path.join(out.terracerias, 'compactacion-aashto.webp'))}`);
console.log(`- ${path.relative(root, path.join(out.terracerias, 'cbr-laboratorio.webp'))}`);
console.log(`- ${path.relative(root, path.join(out.mezcla, 'protocolo-amaac.webp'))}`);
console.log(`- ${path.relative(root, videoOutput)}`);
console.log(`- ${path.relative(root, posterOutput)}`);
