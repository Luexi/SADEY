import type { ImageMetadata } from 'astro';
import type { GalleryImage, ProjectCase } from './types';

type ImageModule = { default: ImageMetadata };

const adquisicionImages = import.meta.glob<ImageModule>(
	'../assets/projects/adquisicion-mezcla/*.jpeg',
	{ eager: true },
);
const amaacImages = import.meta.glob<ImageModule>(
	'../assets/projects/reposicion-amaac/*.jpeg',
	{ eager: true },
);
const chilixxImages = import.meta.glob<ImageModule>(
	'../assets/projects/modernizacion-chilixx/*.jpeg',
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
			alt: `${altPrefix} — registro visual ${i + 1}`,
		}));
}

const adquisicionGallery = buildGallery(
	adquisicionImages,
	'Adquisición de mezcla asfáltica',
);
const amaacGallery = buildGallery(amaacImages, 'Reposición de carpeta asfáltica');
const chilixxGallery = buildGallery(
	chilixxImages,
	'Modernización Igualapa - Chilixlahuaca - Alacatlatzala',
);

export const projects: ProjectCase[] = [
	{
		slug: 'modernizacion-igualapa-chilixlahuaca-alacatlatzala',
		title: 'Modernización Igualapa - Chilixlahuaca - Alacatlatzala',
		summary:
			'Apoyo en concretos, suelos y mezclas para un tramo carretero con puente vehicular en Guerrero.',
		fullDescription:
			'Servicios de diseño Marshall y control de calidad para concretos, suelos y mezclas dentro del proyecto de modernización del camino Igualapa - Chilixlahuaca - Alacatlatzala, tramo del km 35+340 al km 41+000, que incluye un puente vehicular en el km 36+036.',
		category: 'Concretos, suelos y mezclas',
		contractNumber: '2025-12-CA-A-030-W-00-2025',
		image: {
			src: chilixxGallery[0].src,
			alt: 'Modernización carretera Igualapa - Chilixlahuaca - Alacatlatzala: trabajos en obra.',
		},
		tags: ['Control de calidad', 'Diseño Marshall', 'Infraestructura carretera'],
		gallery: chilixxGallery,
		metaDescription:
			'Modernización carretera Igualapa - Chilixlahuaca - Alacatlatzala: control de calidad de concretos, suelos y mezclas por MTHA SADEY.',
	},
	{
		slug: 'adquisicion-mezcla-asfaltica',
		title: 'Adquisición de mezcla asfáltica',
		summary:
			'Diseño Marshall y control de calidad de mezcla asfáltica bajo lineamientos vigentes del proyecto.',
		fullDescription:
			'Servicio enfocado en el diseño Marshall y control de calidad de mezcla asfáltica para un proyecto de adquisición de mezcla, considerando la normativa SICT mencionada en la fuente original.',
		category: 'Mezcla asfáltica',
		contractNumber: 'SICT-LPN-27-712-B-2025-034-AGS',
		image: {
			src: adquisicionGallery[0].src,
			alt: 'Trabajos de adquisición y control de calidad de mezcla asfáltica.',
		},
		tags: ['Mezcla asfáltica', 'Normativa SICT', 'Control de calidad'],
		gallery: adquisicionGallery,
		metaDescription:
			'Adquisición de mezcla asfáltica: diseño Marshall y control de calidad con normativa SICT por MTHA SADEY.',
	},
	{
		slug: 'reposicion-carpeta-asfaltica',
		title: 'Reposición de carpeta asfáltica',
		summary:
			'Control de calidad y producción de mezclas asfálticas para reposición de carpeta con espesores variables por subtramo.',
		fullDescription:
			'Caso enfocado en el control de calidad y la producción de mezclas asfálticas con diseño Marshall, normativa SICT y protocolo AMAAC nivel 2, aplicado a la reposición de carpeta de concreto asfáltico con granulometría densa y espesores variables por subtramo.',
		category: 'Mezcla asfáltica',
		contractNumber: null,
		image: {
			src: amaacGallery[0].src,
			alt: 'Trabajos de reposición de carpeta asfáltica bajo protocolo AMAAC.',
		},
		tags: ['AMAAC', 'Producción de mezcla', 'Reposición de carpeta'],
		gallery: amaacGallery,
		metaDescription:
			'Reposición de carpeta asfáltica: diseño Marshall, normativa SICT y protocolo AMAAC por MTHA SADEY.',
	},
];
