import type { ImageMetadata } from 'astro';

export type LinkKind = 'anchor' | 'route' | 'external';

export interface NavigationItem {
	label: string;
	href: string;
	kind: LinkKind;
}

export interface PageMeta {
	title: string;
	description: string;
	ogImage?: string;
}

export interface HeroData {
	eyebrow: string;
	title: string;
	description: string;
	highlights: string[];
	primaryCtaLabel: string;
	secondaryCtaLabel: string;
	image: {
		src: ImageMetadata;
		alt: string;
	};
}

export interface AboutData {
	title: string;
	description: string[];
	image: {
		src: ImageMetadata;
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

export interface ContactData {
	phone: string;
	phoneDisplay: string;
	address: string;
	whatsappUrl: string;
	whatsappNumber: string;
	email: string;
	mapQuery: string;
}

export interface SocialLink {
	label: string;
	url: string;
}

export interface SiteConfig {
	siteUrl: string;
	basePath: string;
	logoText: string;
	logoTextShort?: string;
	brandName: string;
	brandTagline: string;
	contactEmail: string;
	address: string;
	whatsappUrl: string;
	domain: string;
	socialLinks: SocialLink[];
	meta: PageMeta;
	navigation: NavigationItem[];
	headerCta: NavigationItem;
	hero: HeroData;
	about: AboutData;
	cta: CtaData;
	contact: ContactData;
	footerNote: string;
	pageMeta: Record<string, PageMeta>;
}

export interface GalleryImage {
	src: ImageMetadata;
	alt: string;
	caption?: string;
}

export interface TestsByCapa {
	capaSlug: string;
	capaTitle: string;
	appliesTo?: string[];
	tests: string[];
}

export interface ServiceMediaImage {
	src: ImageMetadata;
	alt: string;
	title: string;
	caption?: string;
}

export interface ServiceVideo {
	title: string;
	description: string;
	src: string;
	poster: string;
}

export interface ServiceItem {
	slug: string;
	title: string;
	shortDescription: string;
	bullets?: string[];
	futureDetails?: string[];
	detailsLabel?: string;
	testsByCapa?: TestsByCapa[];
	media?: {
		images?: ServiceMediaImage[];
		video?: ServiceVideo;
	};
	icon?: string;
	metaDescription?: string;
}

export interface ProjectComparison {
	title: string;
	description: string;
	before: GalleryImage;
	after: GalleryImage;
}

export interface ProjectCase {
	slug: string;
	title: string;
	summary: string;
	fullDescription: string;
	category: string;
	contractNumber: string | null;
	image: {
		src: ImageMetadata;
		alt: string;
	};
	tags: string[];
	comparison?: ProjectComparison;
	gallery: GalleryImage[];
	metaDescription?: string;
}

export interface DifferentiatorItem {
	title: string;
	description: string;
	icon: string;
}
