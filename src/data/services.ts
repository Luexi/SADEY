import type { ServiceItem } from './types';
import amaacProtocolImage from '../assets/services/mezcla-asfaltica/protocolo-amaac.webp';
import cbrLaboratorioImage from '../assets/services/terracerias/cbr-laboratorio.webp';
import compactacionAashtoImage from '../assets/services/terracerias/compactacion-aashto.webp';

const testsTerraplen = [
	'Muestreo de Materiales',
	'Secado, Disgregado y Cuarteo de Muestras',
	'Densidades Relativas y Absorcion',
	'Granulometria de Materiales Compactables para Terracerias',
	'Limite Liquido',
	'Limite Plastico',
	'Indice Plastico',
	'Masa Volumetrica',
	'Compactacion AASHTO',
	'Valor de Soporte California (CBR) y Expansion (EXP) en Laboratorio',
	'Valor de Soporte California (CBR) en el Lugar',
	'Grado de Compactacion',
];

export const services: ServiceItem[] = [
	{
		slug: 'concretos',
		title: 'Concretos',
		icon: 'science',
		shortDescription:
			'Pruebas especificas y seguimiento para el control de calidad de concretos en laboratorio y en obra.',
		futureDetails: [
			'Revenimiento del Concreto Fresco',
			'Resistencia a la Compresion Simple de Cilindro de Concreto',
			'Resistencia a la Tension de Cilindros de Concreto',
			'Peso volumetrico',
			'Diseno de Concreto Hidraulico Metodo ACI',
		],
		metaDescription:
			'Pruebas especificas y control de calidad de concretos en laboratorio y obra.',
	},
	{
		slug: 'agregados-petreos',
		title: 'Agregados petreos',
		icon: 'blur_on',
		shortDescription:
			'Pruebas especificas para materiales petreos destinados a mezclas asfalticas.',
		futureDetails: [
			'Muestreo de Materiales Petreos para Mezclas Asfalticas',
			'Secado, Disgregado y Cuarteo de Muestras',
			'Contenido de Agua',
			'Densidades Relativas y Absorcion',
			'Granulometria de Materiales Petreos para Mezclas Asfalticas',
			'Equivalente de Arena',
			'Masa Volumetrica y Variacion Volumetrica',
			'Desgaste mediante la prueba de los Angeles de Materiales Petreos para Mezclas Asfalticas',
			'Particulas Alargadas y Lajeadas de Materiales Petreos para Mezclas Asfalticas',
			'Intemperismo Acelerado de Materiales Petreos para Mezclas Asfalticas',
			'Desprendimiento por Friccion en Materiales Petreos para Mezclas Asfalticas',
			'Azul de Metileno de Materiales Petreos para Mezclas Asfalticas',
			'Desgaste Mediante Equipo Micro-Deval',
			'Particulas Trituradas en Materiales Petreos para Mezcla Asfaltica',
			'Angularidad en Materiales Petreos para Mezclas Asfalticas',
			'Pulimento Acelerado en Materiales Petreos para Mezclas Asfalticas',
			'Granulometria de los Agregados Petreos',
		],
		metaDescription:
			'Pruebas especificas de agregados petreos: granulometria, Micro-Deval, equivalente de arena y mas.',
	},
	{
		slug: 'mezcla-asfaltica',
		title: 'Mezcla asfaltica',
		icon: 'local_shipping',
		shortDescription:
			'Diseno Marshall y pruebas especificas de control de calidad para mezclas asfalticas conforme a la normativa vigente del proyecto.',
		futureDetails: [
			'Muestreo de Materiales Petreos para Mezclas Asfalticas',
			'Muestreo de Mezcla asfaltica',
			'Contenido de Cemento o Residuo Asfaltico en Mezclas Asfalticas mediante Extraccion por Centrifugado',
			'Vacios de Aire en la Mezcla Asfaltica',
			'Vacios en el Agregado Mineral',
			'Vacios Ocupados por el Asfalto',
			'Proporcion Filler - Asfalto',
			'Susceptibilidad a la Humedad',
			'Susceptibilidad a la Humedad y a la Deformacion Permanente por Rodera',
			'Extraccion de Nucleos',
			'Diseno Marshall',
			'Diseno Protocolo AMAAC',
		],
		media: {
			images: [
				{
					src: amaacProtocolImage,
					alt: 'Proceso de laboratorio para diseno Protocolo AMAAC.',
					title: 'Diseno Protocolo AMAAC',
					caption: 'Registro visual optimizado del proceso de diseno y control de mezcla asfaltica.',
				},
			],
			video: {
				title: 'Video del procedimiento AMAAC',
				description: 'Video comprimido, sin audio y listo para consulta mobile-first.',
				src: '/assets/video/protocolo-amaac.mp4',
				poster: '/assets/video/protocolo-amaac-poster.jpg',
			},
		},
		metaDescription:
			'Diseno Marshall y pruebas especificas de mezcla asfaltica con normativa SICT y AMAAC.',
	},
	{
		slug: 'terracerias',
		title: 'Terracerias',
		icon: 'foundation',
		shortDescription:
			'Pruebas especificas para evaluacion y control de materiales de terraceria, compactacion y comportamiento en sitio.',
		detailsLabel: 'Capas',
		testsByCapa: [
			{
				capaSlug: 'terraplenes-y-capas-iniciales',
				capaTitle: 'Terraplenes y capas iniciales',
				appliesTo: [
					'Terraplenes de Acceso en Puentes',
					'Cuerpo de Terraplen',
					'Capa Subyacente',
					'Capa Subrasante',
				],
				tests: [...testsTerraplen],
			},
			{
				capaSlug: 'subbase',
				capaTitle: 'Subbase',
				tests: [
					'Muestreo de Materiales',
					'Secado, Disgregado y Cuarteo de Muestras',
					'Densidades Relativas y Absorcion',
					'Granulometria de Materiales Compactables para Terracerias',
					'Limite Liquido',
					'Limite Plastico',
					'Indice Plastico',
					'Equivalente de Arena',
					'Masa Volumetrica',
					'Compactacion AASHTO',
					'Valor de Soporte California (CBR) y Expansion (EXP) en Laboratorio',
					'Valor de Soporte California (CBR) en el Lugar',
					'Grado de Compactacion',
					'Desgaste mediante la prueba de los Angeles de Materiales Petreos para Mezclas Asfalticas',
					'Particulas Alargadas y Lajeadas de Materiales Petreos para Mezclas Asfalticas',
					'Granulometria de los Agregados Petreos',
				],
			},
			{
				capaSlug: 'base-hidraulica',
				capaTitle: 'Base hidraulica',
				tests: [
					'Muestreo de Materiales',
					'Secado, Disgregado y Cuarteo de Muestras',
					'Contenido de Agua',
					'Densidades Relativas y Absorcion',
					'Granulometria de Materiales Compactables para Terracerias',
					'Limite Liquido',
					'Limite Plastico',
					'Indice Plastico',
					'Equivalente de Arena',
					'Masa Volumetrica',
					'Compactacion AASHTO',
					'Valor de Soporte California (CBR) y Expansion (EXP) en Laboratorio',
					'Valor de Soporte California (CBR) en el Lugar',
					'Grado de Compactacion',
					'Desgaste mediante la prueba de los Angeles de Materiales Petreos para Mezclas Asfalticas',
					'Particulas Alargadas y Lajeadas de Materiales Petreos para Mezclas Asfalticas',
					'Granulometria de los Agregados Petreos',
				],
			},
			{
				capaSlug: 'base-tratada',
				capaTitle: 'Base tratada',
				tests: [
					'Muestreo de Materiales',
					'Secado, Disgregado y Cuarteo de Muestras',
					'Densidades Relativas y Absorcion',
					'Limite Liquido',
					'Limite Plastico',
					'Indice Plastico',
					'Equivalente de Arena',
					'Masa Volumetrica',
					'Desgaste mediante la prueba de los Angeles de Materiales Petreos para Mezclas Asfalticas',
					'Particulas Alargadas y Lajeadas de Materiales Petreos para Mezclas Asfalticas',
					'Granulometria de los Agregados Petreos',
				],
			},
		],
		media: {
			images: [
				{
					src: compactacionAashtoImage,
					alt: 'Equipo y material durante prueba de compactacion AASHTO.',
					title: 'Compactacion AASHTO',
					caption: 'Imagen optimizada para representar las pruebas compartidas por capas.',
				},
				{
					src: cbrLaboratorioImage,
					alt: 'Registro de prueba CBR en laboratorio.',
					title: 'CBR en laboratorio',
					caption: 'Se muestra una vez para evitar repetir fotos en capas con las mismas pruebas.',
				},
			],
		},
		metaDescription:
			'Pruebas especificas de terracerias por capa: terraplenes, subbase, base hidraulica y base tratada.',
	},
	{
		slug: 'siac',
		title: 'Sistema Integral de Aseguramiento de la Calidad (SIAC)',
		icon: 'verified',
		shortDescription:
			'Soporte documental y operativo para ordenar la informacion del laboratorio y facilitar la gestion del proyecto.',
		detailsLabel: 'Servicios incluidos',
		futureDetails: [
			'Elaboracion de reportes de laboratorio para estimaciones',
			'Soluciones en el manejo de la plataforma',
		],
		metaDescription:
			'Soporte SIAC: reportes de laboratorio y manejo de plataforma documental.',
	},
];
