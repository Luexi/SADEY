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
			'Servicios de ensaye para construcción y apoyo técnico para laboratorios externos, control de calidad en obra y trabajo especializado con enfoque confiable.',
	},
	navigation: [
		{ label: 'Inicio', href: '#inicio', kind: 'anchor' },
		{ label: 'Servicios', href: '#servicios', kind: 'anchor' },
		{ label: 'Proyectos', href: '#proyectos', kind: 'anchor' },
		{ label: 'Contacto', href: '#contacto', kind: 'anchor' },
	],
	hero: {
		eyebrow: 'Laboratorio para la construcción',
		title: 'Ensayes y apoyo técnico confiable para obra, laboratorio y control de calidad.',
		description:
			'SADEY brinda servicios de ensaye para construcción y soporte especializado a laboratorios externos que requieren pruebas específicas fuera de su zona habitual de operación.',
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
			'En SADEY ofrecemos servicios de ensaye orientados a respaldar a laboratorios externos que necesitan pruebas específicas en proyectos ubicados fuera de su zona de operación.',
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
			'La landing está preparada para presentar capacidades reales, proyectos y especialidades de SADEY sin exponer información no confirmada.',
		primaryLabel: 'Ir a contacto',
		secondaryLabel: 'Volver al inicio',
		note: 'Mientras se confirman los datos oficiales, SADEY no publica teléfono, correo ni dirección.',
	},
	footerNote:
		'Servicios de ensaye para construcción con enfoque en apoyo técnico, control de calidad y operación en obra o laboratorio.',
};
