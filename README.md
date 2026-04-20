# SADEY LABORATORIO PARA LA CONSTRUCCIÓN - Sitio web corporativo

Sitio web corporativo multipágina para SADEY LABORATORIO PARA LA CONSTRUCCIÓN (logotipo: MTHA), construido con Astro como sitio estático y desplegado en GitHub Pages.

Estado actual: `Fase 4 completada — Assets reales, branding corregido y pruebas específicas`

## Objetivo del proyecto

Presentar las pruebas específicas, servicios y proyectos de SADEY LABORATORIO con una arquitectura web profesional, escalable y lista para crecer.

## Stack

- Astro 6
- TypeScript
- CSS nativo con variables de diseño (tokens)
- GitHub Actions + GitHub Pages
- @astrojs/sitemap

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
| `/proyectos/[slug]` | Ficha individual de proyecto con galería preparada |
| `/contacto` | Datos de contacto reales, mapa y WhatsApp |

## Estructura del proyecto

```text
/
├── .github/workflows/deploy.yml
├── public/
│   ├── assets/
│   │   ├── branding/          ← logo futuro
│   │   ├── projects/          ← fotos por proyecto (por slug)
│   │   └── services/          ← imágenes de servicio
│   ├── placeholders/
│   │   └── stock/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/            Header, Footer
│   │   ├── sections/          Hero, About, PageHero, ServicesPreview,
│   │   │                      ServiceCategoryBlock, ProjectsPreview,
│   │   │                      ProjectDetailHero, ContactInfo, MapBlock,
│   │   │                      CTAWhatsApp
│   │   └── ui/                Button, Card, Container, SectionHeading,
│   │                          EmptyGalleryState
│   ├── data/
│   │   ├── types.ts
│   │   ├── site.ts            Config global, navegación, SEO, contacto
│   │   ├── services.ts        5 categorías de servicio
│   │   ├── projects.ts        Proyectos con galería preparada
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
│       └── paths.ts
├── astro.config.mjs
├── package.json
├── roadmap.md
└── tsconfig.json
```

## Dónde editar contenido

- Configuración general, SEO, navegación y contacto: `src/data/site.ts`
- Servicios: `src/data/services.ts`
- Proyectos: `src/data/projects.ts`
- Diferenciadores: `src/data/differentiators.ts`

Toda la landing consume datos desde esos archivos. El contenido se puede actualizar sin tocar la estructura visual.

## Dónde actualizar el logo

El logo real (MTHA) vive en `src/assets/branding/logo.png` y se renderiza vía `<Image>` de Astro en `src/components/layout/Header.astro`. Para reemplazarlo, sobreescribe ese archivo con un nuevo PNG/SVG y ajusta `widths`/`sizes` si cambia la proporción.

## Dónde agregar fotos de proyecto

1. Crea una carpeta en `public/assets/projects/<slug>/`
2. Agrega las imágenes
3. Edita `src/data/projects.ts` para llenar el array `gallery` del proyecto

## Dónde reemplazar imágenes placeholder

- Hero: `public/placeholders/stock/hero-stock.jpg`
- Sobre nosotros: `public/placeholders/stock/about-stock.jpg`
- Proyectos: `public/placeholders/stock/project-*-stock.jpg`

## GitHub Pages

Configuración actual:

- `site`: `https://luexi.github.io`
- `base`: `/SADEY`

### Deploy

En el repositorio: `Settings > Pages > Source` → `GitHub Actions`

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
- Headings con jerarquía correcta (un solo `<h1>` por página)

## Documentación adicional

- Roadmap del proyecto: `roadmap.md`
- Auditoría editorial: `docs/content-audit.md`
- Decisiones técnicas: `docs/decisions.md`
