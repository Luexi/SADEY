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
			src: '/placeholders/project-1-placeholder.svg',
			alt: 'Placeholder del proyecto de modernización de camino en Guerrero.',
		},
		tags: ['Control de calidad', 'Diseño Marshall', 'Infraestructura carretera'],
	},
	{
		slug: 'adquisicion-mezcla-asfaltica',
		title: 'Adquisición de mezcla asfáltica',
		summary:
			'Diseño Marshall y control de calidad de mezcla asfáltica bajo lineamientos vigentes del proyecto.',
		fullDescription:
			'Servicio enfocado en el diseño Marshall y control de calidad de mezcla asfáltica para un proyecto de adquisición de mezcla, considerando la nueva normativa SICT mencionada en la fuente original.',
		category: 'Mezcla asfáltica',
		contractNumber: 'SICT-LPN-27-712-B-2025-034-AGS',
		image: {
			src: '/placeholders/project-2-placeholder.svg',
			alt: 'Placeholder del caso de adquisición de mezcla asfáltica.',
		},
		tags: ['Mezcla asfáltica', 'SICT', 'Control de calidad'],
	},
	{
		slug: 'reposicion-carpeta-asfaltica',
		title: 'Reposición de carpeta asfáltica',
		summary:
			'Control de calidad y producción de mezclas asfálticas para reposición de carpeta con diferentes espesores de subtramo.',
		fullDescription:
			'Caso enfocado en el control de calidad y la producción de mezclas asfálticas con diseño Marshall, nueva normativa SICT y protocolo AMAAC nivel 2, aplicado a la reposición de carpeta de concreto asfáltico con granulometría densa y espesores variables por subtramo.',
		category: 'Mezcla asfáltica',
		contractNumber: null,
		image: {
			src: '/placeholders/project-3-placeholder.svg',
			alt: 'Placeholder del caso de reposición de carpeta asfáltica.',
		},
		tags: ['AMAAC', 'Producción de mezcla', 'Reposición de carpeta'],
	},
];
