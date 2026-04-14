import type { ProjectCase } from './types';

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
			src: '/placeholders/stock/project-1-stock.jpg',
			alt: 'Infraestructura de concreto relacionada con modernización carretera y control de calidad.',
		},
		tags: ['Control de calidad', 'Diseño Marshall', 'Infraestructura carretera'],
		gallery: [],
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
			src: '/placeholders/stock/project-2-stock.jpg',
			alt: 'Trabajos de mezcla asfáltica en carretera relacionados con producción y control de calidad.',
		},
		tags: ['Mezcla asfáltica', 'Normativa SICT', 'Control de calidad'],
		gallery: [],
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
			src: '/placeholders/stock/project-3-stock.jpg',
			alt: 'Maquinaria de obra asociada a reposición de carpeta asfáltica y trabajo en sitio.',
		},
		tags: ['AMAAC', 'Producción de mezcla', 'Reposición de carpeta'],
		gallery: [],
		metaDescription:
			'Reposición de carpeta asfáltica: diseño Marshall, normativa SICT y protocolo AMAAC por MTHA SADEY.',
	},
];
