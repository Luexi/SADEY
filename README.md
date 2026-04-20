# SADEY LABORATORIO PARA LA CONSTRUCCIÓN — Sitio web corporativo

Sitio web corporativo multipágina para **SADEY LABORATORIO PARA LA CONSTRUCCIÓN** (logotipo: MTHA), construido con Astro como sitio estático y desplegado en GitHub Pages.

Estado actual: sitio en producción con branding refinado, servicios consolidados bajo "Pruebas específicas" y sección de Terracerías con paneles desplegables por capa y pruebas en formato de cards numeradas.

## Objetivo del proyecto

Presentar las pruebas específicas, servicios y proyectos de SADEY LABORATORIO con una arquitectura web profesional, escalable y lista para crecer.

## Stack

- Astro 6
- TypeScript 5
- CSS nativo con variables de diseño (tokens)
- GitHub Actions + GitHub Pages
- `@astrojs/sitemap`

## Requisitos

- Node.js 22.12+ o superior
- npm 11+ recomendado

## Comandos principales

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Estructura del sitio (rutas)

| Ruta | Descripción |
|------|-------------|
| `/` | Portada: hero, nosotros, preview de servicios y proyectos, CTA |
| `/servicios` | Página completa de servicios agrupados por categoría |
| `/proyectos` | Índice de proyectos con fichas navegables |
| `/proyectos/[slug]` | Ficha individual de proyecto con galería |
| `/contacto` | Datos de contacto reales, mapa y WhatsApp |

## Estructura del proyecto

```text
/
├── .github/workflows/deploy.yml
├── public/
│   ├── assets/
│   │   ├── projects/          ← fotos por proyecto (por slug)
│   │   └── services/          ← imágenes de servicio
│   ├── placeholders/stock/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── about/
│   │   ├── branding/          ← logo.png (MTHA)
│   │   ├── hero/
│   │   └── projects/
│   ├── components/
│   │   ├── layout/            Header, Footer
│   │   ├── sections/          Hero, About, WhySadey, PageHero,
│   │   │                      ServicesPreview, ServiceCategoryBlock,
│   │   │                      ProjectsPreview, ProjectDetailHero,
│   │   │                      ContactInfo, MapBlock, CTAWhatsApp
│   │   └── ui/                Button, Card, Container, Gallery,
│   │                          SectionHeading, EmptyGalleryState
│   ├── data/
│   │   ├── types.ts           SiteConfig, ServiceItem, TestsByCapa,
│   │   │                      ProjectCase, DifferentiatorItem
│   │   ├── site.ts            Config global, navegación, SEO, contacto,
│   │   │                      brandName / brandTagline
│   │   ├── services.ts        5 categorías con pruebas específicas
│   │   ├── projects.ts        Proyectos con galería
│   │   └── differentiators.ts Diferenciadores de marca
│   ├── layouts/
│   │   └── BaseLayout.astro   Layout con SEO (OG, canonical, Twitter)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── servicios.astro
│   │   ├── contacto.astro
│   │   └── proyectos/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   └── utils/
│       └── paths.ts           withBase() para GitHub Pages
├── astro.config.mjs
├── package.json
├── roadmap.md
└── tsconfig.json
```

## Identidad visual

### Header

- Logo MTHA (imagen) a la izquierda, ampliado.
- Palabra **SADEY** en blanco al costado del logo, alineada con el texto del badge.
- En pantallas ≤480px se oculta el wordmark para dejar sólo el icono.

### Hero

- Bloque de marca apilado: **SADEY** grande en dorado + **LABORATORIO PARA LA CONSTRUCCIÓN** debajo en tracking amplio (semántica `<h1>`).
- Logo MTHA decorativo a la derecha del panel del hero.
- Sin CTA primario; queda únicamente "Explorar servicios" como secundario.
- `brandName` y `brandTagline` viven en `src/data/site.ts` y son la fuente única de verdad del wordmark.

### Servicios (página `/servicios`)

Cada categoría (Concretos, Agregados pétreos, Mezcla asfáltica, Terracerías, SIAC) se renderiza con `ServiceCategoryBlock`:

- Descripción corta en la cabecera.
- Una sola columna bajo el rubro **Pruebas específicas** (o el label custom definido en `detailsLabel`).
- **Terracerías** es un caso especial: en lugar de una lista plana, muestra 7 paneles `<details>` desplegables (uno por capa). Las pruebas específicas por capa se definen en el campo `testsByCapa[]` y se renderizan como una grilla de cards numeradas (`01`, `02`, …) con hover dorado. Un script inline abre automáticamente el panel correspondiente si la URL llega con hash `#capa-<slug>`.
- **SIAC** reutiliza `futureDetails` con `detailsLabel: "Servicios incluidos"` al ser un servicio y no una lista de ensayes.

## Dónde editar contenido

| Qué | Archivo |
| --- | --- |
| Nombre de marca, tagline, SEO global, navegación, contacto, hero copy | [`src/data/site.ts`](src/data/site.ts) |
| Pruebas específicas por servicio | [`src/data/services.ts`](src/data/services.ts) |
| Pruebas específicas **por capa de terracerías** | `testsByCapa[].tests` dentro de la entrada `terracerias` en [`src/data/services.ts`](src/data/services.ts) |
| Proyectos y galerías | [`src/data/projects.ts`](src/data/projects.ts) |
| Diferenciadores de marca | [`src/data/differentiators.ts`](src/data/differentiators.ts) |
| Tipos compartidos | [`src/data/types.ts`](src/data/types.ts) |

Toda la landing consume datos desde esos archivos. El contenido se puede actualizar sin tocar la estructura visual.

## Dónde actualizar el logo

El logo MTHA vive en `src/assets/branding/logo.png` y se renderiza vía `<Image>` de Astro en dos lugares:

- `src/components/layout/Header.astro` (tamaño clamp 3rem–4.2rem)
- `src/components/sections/Hero.astro` (tamaño clamp 9rem–17rem, decorativo a la derecha)

Para reemplazarlo, sobreescribe ese archivo con un nuevo PNG/SVG. Astro regenera los tamaños responsivos automáticamente.

## Dónde agregar fotos de proyecto

1. Crea una carpeta en `public/assets/projects/<slug>/` o coloca los archivos en `src/assets/projects/<slug>/` (preferible, para que pasen por `<Image>`).
2. Edita `src/data/projects.ts` para llenar el array `gallery` del proyecto.

## Dónde reemplazar imágenes placeholder

- Hero: `src/assets/hero/hero-main.jpeg`
- Sobre nosotros: `src/assets/about/about-main.jpg`

## GitHub Pages

Configuración actual:

- `site`: `https://luexi.github.io`
- `base`: `/SADEY`

### Deploy

Automático en cada push a `main` vía `.github/workflows/deploy.yml`.
En el repositorio: `Settings > Pages > Source` → `GitHub Actions`.

### Si los assets salen rotos

1. Que `base` siga siendo `/SADEY` en `astro.config.mjs`
2. Que `basePath` siga siendo `/SADEY` en `src/data/site.ts`
3. Que los enlaces usen `withBase()` de `src/utils/paths.ts`
4. Que el workflow esté ejecutándose sobre `main`

## SEO implementado

- `<title>` único por página
- `<meta name="description">` por página
- Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`)
- Twitter Card
- `<link rel="canonical">` por página
- `robots.txt`
- Sitemap automático (`@astrojs/sitemap`)
- Jerarquía de headings con un solo `<h1>` por página

## Documentación adicional

- Roadmap del proyecto: [`roadmap.md`](roadmap.md)
- Auditoría editorial: [`docs/content-audit.md`](docs/content-audit.md)
- Decisiones técnicas: [`docs/decisions.md`](docs/decisions.md)
