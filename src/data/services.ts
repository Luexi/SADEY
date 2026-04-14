import type { ServiceItem } from './types';

export const services: ServiceItem[] = [
	{
		slug: 'concretos',
		title: 'Concretos',
		icon: 'science',
		shortDescription:
			'Pruebas y seguimiento para el control de calidad de concretos en laboratorio y en obra.',
		bullets: [
			'Control de calidad de materiales',
			'Apoyo técnico para proyectos en ejecución',
			'Integración sencilla a esquemas de laboratorio externo',
		],
		metaDescription:
			'Servicios de ensaye y control de calidad de concretos en laboratorio y obra. MTHA SADEY.',
	},
	{
		slug: 'agregados-petreos',
		title: 'Agregados pétreos',
		icon: 'blur_on',
		shortDescription:
			'Ensayes y control técnico para materiales pétreos destinados a terracerías y mezclas asfálticas.',
		bullets: [
			'Muestreo y preparación de muestras',
			'Granulometría, absorción y densidades relativas',
			'Ensayes para control de calidad de materiales pétreos',
		],
		futureDetails: [
			'Contenido de agua',
			'Límites líquido y plástico',
			'Índice plástico y equivalente de arena',
			'Compactación AASHTO',
			'CBR y expansión',
			'Desgaste Los Ángeles y Micro Deval',
			'Angularidad, partículas trituradas y partículas lajeadas',
		],
		metaDescription:
			'Ensayes de agregados pétreos: granulometría, absorción, compactación y más. MTHA SADEY.',
	},
	{
		slug: 'mezcla-asfaltica',
		title: 'Mezcla asfáltica',
		icon: 'local_shipping',
		shortDescription:
			'Diseño Marshall y control de calidad de mezclas asfálticas conforme a requerimientos vigentes del proyecto.',
		bullets: [
			'Diseño Marshall',
			'Control de calidad en producción y colocación',
			'Apoyo para proyectos con normativa SICT y protocolos AMAAC',
		],
		metaDescription:
			'Diseño Marshall y control de calidad de mezcla asfáltica con normativa SICT y AMAAC. MTHA SADEY.',
	},
	{
		slug: 'suelos',
		title: 'Suelos',
		icon: 'foundation',
		shortDescription:
			'Ensayes para evaluación y control de materiales de terracería, compactación y comportamiento en sitio.',
		bullets: [
			'Servicios en laboratorio y directamente en obra',
			'Seguimiento para control de compactación',
			'Apoyo técnico para toma de decisiones operativas',
		],
		metaDescription:
			'Ensayes de suelos para terracerías, compactación y control de calidad en obra. MTHA SADEY.',
	},
	{
		slug: 'siac',
		title: 'Sistema Integral de Aseguramiento de la Calidad (SIAC)',
		icon: 'verified',
		shortDescription:
			'Soporte documental y operativo para ordenar la información del laboratorio y facilitar la gestión del proyecto.',
		bullets: [
			'Elaboración de reportes de laboratorio para estimaciones',
			'Soluciones en el manejo de la plataforma',
		],
		metaDescription:
			'Soporte SIAC: reportes de laboratorio y manejo de plataforma documental. MTHA SADEY.',
	},
];
