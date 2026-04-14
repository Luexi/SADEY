import type { SiteConfig } from './types';

const WHATSAPP_NUMBER = '5217441751913';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa solicitar información sobre los servicios de MTHA SADEY.')}`;

export const siteConfig: SiteConfig = {
	siteUrl: 'https://luexi.github.io',
	basePath: '/SADEY',
	logoText: 'MTHA SADEY',
	contactEmail: '',
	address: 'AV. FIDEL VELAZQUEZ S/N, EL COLOSO INFONAVIT, C.P. 39810, ACAPULCO DE JUAREZ, GUERRERO',
	whatsappUrl: WHATSAPP_URL,
	domain: '',
	socialLinks: [],
	meta: {
		title: 'MTHA SADEY | Laboratorio para la construcción',
		description:
			'Servicios de ensaye para construcción, control de calidad en obra y apoyo técnico especializado para laboratorios externos. Concretos, agregados pétreos, mezcla asfáltica, suelos y SIAC.',
	},
	navigation: [
		{ label: 'Inicio', href: '/', kind: 'route' },
		{ label: 'Servicios', href: '/servicios', kind: 'route' },
		{ label: 'Proyectos', href: '/proyectos', kind: 'route' },
		{ label: 'Contacto', href: '/contacto', kind: 'route' },
	],
	headerCta: {
		label: 'Solicitar información',
		href: WHATSAPP_URL,
		kind: 'external',
	},
	hero: {
		eyebrow: 'Laboratorio para la construcción',
		title: 'Ensayes y apoyo técnico confiable para obra, laboratorio y control de calidad.',
		description:
			'MTHA SADEY brinda servicios de ensaye para construcción y soporte especializado a laboratorios externos que requieren pruebas específicas fuera de su zona habitual de operación.',
		highlights: [
			'Apoyo a otros laboratorios',
			'Servicios en obra y laboratorio',
			'Resultados confiables y atención ágil',
		],
		primaryCtaLabel: 'Solicitar información',
		secondaryCtaLabel: 'Explorar servicios',
		image: {
			src: '/placeholders/stock/hero-stock.jpg',
			alt: 'Infraestructura de concreto relacionada con construcción y trabajo técnico de campo.',
		},
	},
	about: {
		title: 'Apoyo técnico serio para proyectos y laboratorios externos',
		description: [
			'En MTHA SADEY ofrecemos servicios de ensaye orientados a respaldar a laboratorios externos que necesitan pruebas específicas en proyectos ubicados fuera de su zona de operación.',
			'Nuestra operación está enfocada en facilitar resultados confiables sin trasladar equipo o personal a largas distancias, optimizando tiempos, costos y logística para el control de calidad en construcción.',
		],
		image: {
			src: '/placeholders/stock/about-stock.jpg',
			alt: 'Equipo técnico de laboratorio asociado a ensaye y verificación de materiales.',
		},
	},
	cta: {
		title: 'Coordinemos el apoyo técnico que requiere tu proyecto',
		description:
			'Contáctanos por WhatsApp para solicitar información sobre nuestros servicios de ensaye, control de calidad y apoyo técnico en obra.',
		primaryLabel: 'Escribir por WhatsApp',
		secondaryLabel: 'Ver datos de contacto',
		note: 'Respuesta ágil en horario laboral.',
	},
	contact: {
		phone: '+527441751913',
		phoneDisplay: '+52 1 744 175 1913',
		address: 'AV. FIDEL VELAZQUEZ S/N, EL COLOSO INFONAVIT, C.P. 39810, ACAPULCO DE JUAREZ, GUERRERO',
		whatsappUrl: WHATSAPP_URL,
		whatsappNumber: WHATSAPP_NUMBER,
		email: '',
		mapQuery: 'AV.+FIDEL+VELAZQUEZ,+EL+COLOSO+INFONAVIT,+ACAPULCO+DE+JUAREZ,+GUERRERO,+MEXICO',
	},
	footerNote:
		'Servicios de ensaye para construcción con enfoque en apoyo técnico, control de calidad y operación en obra o laboratorio.',
	pageMeta: {
		servicios: {
			title: 'Servicios | MTHA SADEY',
			description:
				'Categorías de servicio de MTHA SADEY: concretos, agregados pétreos, mezcla asfáltica, suelos y SIAC. Ensayes, control de calidad y apoyo técnico especializado.',
		},
		proyectos: {
			title: 'Proyectos | MTHA SADEY',
			description:
				'Proyectos recientes de MTHA SADEY en control de calidad, diseño Marshall y apoyo técnico para infraestructura carretera y obra civil.',
		},
		contacto: {
			title: 'Contacto | MTHA SADEY',
			description:
				'Contacta a MTHA SADEY para solicitar información sobre servicios de ensaye y control de calidad. WhatsApp, teléfono y dirección en Acapulco, Guerrero.',
		},
	},
};
