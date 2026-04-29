import type { ImageMetadata } from 'astro';
import type { GalleryImage, ProjectCase } from './types';
import adquisicionCover from '../assets/projects/adquisicion-mezcla/_cover.webp';
import chilixxAfter from '../assets/projects/modernizacion-chilixx/featured/after.webp';
import chilixxBefore from '../assets/projects/modernizacion-chilixx/featured/before.webp';
import reposicionCover from '../assets/projects/reposicion-amaac/_cover.webp';

type ImageModule = { default: ImageMetadata };

const adquisicionImages = import.meta.glob<ImageModule>(
	'../assets/projects/adquisicion-mezcla/[0-9][0-9].webp',
	{ eager: true },
);
const amaacImages = import.meta.glob<ImageModule>(
	'../assets/projects/reposicion-amaac/[0-9][0-9].webp',
	{ eager: true },
);
const chilixxImages = import.meta.glob<ImageModule>(
	'../assets/projects/modernizacion-chilixx/[0-9][0-9].webp',
	{ eager: true },
);

function buildGallery(
	modules: Record<string, ImageModule>,
	altPrefix: string,
): GalleryImage[] {
	return Object.entries(modules)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, mod], i) => ({
			src: mod.default,
			alt: `${altPrefix} - registro visual ${i + 1}`,
		}));
}

const adquisicionGallery = buildGallery(
	adquisicionImages,
	'Adquisicion de mezcla asfaltica',
);
const amaacGallery = buildGallery(amaacImages, 'Reposicion de carpeta asfaltica');
const chilixxLegacyGallery = buildGallery(
	chilixxImages,
	'Modernizacion Igualapa - Chilixlahuaca - Alacatlatzala',
);

const chilixxBeforeImage: GalleryImage = {
	src: chilixxBefore,
	alt: 'Camino en terraceria durante trabajos previos a la modernizacion CHILIXX.',
	caption: 'Antes',
};

const chilixxAfterImage: GalleryImage = {
	src: chilixxAfter,
	alt: 'Carretera terminada en el tramo modernizado CHILIXX.',
	caption: 'Despues',
};

export const projects: ProjectCase[] = [
	{
		slug: 'modernizacion-igualapa-chilixlahuaca-alacatlatzala',
		title: 'Modernizacion Igualapa - Chilixlahuaca - Alacatlatzala',
		summary:
			'Apoyo en concretos, suelos y mezclas para un tramo carretero con puente vehicular en Guerrero.',
		fullDescription:
			'Servicios de diseno Marshall y control de calidad para concretos, suelos y mezclas dentro del proyecto de modernizacion del camino Igualapa - Chilixlahuaca - Alacatlatzala, tramo del km 35+340 al km 41+000, que incluye un puente vehicular en el km 36+036.',
		category: 'Concretos, suelos y mezclas',
		contractNumber: '2025-12-CA-A-030-W-00-2025',
		image: {
			src: chilixxAfter,
			alt: 'Carretera terminada en el tramo modernizado Igualapa - Chilixlahuaca - Alacatlatzala.',
		},
		tags: ['Control de calidad', 'Diseno Marshall', 'Infraestructura carretera'],
		comparison: {
			title: 'Antes y despues en CHILIXX',
			description:
				'Comparativo visual del tramo: primero la condicion previa y despues la vialidad modernizada, tal como lo pidio el cliente.',
			before: chilixxBeforeImage,
			after: chilixxAfterImage,
		},
		gallery: [chilixxBeforeImage, chilixxAfterImage, ...chilixxLegacyGallery],
		metaDescription:
			'Modernizacion carretera Igualapa - Chilixlahuaca - Alacatlatzala: control de calidad de concretos, suelos y mezclas.',
	},
	{
		slug: 'adquisicion-mezcla-asfaltica',
		title: 'Adquisicion de mezcla asfaltica',
		summary:
			'Diseno Marshall y control de calidad de mezcla asfaltica bajo lineamientos vigentes del proyecto.',
		fullDescription:
			'Servicio enfocado en el diseno Marshall y control de calidad de mezcla asfaltica para un proyecto de adquisicion de mezcla, considerando la normativa SICT mencionada en la fuente original.',
		category: 'Mezcla asfaltica',
		contractNumber: 'SICT-LPN-27-712-B-2025-034-AGS',
		image: {
			src: adquisicionCover,
			alt: 'Planta de produccion de mezcla asfaltica en operacion - Adquisicion de mezcla.',
		},
		tags: ['Mezcla asfaltica', 'Normativa SICT', 'Control de calidad'],
		gallery: adquisicionGallery,
		metaDescription:
			'Adquisicion de mezcla asfaltica: diseno Marshall y control de calidad con normativa SICT.',
	},
	{
		slug: 'reposicion-carpeta-asfaltica',
		title: 'Reposicion de carpeta asfaltica',
		summary:
			'Control de calidad y produccion de mezclas asfalticas para reposicion de carpeta con espesores variables por subtramo.',
		fullDescription:
			'Caso enfocado en el control de calidad y la produccion de mezclas asfalticas con diseno Marshall, normativa SICT y protocolo AMAAC nivel 2, aplicado a la reposicion de carpeta de concreto asfaltico con granulometria densa y espesores variables por subtramo.',
		category: 'Mezcla asfaltica',
		contractNumber: null,
		image: {
			src: reposicionCover,
			alt: 'Reposicion de carpeta asfaltica: personal SADEY LABORATORIO supervisando carga en camion.',
		},
		tags: ['AMAAC', 'Produccion de mezcla', 'Reposicion de carpeta'],
		gallery: amaacGallery,
		metaDescription:
			'Reposicion de carpeta asfaltica: diseno Marshall, normativa SICT y protocolo AMAAC.',
	},
];
