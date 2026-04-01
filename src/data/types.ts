export type LinkKind = 'anchor' | 'route';

export interface NavigationItem {
	label: string;
	href: string;
	kind: LinkKind;
}

export interface HeroData {
	eyebrow: string;
	title: string;
	description: string;
	highlights: string[];
	primaryCtaLabel: string;
	secondaryCtaLabel: string;
	image: {
		src: string;
		alt: string;
	};
}

export interface AboutData {
	title: string;
	description: string[];
	image: {
		src: string;
		alt: string;
	};
}

export interface CtaData {
	title: string;
	description: string;
	primaryLabel: string;
	secondaryLabel: string;
	note: string;
}

export interface SocialLink {
	label: string;
	url: string;
}

export interface SiteConfig {
	siteUrl: string;
	basePath: string;
	logoText: string;
	contactEmail: string;
	address: string;
	whatsappUrl: string;
	domain: string;
	socialLinks: SocialLink[];
	meta: {
		title: string;
		description: string;
	};
	navigation: NavigationItem[];
	hero: HeroData;
	about: AboutData;
	cta: CtaData;
	footerNote: string;
}

export interface ServiceItem {
	slug: string;
	title: string;
	shortDescription: string;
	bullets: string[];
	futureDetails?: string[];
}

export interface ProjectCase {
	slug: string;
	title: string;
	summary: string;
	fullDescription: string;
	category: string;
	contractNumber: string | null;
	image: {
		src: string;
		alt: string;
	};
	tags: string[];
}

export interface DifferentiatorItem {
	title: string;
	description: string;
	icon: string;
}
