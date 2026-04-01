import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
	siteUrl: 'https://luexi.github.io',
	basePath: '/SADEY',
	logoText: 'SADEY',
	contactEmail: '',
	address: '',
	whatsappUrl: '',
	domain: '',
	socialLinks: [],
	meta: {
		title: 'SADEY | Laboratorio para la construcción',
		description:
			'Servicios de ensaye para construcción enfocados en apoyar laboratorios externos y proyectos en obra con resultados confiables, atención rápida y soporte técnico especializado.',
	},
	navigation: [
		{ label: 'Inicio', href: '#inicio', kind: 'anchor' },
		{ label: 'Servicios', href: '#servicios', kind: 'anchor' },
		{ label: 'Proyectos', href: '#proyectos', kind: 'anchor' },
		{ label: 'Contacto', href: '#contacto', kind: 'anchor' },
	],
	hero: {
		eyebrow: 'Laboratorio para la construcción',
		title: 'Apoyo técnico confiable para obra, laboratorio y control de calidad.',
		description:
			'SADEY brinda servicios de ensaye para construcción y soporte especializado a laboratorios externos que requieren pruebas específicas fuera de su zona habitual de operación.',
		highlights: [
			'Servicios en obra y laboratorio',
			'Respuesta ágil para proyectos en ejecución',
			'Base preparada para crecer a servicios y proyectos detallados',
		],
		primaryCtaLabel: 'WhatsApp por configurar',
		secondaryCtaLabel: 'Ver servicios',
		image: {
			src: '/placeholders/hero-placeholder.svg',
			alt: 'Representación visual temporal del laboratorio y sus servicios.',
		},
	},
	about: {
		title: 'Sobre nosotros',
		description: [
			'En SADEY ofrecemos servicios de ensaye para apoyar a laboratorios externos que necesitan pruebas específicas en proyectos ubicados fuera de su zona de operación.',
			'Nuestro objetivo es facilitar resultados confiables sin trasladar equipo o personal a largas distancias, optimizando tiempos, costos y logística para el control de calidad en construcción.',
		],
		image: {
			src: '/placeholders/about-placeholder.svg',
			alt: 'Placeholder de apoyo visual para la sección sobre SADEY.',
		},
	},
	cta: {
		title: 'Preparado para activar el canal de contacto cuando el cliente lo confirme',
		description:
			'La base del CTA ya está lista para enlazar con WhatsApp. Solo falta incorporar el número oficial para habilitar el contacto directo.',
		primaryLabel: 'WhatsApp por definir',
		secondaryLabel: 'Volver al inicio',
		note: 'No se publica ningún número hasta contar con confirmación oficial.',
	},
	footerNote:
		'Base técnica y editorial de Fase 1 lista para refinamiento visual, branding final y futuras subpáginas.',
};
