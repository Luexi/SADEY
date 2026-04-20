import type { ServiceItem } from './types';

export const services: ServiceItem[] = [
	{
		slug: 'concretos',
		title: 'Concretos',
		icon: 'science',
		shortDescription:
			'Pruebas específicas y seguimiento para el control de calidad de concretos en laboratorio y en obra.',
		bullets: [
			'Control de calidad de materiales',
			'Apoyo técnico para proyectos en ejecución',
			'Integración sencilla a esquemas de laboratorio externo',
		],
		metaDescription:
			'Pruebas específicas y control de calidad de concretos en laboratorio y obra.',
	},
	{
		slug: 'agregados-petreos',
		title: 'Agregados pétreos',
		icon: 'blur_on',
		shortDescription:
			'Pruebas específicas para materiales pétreos destinados a terracerías y mezclas asfálticas.',
		bullets: [
			'Muestreo y preparación de muestras',
			'Ensayes físicos y químicos de laboratorio',
			'Control de calidad en obra',
		],
		futureDetails: [
			'Muestreo de Materiales para Terracerías / Muestreo de Materiales Pétreos para Mezclas Asfálticas',
			'Secado, Disgregado y Cuarteo de Muestras',
			'Contenido de Agua',
			'Densidades Relativas y Absorción',
			'Granulometría de Materiales Compactables para Terracerías',
			'Granulometría de Materiales Pétreos para Mezclas Asfálticas',
			'Límite Líquido',
			'Límite Plástico',
			'Índice Plástico',
			'Equivalente de Arena',
			'Masa Volumétrica y Variación Volumétrica',
			'Compactación AASHTO',
			'Valor de Soporte California (CBR) y Expansión (EXP) en Laboratorio',
			'Valor de Soporte California (CBR) en el Lugar',
			'Grado de Compactación',
			'Desgaste mediante la prueba de los Ángeles de Materiales Pétreos para Mezclas Asfálticas',
			'Partículas Alargadas y Lajeadas de Materiales Pétreos para Mezclas Asfálticas',
			'Intemperismo Acelerado de Materiales Pétreos para Mezclas Asfálticas',
			'Desprendimiento por Fricción en Materiales Pétreos para Mezclas Asfálticas',
			'Azul de Metileno de Materiales Pétreos para Mezclas Asfálticas',
			'Desgaste Mediante Equipo Micro-Deval',
			'Partículas Trituradas en Materiales Pétreos para Mezcla Asfáltica',
			'Angularidad en Materiales Pétreos para Mezclas Asfálticas',
			'Pulimento Acelerado en Materiales Pétreos para Mezclas Asfálticas',
			'Granulometría de los Agregados Pétreos',
			'Resistencia a la Compresión Simple para Bases Tratadas',
		],
		metaDescription:
			'Pruebas específicas de agregados pétreos: granulometría, CBR, compactación, Micro-Deval y más.',
	},
	{
		slug: 'mezcla-asfaltica',
		title: 'Mezcla asfáltica',
		icon: 'local_shipping',
		shortDescription:
			'Diseño Marshall y pruebas específicas de control de calidad para mezclas asfálticas conforme a la normativa vigente del proyecto.',
		bullets: [
			'Diseño Marshall',
			'Control de calidad en producción y colocación',
			'Apoyo para proyectos con normativa SICT y protocolos AMAAC',
		],
		metaDescription:
			'Diseño Marshall y pruebas específicas de mezcla asfáltica con normativa SICT y AMAAC.',
	},
	{
		slug: 'suelos',
		title: 'Suelos',
		icon: 'foundation',
		shortDescription:
			'Pruebas específicas para evaluación y control de materiales de terracería, compactación y comportamiento en sitio.',
		bullets: [
			'Servicios en laboratorio y directamente en obra',
			'Seguimiento para control de compactación',
			'Apoyo técnico para toma de decisiones operativas',
		],
		metaDescription:
			'Pruebas específicas de suelos para terracerías, compactación y control de calidad en obra.',
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
			'Soporte SIAC: reportes de laboratorio y manejo de plataforma documental.',
	},
];
