import type { ServiceItem } from './types';

export const services: ServiceItem[] = [
	{
		slug: 'agregados-petreos',
		title: 'Agregados pétreos',
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
	},
	{
		slug: 'concretos',
		title: 'Concretos',
		shortDescription:
			'Pruebas y seguimiento para el control de calidad de concretos en laboratorio y en obra.',
		bullets: [
			'Control de calidad de materiales',
			'Apoyo técnico para proyectos en ejecución',
			'Integración sencilla a esquemas de laboratorio externo',
		],
	},
	{
		slug: 'mezcla-asfaltica',
		title: 'Mezcla asfáltica',
		shortDescription:
			'Diseño Marshall y control de calidad de mezclas asfálticas conforme a requerimientos vigentes del proyecto.',
		bullets: [
			'Diseño Marshall',
			'Control de calidad en producción y colocación',
			'Apoyo para proyectos con normativa SICT y protocolos AMAAC',
		],
	},
	{
		slug: 'suelos',
		title: 'Suelos',
		shortDescription:
			'Ensayes para evaluación y control de materiales de terracería, compactación y comportamiento en sitio.',
		bullets: [
			'Servicios en laboratorio y directamente en obra',
			'Seguimiento para control de compactación',
			'Apoyo técnico para toma de decisiones operativas',
		],
	},
	{
		slug: 'siac',
		title: 'Sistema Integral de Aseguramiento de la Calidad (SIAC)',
		shortDescription:
			'Soporte documental y operativo para ordenar la información del laboratorio y facilitar la gestión del proyecto.',
		bullets: [
			'Elaboración de reportes de laboratorio para estimaciones',
			'Soluciones en el manejo de la plataforma',
		],
	},
];
