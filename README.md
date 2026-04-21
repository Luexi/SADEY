# SADEY LABORATORIO PARA LA CONSTRUCCION - Sitio web corporativo

Sitio web corporativo multipagina para **SADEY LABORATORIO PARA LA CONSTRUCCION** (logotipo: MTHA), construido con Astro como sitio estatico y desplegado en GitHub Pages.

Estado actual: sitio en produccion con header y footer refinados, portada compacta enfocada en hero, y navegacion superior con chips que resaltan la ruta activa con contorno dorado.

## Objetivo del proyecto

Presentar las pruebas especificas, servicios y proyectos de SADEY LABORATORIO con una arquitectura web profesional, escalable y lista para crecer.

## Stack

- Astro 6
- TypeScript 5
- CSS nativo con variables de diseno (tokens)
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

| Ruta | Descripcion |
|------|-------------|
| `/` | Portada compacta: header, hero y footer |
| `/servicios` | Pagina completa de servicios agrupados por categoria |
| `/proyectos` | Indice de proyectos con fichas navegables |
| `/proyectos/[slug]` | Ficha individual de proyecto con galeria |
| `/contacto` | Datos de contacto reales, mapa y WhatsApp |

## Estructura del proyecto

```text
/
|-- .github/workflows/deploy.yml
|-- public/
|   |-- assets/
|   |   |-- projects/          <- fotos por proyecto (por slug)
|   |   `-- services/          <- imagenes de servicio
|   |-- placeholders/stock/
|   |-- favicon.svg
|   `-- robots.txt
|-- src/
|   |-- assets/
|   |   |-- about/
|   |   |-- branding/          <- logo.png (MTHA)
|   |   |-- hero/
|   |   `-- projects/
|   |-- components/
|   |   |-- layout/            Header, Footer
|   |   |-- sections/          Hero, About, WhySadey, PageHero,
|   |   |                      ServiceCategoryBlock, ProjectDetailHero,
|   |   |                      ContactInfo, MapBlock, CTAWhatsApp
|   |   `-- ui/                Button, Card, Container, Gallery,
|   |                          SectionHeading, EmptyGalleryState
|   |-- data/
|   |   |-- types.ts           SiteConfig, ServiceItem, TestsByCapa,
|   |   |                      ProjectCase, DifferentiatorItem
|   |   |-- site.ts            Config global, navegacion, SEO, contacto,
|   |   |                      brandName / brandTagline
|   |   |-- services.ts        5 categorias con pruebas especificas
|   |   |-- projects.ts        Proyectos con galeria
|   |   `-- differentiators.ts Diferenciadores de marca
|   |-- layouts/
|   |   `-- BaseLayout.astro   Layout con SEO (OG, canonical, Twitter)
|   |-- pages/
|   |   |-- index.astro
|   |   |-- servicios.astro
|   |   |-- contacto.astro
|   |   `-- proyectos/
|   |       |-- index.astro
|   |       `-- [slug].astro
|   |-- styles/
|   |   |-- tokens.css
|   |   `-- global.css
|   `-- utils/
|       `-- paths.ts           withBase() para GitHub Pages
|-- astro.config.mjs
|-- package.json
|-- roadmap.md
`-- tsconfig.json
```

## Identidad visual

### Header

- Logo MTHA a la izquierda.
- Wordmark con **SADEY** y **LABORATORIO PARA LA CONSTRUCCION** al costado del logo.
- Navegacion en una sola fila con chips claros.
- La ruta activa se resalta con contorno dorado.

### Hero

- Titulo principal: **¿A que nos dedicamos?**
- Imagen de fondo principal desde `src/assets/hero/hero-main.jpeg`.
- Badge de marca visible en desktop y oculto en movil.
- Sin CTA dentro del hero.

### Footer

- Footer compacto con descripcion breve.
- Navegacion secundaria en chips.
- Contacto resumido para reducir altura vertical, sobre todo en movil.

### Servicios (`/servicios`)

Cada categoria (Concretos, Agregados petreos, Mezcla asfaltica, Terracerias, SIAC) se renderiza con `ServiceCategoryBlock`.

- Descripcion corta en la cabecera.
- Una sola columna bajo el rubro **Pruebas especificas** o el label custom definido en `detailsLabel`.
- **Terracerias** es un caso especial: muestra 7 paneles `<details>` desplegables, uno por capa.
- Las pruebas por capa viven en `testsByCapa[]` y se renderizan como cards numeradas.
- **SIAC** reutiliza `futureDetails` con `detailsLabel: "Servicios incluidos"`.

## Donde editar contenido

| Que | Archivo |
| --- | --- |
| Nombre de marca, tagline, SEO global, navegacion, contacto, hero copy | `src/data/site.ts` |
| Pruebas especificas por servicio | `src/data/services.ts` |
| Pruebas especificas por capa de terracerias | `testsByCapa[].tests` dentro de `terracerias` en `src/data/services.ts` |
| Proyectos y galerias | `src/data/projects.ts` |
| Diferenciadores de marca | `src/data/differentiators.ts` |
| Tipos compartidos | `src/data/types.ts` |

La mayor parte del contenido del sitio consume datos desde esos archivos. El contenido se puede actualizar sin tocar la estructura visual principal.

## Donde actualizar el logo

El logo MTHA vive en `src/assets/branding/logo.png` y se renderiza principalmente en:

- `src/components/layout/Header.astro`

Para reemplazarlo, sobreescribe ese archivo con un nuevo PNG o SVG. Astro regenera los tamanos responsivos automaticamente.

## Donde agregar fotos de proyecto

1. Crea una carpeta en `public/assets/projects/<slug>/` o coloca los archivos en `src/assets/projects/<slug>/`.
2. Edita `src/data/projects.ts` para llenar el array `gallery` del proyecto.

## Donde reemplazar imagenes placeholder

- Hero: `src/assets/hero/hero-main.jpeg`
- Sobre nosotros: `src/assets/about/about-main.jpg` (actualmente no se usa en la portada, pero sigue disponible)

## GitHub Pages

Configuracion actual:

- `site`: `https://luexi.github.io`
- `base`: `/SADEY`

### Deploy

Automatico en cada push a `main` via `.github/workflows/deploy.yml`.
En el repositorio: `Settings > Pages > Source` -> `GitHub Actions`.

### Si los assets salen rotos

1. Que `base` siga siendo `/SADEY` en `astro.config.mjs`
2. Que `basePath` siga siendo `/SADEY` en `src/data/site.ts`
3. Que los enlaces usen `withBase()` de `src/utils/paths.ts`
4. Que el workflow este ejecutandose sobre `main`

## SEO implementado

- `<title>` unico por pagina
- `<meta name="description">` por pagina
- Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`)
- Twitter Card
- `<link rel="canonical">` por pagina
- `robots.txt`
- Sitemap automatico (`@astrojs/sitemap`)
- Jerarquia de headings con un solo `<h1>` por pagina

## Documentacion adicional

- Roadmap del proyecto: `roadmap.md`
- Auditoria editorial: `docs/content-audit.md`
- Decisiones tecnicas: `docs/decisions.md`
