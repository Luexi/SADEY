import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpeg from '@ffmpeg-installer/ffmpeg';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceRoot = path.join(root, 'FOTOS PRUEBAS');

const servicesAssetsRoot = path.join(root, 'src/assets/services');
const out = {
	chilixx: path.join(root, 'src/assets/projects/modernizacion-chilixx/featured'),
	video: path.join(root, 'public/assets/video'),
};

const DEFAULT_CAP = 6;
const PHOTO_EXTS = new Set(['.jpg', '.jpeg', '.png']);

const galleryConfig = [
	{
		serviceSlug: 'concretos',
		sourceFolder: 'CONCRETOS',
		tests: [
			{ testSlug: 'diseno-aci', testTitle: 'Diseño de Concreto Hidráulico — Método ACI', folder: 'DISEÑO DE CONCRETO METODO ACI' },
			{ testSlug: 'cilindros', testTitle: 'Elaboración de Cilindros de Concreto Hidráulico', folder: 'ELABORACION DE CILINDROS DE CONCRETO HIDRAULICO' },
			{ testSlug: 'peso-volumetrico', testTitle: 'Peso volumétrico', folder: 'PESO VOLUMETRICO' },
			{ testSlug: 'flexion-vigas', testTitle: 'Flexión en Vigas de Concreto Hidráulico', folder: 'PRUEBA DE FLEXION EN VIGAS DE CONCRETO HIDRAULICO' },
			{ testSlug: 'resistencia-compresion', testTitle: 'Resistencia a la Compresión', folder: 'RESISTENCIA A LA COMPRESION' },
			{ testSlug: 'revenimiento', testTitle: 'Revenimiento del Concreto Fresco', folder: 'REVENIMIENTO' },
		],
	},
	{
		serviceSlug: 'agregados-petreos',
		sourceFolder: 'AGREGADOS PETREOS',
		tests: [
			{ testSlug: 'muestreo', testTitle: 'Muestreo de Materiales Pétreos', folder: 'MUESTREO' },
			{ testSlug: 'secado-cuarteo', testTitle: 'Secado, Disgregado y Cuarteo', folder: 'SECADO DISGREGADO Y CUARTEO' },
			{ testSlug: 'contenido-agua', testTitle: 'Contenido de Agua', folder: 'CONTENIDO DE AGUA' },
			{ testSlug: 'densidad-relativa', testTitle: 'Densidades Relativas y Absorción', folder: 'DENSIDAD RELATIVA Y ABS' },
			{ testSlug: 'granulometria', testTitle: 'Granulometría de los Agregados Pétreos', folder: 'GRANULOMETRIA DE LOS AGREGADOS' },
			{ testSlug: 'equivalente-arena', testTitle: 'Equivalente de Arena', folder: 'EQUIVALENTE ARENA' },
			{ testSlug: 'masa-volumetrica', testTitle: 'Masa Volumétrica y Variación Volumétrica', folder: 'MASA VOLUMETRICA' },
			{ testSlug: 'desgaste-los-angeles', testTitle: 'Desgaste mediante la prueba de los Ángeles', folder: 'DESGASTE DE LOS ANGELES' },
			{ testSlug: 'particulas-lajeadas', testTitle: 'Partículas Alargadas y Lajeadas', folder: 'PARTICULAS ALARGADAS Y LAJEADAS' },
			{ testSlug: 'intemperismo', testTitle: 'Intemperismo Acelerado', folder: 'INTEMPERISMO ACELERADO' },
			{ testSlug: 'desprendimiento-friccion', testTitle: 'Desprendimiento por Fricción', folder: 'DESPRENDIMIENTO POR FRICCION' },
			{ testSlug: 'azul-metileno', testTitle: 'Azul de Metileno', folder: 'AZUL DE METILENO' },
			{ testSlug: 'micro-deval', testTitle: 'Desgaste mediante Equipo Micro-Deval', folder: 'MICRO DEVAL' },
			{ testSlug: 'angularidad', testTitle: 'Angularidad en Materiales Pétreos', folder: 'ANGULARIDAD' },
		],
	},
	{
		serviceSlug: 'mezcla-asfaltica',
		sourceFolder: 'MEZCLA ASFALTICA',
		tests: [
			{ testSlug: 'muestreo-mezcla', testTitle: 'Muestreo de Mezcla Asfáltica', folder: 'MUESTREO DE MEZCLA' },
			{ testSlug: 'contenido-asfalto', testTitle: 'Contenido de Asfalto por Centrifugado', folder: 'CONTENIDO DE ASFALTO' },
			{ testSlug: 'granulometria', testTitle: 'Granulometría de Mezcla', folder: 'GRANULOMETRIA' },
			{ testSlug: 'peso-volumetrico', testTitle: 'Peso Volumétrico', folder: 'PESO VULUMETRICO' },
			{ testSlug: 'densidad-teorica-maxima', testTitle: 'Densidad Relativa Teórica Máxima', folder: 'DENSIDAD RELATIVA TEORICA MAXIMA' },
			{ testSlug: 'tsr-hamburgo', testTitle: 'Susceptibilidad a la Humedad (TSR) y Rueda de Hamburgo', folder: 'SUSEPTIBILIDAD A LA HUMEDAD (TSR) Y RUEDA DE HAMBURGO' },
			{ testSlug: 'extraccion-nucleos', testTitle: 'Extracción de Núcleos', folder: 'EXTRACCION DE NUCLEOS' },
			{ testSlug: 'marshall', testTitle: 'Diseño Marshall', folder: 'DISEÑO MARSHALL' },
			{ testSlug: 'amaac', testTitle: 'Diseño Protocolo AMAAC', folder: 'DISEÑO PROTOCOLO AMAAC', cap: 4 },
		],
	},
	{
		serviceSlug: 'terracerias',
		sourceFolder: 'TERRACERIAS',
		tests: [
			{ testSlug: 'muestreo', testTitle: 'Muestreo de Materiales', folder: 'MUESTREO' },
			{ testSlug: 'secado-cuarteo', testTitle: 'Secado, Disgregado y Cuarteo', folder: 'SECADO, DISGREGADO Y CUARTEO' },
			{ testSlug: 'granulometria', testTitle: 'Granulometría de Materiales Compactables', folder: 'GRANULOMETRIA' },
			{ testSlug: 'limite-liquido', testTitle: 'Límite Líquido', folder: 'LIMITE LIQUIDO' },
			{ testSlug: 'limite-plastico', testTitle: 'Límite Plástico', folder: 'LIMITE PLASTICO' },
			{ testSlug: 'masa-volumetrica', testTitle: 'Masa Volumétrica', folder: 'MASA VOLUMETRICA' },
			{ testSlug: 'compactacion-aashto', testTitle: 'Compactación AASHTO', folder: 'COMPACTACION AASTHO' },
			{ testSlug: 'cbr-laboratorio', testTitle: 'CBR y Expansión en Laboratorio', folder: 'CBR LABORATORIO' },
			{ testSlug: 'cbr-lugar', testTitle: 'CBR en el Lugar', folder: 'CBR LUGAR' },
			{ testSlug: 'densidades', testTitle: 'Densidades', folder: 'DENSIDADES' },
			{ testSlug: 'grado-compactacion', testTitle: 'Grado de Compactación', folder: 'GRADO DE COMPACTACION' },
		],
	},
];

function fail(message) {
	console.error(message);
	process.exit(1);
}

function slug(value) {
	return value
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
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

function findDirOptional(parent, wanted) {
	const wantedSlug = slug(wanted);
	const match = readdirSync(parent, { withFileTypes: true }).find(
		(entry) => entry.isDirectory() && slug(entry.name) === wantedSlug,
	);
	return match ? path.join(parent, match.name) : null;
}

function findFile(parent, wanted) {
	const wantedSlug = slug(wanted);
	const match = readdirSync(parent, { withFileTypes: true }).find(
		(entry) => entry.isFile() && slug(entry.name) === wantedSlug,
	);
	if (!match) fail(`Missing source file: ${path.join(parent, wanted)}`);
	return path.join(parent, match.name);
}

function listPhotos(dir) {
	return readdirSync(dir, { withFileTypes: true })
		.filter((entry) => entry.isFile())
		.map((entry) => entry.name)
		.filter((name) => PHOTO_EXTS.has(path.extname(name).toLowerCase()))
		.sort((a, b) => a.localeCompare(b, 'es', { numeric: true, sensitivity: 'base' }));
}

function resetDir(dir) {
	rmSync(dir, { recursive: true, force: true });
	mkdirSync(dir, { recursive: true });
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

function importIdentifier(serviceSlug, testSlug, index) {
	const camel = (value) =>
		value
			.split('-')
			.map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
			.join('');
	return `${camel(serviceSlug)}_${camel(testSlug)}_${String(index).padStart(2, '0')}`;
}

if (!existsSync(sourceRoot)) {
	fail(`Missing local source folder: ${sourceRoot}`);
}

for (const dir of Object.values(out)) {
	mkdirSync(dir, { recursive: true });
}
resetDir(out.chilixx);

const chilixxRoot = findDir(sourceRoot, 'CHILIXX');
const chilixxBeforeRoot = findDir(chilixxRoot, 'ANTES');
const chilixxAfterRoot = findDir(chilixxRoot, 'FINAL');

await optimizeImage(
	findFile(chilixxBeforeRoot, 'WhatsApp Image 2026-04-20 at 5.51.39 PM (2).jpeg'),
	path.join(out.chilixx, 'before.webp'),
);
await optimizeImage(
	findFile(chilixxAfterRoot, 'WhatsApp Image 2026-04-20 at 5.51.52 PM.jpeg'),
	path.join(out.chilixx, 'after.webp'),
);

const generatedEntries = [];
const generatedImports = [];
const writtenPaths = [];

for (const service of galleryConfig) {
	const serviceOutRoot = path.join(servicesAssetsRoot, service.serviceSlug);
	resetDir(serviceOutRoot);

	const serviceSourceRoot = findDirOptional(sourceRoot, service.sourceFolder);
	if (!serviceSourceRoot) {
		console.warn(`! Source folder not found for service "${service.serviceSlug}": ${service.sourceFolder} — skipping`);
		generatedEntries.push({ serviceSlug: service.serviceSlug, tests: [] });
		continue;
	}

	const tests = [];
	for (const test of service.tests) {
		const testSource = findDirOptional(serviceSourceRoot, test.folder);
		if (!testSource) {
			console.warn(`! ${service.serviceSlug}/${test.testSlug}: folder "${test.folder}" not found — skipping`);
			continue;
		}
		const photos = listPhotos(testSource);
		if (photos.length === 0) {
			console.warn(`. ${service.serviceSlug}/${test.testSlug}: no photos in "${test.folder}" — skipping`);
			continue;
		}
		const cap = test.cap ?? DEFAULT_CAP;
		const picks = photos.slice(0, cap);
		const testOutDir = path.join(serviceOutRoot, test.testSlug);
		mkdirSync(testOutDir, { recursive: true });

		const images = [];
		for (let i = 0; i < picks.length; i++) {
			const input = path.join(testSource, picks[i]);
			const ordinal = String(i + 1).padStart(2, '0');
			const outFile = path.join(testOutDir, `${ordinal}.webp`);
			await optimizeImage(input, outFile);
			writtenPaths.push(path.relative(root, outFile));

			const importName = importIdentifier(service.serviceSlug, test.testSlug, i + 1);
			const relImport = `../assets/services/${service.serviceSlug}/${test.testSlug}/${ordinal}.webp`;
			generatedImports.push(`import ${importName} from '${relImport}';`);
			images.push({ importName, ordinal: i + 1 });
		}
		tests.push({
			testSlug: test.testSlug,
			testTitle: test.testTitle,
			images,
		});
	}

	generatedEntries.push({ serviceSlug: service.serviceSlug, tests });
}

// Emit src/data/service-galleries.generated.ts
const generatedFile = path.join(root, 'src/data/service-galleries.generated.ts');
const lines = [];
lines.push('// AUTO-GENERATED — do not edit by hand.');
lines.push('// Run `npm run prepare:service-media` to refresh this file.');
lines.push('import type { TestGallery } from \'./types\';');
lines.push('');
lines.push(...generatedImports);
lines.push('');
lines.push('export const serviceGalleriesBySlug: Record<string, TestGallery[]> = {');
for (const entry of generatedEntries) {
	if (entry.tests.length === 0) continue;
	lines.push(`\t'${entry.serviceSlug}': [`);
	for (const test of entry.tests) {
		lines.push('\t\t{');
		lines.push(`\t\t\ttestSlug: '${test.testSlug}',`);
		lines.push(`\t\t\ttestTitle: ${JSON.stringify(test.testTitle)},`);
		lines.push('\t\t\timages: [');
		for (const image of test.images) {
			const altText = `${test.testTitle} · foto ${image.ordinal}`;
			lines.push(`\t\t\t\t{ src: ${image.importName}, alt: ${JSON.stringify(altText)} },`);
		}
		lines.push('\t\t\t],');
		lines.push('\t\t},');
	}
	lines.push('\t],');
}
lines.push('};');
lines.push('');
writeFileSync(generatedFile, lines.join('\n'), 'utf8');

// AMAAC video pipeline (unchanged)
const mezclaRoot = findDir(sourceRoot, 'MEZCLA ASFALTICA');
const amaacRoot = findDir(mezclaRoot, 'DISENO PROTOCOLO AMAAC');
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
console.log(`- ${path.relative(root, generatedFile)} (${writtenPaths.length} carousel images)`);
console.log(`- ${path.relative(root, videoOutput)}`);
console.log(`- ${path.relative(root, posterOutput)}`);
