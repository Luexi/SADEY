import type { SiteConfig } from './types';
import heroImage from '../assets/hero/hero-main.webp';
import aboutImage from '../assets/about/about-main.webp';

const WHATSAPP_NUMBER = '527531200374';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa solicitar información sobre los servicios de SADEY LABORATORIO.')}`;

export const siteConfig: SiteConfig = {
	siteUrl: 'https://luexi.github.io',
	basePath: '/SADEY',
	logoText: 'SADEY LABORATORIO PARA LA CONSTRUCCIÓN',
	logoTextShort: 'SADEY LABORATORIO',
	brandName: 'SADEY',
	brandTagline: 'Laboratorio para la Construcción',
	contactEmail: '',
	address: 'AV. FIDEL VELAZQUEZ S/N, EL COLOSO INFONAVIT, C.P. 39810, ACAPULCO DE JUAREZ, GUERRERO',
	whatsappUrl: WHATSAPP_URL,
	domain: '',
	socialLinks: [],
	meta: {
		title: 'SADEY LABORATORIO | Laboratorio para la construcción',
		description:
			'SADEY LABORATORIO brinda pruebas específicas para construcción, control de calidad en obra y apoyo técnico a laboratorios externos. Concretos, agregados pétreos, mezcla asfáltica, terracerías y SIAC.',
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
		title: 'SADEY LABORATORIO',
		description:
			'Pruebas específicas, control de calidad y apoyo técnico a laboratorios externos que requieren ensayes en proyectos ubicados fuera de su zona habitual de operación.',
		highlights: [
			'Apoyo a otros laboratorios',
			'Servicios en obra y laboratorio',
			'Resultados confiables y atención ágil',
		],
		primaryCtaLabel: 'Solicitar información',
		secondaryCtaLabel: 'Explorar servicios',
		image: {
			src: heroImage,
			alt: 'Trabajo de laboratorio y control de calidad en obra.',
		},
	},
	about: {
		title: 'Apoyo técnico serio para proyectos y laboratorios externos',
		description: [
			'En SADEY LABORATORIO PARA LA CONSTRUCCIÓN ofrecemos servicios de ensaye enfocados en apoyar a laboratorios externos que requieren la realización de pruebas específicas en proyectos ubicados fuera de su zona de operación.',
			'Nuestro objetivo es facilitar la obtención de resultados confiables sin necesidad de trasladar equipo o personal a largas distancias, optimizando tiempos, costos y logística en proyectos de construcción.',
		],
		image: {
			src: aboutImage,
			alt: 'Equipo SADEY LABORATORIO en ruta de trabajo hacia la obra.',
		},
	},
	cta: {
		title: 'Coordinemos el apoyo técnico que requiere tu proyecto',
		description:
			'Contáctanos por WhatsApp para solicitar información sobre nuestras pruebas específicas, control de calidad y apoyo técnico en obra.',
		primaryLabel: 'Escribir por WhatsApp',
		secondaryLabel: 'Ver datos de contacto',
		note: 'Respuesta ágil en horario laboral.',
	},
	contact: {
		phone: '+527531200374',
		phoneDisplay: '+52 753 120 0374',
		address: 'AV. FIDEL VELAZQUEZ S/N, EL COLOSO INFONAVIT, C.P. 39810, ACAPULCO DE JUAREZ, GUERRERO',
		whatsappUrl: WHATSAPP_URL,
		whatsappNumber: WHATSAPP_NUMBER,
		email: '',
		mapQuery: 'AV.+FIDEL+VELAZQUEZ,+EL+COLOSO+INFONAVIT,+ACAPULCO+DE+JUAREZ,+GUERRERO,+MEXICO',
	},
	footerNote:
		'Pruebas específicas y control de calidad para construcción, con enfoque en apoyo técnico y operación en obra o laboratorio.',
	pageMeta: {
		servicios: {
			title: 'Servicios | SADEY LABORATORIO',
			description:
				'Pruebas específicas por categoría en SADEY LABORATORIO: concretos, agregados pétreos, mezcla asfáltica, terracerías y SIAC. Ensayes, control de calidad y apoyo técnico especializado.',
		},
		proyectos: {
			title: 'Proyectos | SADEY LABORATORIO',
			description:
				'Proyectos recientes de SADEY LABORATORIO en control de calidad, diseño Marshall y apoyo técnico para infraestructura carretera y obra civil.',
		},
		contacto: {
			title: 'Contacto | SADEY LABORATORIO',
			description:
				'Contacta a SADEY LABORATORIO para solicitar información sobre pruebas específicas y control de calidad. WhatsApp, teléfono y dirección en Acapulco, Guerrero.',
		},
	},
};
