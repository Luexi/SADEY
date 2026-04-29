# SADEY LABORATORIO PARA LA CONSTRUCCION - Sitio web corporativo

Sitio web corporativo multipagina para **SADEY LABORATORIO PARA LA CONSTRUCCION** (logotipo: MTHA), construido con Astro como sitio estatico y desplegado en GitHub Pages.

Estado actual: sitio en produccion con header y footer refinados, portada compacta enfocada en hero, y navegacion superior con chips que resaltan la ruta activa con contorno dorado.

El proyecto es **mobile-first por peticion del cliente**. Toda modificacion visual debe validarse primero en telefono: navegacion, fotos, video, galerias y altura de secciones tienen que conservar claridad y carga ligera antes de optimizar desktop.

## Guia rapida para agentes

Antes de modificar el proyecto:

1. Lee este `README.md` para entender rutas, estructura y archivos de contenido.
2. Lee `DESIGN.md` antes de tocar UI, estilos, componentes visuales o copy que afecte la identidad.
3. Valida primero en movil. El cliente pidio una experiencia mobile-first, asi que no des por bueno un cambio solo porque luce bien en desktop.
4. Si cambias colores, tipografia, espaciado, header, hero, footer, botones, cards, galerias, media o reglas responsive, actualiza `DESIGN.md` en el mismo cambio.
5. Si cambias decisiones de arquitectura o alcance, actualiza `docs/decisions.md`.
6. Ejecuta `npm run check` antes de dar el trabajo por terminado.

Regla importante: `DESIGN.md` es el contrato visual para agentes. No introduzcas una direccion estetica nueva sin reflejarla ahi.

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
npm run prepare:service-media
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
|   |   `-- video/             <- videos optimizados para web
|   |-- placeholders/stock/
|   |-- favicon.svg
|   `-- robots.txt
|-- src/
|   |-- assets/
|   |   |-- about/
|   |   |-- branding/          <- logo.png (MTHA)
|   |   |-- hero/
|   |   |-- projects/
|   |   `-- services/          <- imagenes optimizadas de servicios
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
|-- DESIGN.md              <- contrato visual para agentes
|-- package.json
|-- roadmap.md
`-- tsconfig.json
```

## Identidad visual

La fuente de verdad para identidad visual es `DESIGN.md`. Ese archivo documenta los tokens, componentes y reglas que deben seguir los agentes cuando modifiquen la UI.

Cuando un cambio visual altere el estado real del sitio, actualiza tambien `DESIGN.md`:

- colores o nuevos tokens visuales
- tipografia, tracking, radios, sombras o espaciado
- header, navegacion, hero, footer, botones, cards o galerias
- reglas de responsive o comportamiento movil que afecten la experiencia visual
- decisiones de "hacer / no hacer" que deban guiar futuras iteraciones

### Header

- Logo MTHA a la izquierda.
- Wordmark con **SADEY** y **LABORATORIO PARA LA CONSTRUCCION** al costado del logo.
- Navegacion en una sola fila con chips claros.
- La ruta activa se resalta con contorno dorado.

### Hero

- Titulo principal: **A que nos dedicamos?**
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
- **Terracerias** es un caso especial: agrupa capas repetidas en un panel combinado con chips "Aplica a" para evitar duplicar pruebas y fotos.
- Las pruebas por capa viven en `testsByCapa[]` y se renderizan como cards numeradas.
- **SIAC** reutiliza `futureDetails` con `detailsLabel: "Servicios incluidos"`.
- Mezcla Asfaltica incluye el video optimizado de Diseno Protocolo AMAAC, sin audio, con poster y `preload="metadata"` para no castigar la carga movil.
- Cada prueba con material visual se muestra como un carrusel mobile-first dentro del bloque "Registros visuales" del servicio. En Terracerias los carruseles se renderizan una sola vez por prueba, fuera del acordeon de capas, para no repetir las mismas fotos por capa.

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

## Donde preparar fotos y video de servicios

Las fuentes pesadas del cliente viven localmente en `FOTOS PRUEBAS/` y no se deben commitear. Para regenerar las versiones ligeras:

```bash
npm run prepare:service-media
```

El script `scripts/prepare-service-media.mjs` hace tres cosas:

1. Optimiza las fotos de cada prueba bajo `src/assets/services/<servicio>/<prueba-slug>/NN.webp` (WebP, ancho maximo 1600 px, calidad 78, sin metadata). Por defecto toma hasta 6 fotos por prueba ordenadas alfabeticamente; AMAAC se cierra a 4 porque el video lleva el peso narrativo.
2. Regenera `src/data/service-galleries.generated.ts`, un indice TypeScript con los imports y la estructura `serviceGalleriesBySlug` que `src/data/services.ts` mergea automaticamente en cada `ServiceItem` como `testGalleries`.
3. Optimiza el video AMAAC (`public/assets/video/protocolo-amaac.mp4`) sin audio, su poster y las fotos antes/despues de CHILIXX.

Para agregar o reorganizar pruebas:

1. Coloca las fotos del cliente en `FOTOS PRUEBAS/<SERVICIO>/<NOMBRE DE PRUEBA>/`.
2. Si la prueba es nueva, agrega una entrada en el array `galleryConfig` de `scripts/prepare-service-media.mjs` con `testSlug`, `testTitle`, `folder` y un `cap` opcional.
3. Ejecuta `npm run prepare:service-media`.
4. Verifica con `npm run check` y `npm run build` que el indice generado no contenga imports rotos.

`src/data/service-galleries.generated.ts` se regenera siempre desde cero, no se debe editar a mano. Las pruebas declaradas en `services.ts` que no tienen carpeta correspondiente o cuya carpeta esta vacia se omiten silenciosamente con un aviso en consola.

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

- Contrato visual para agentes: `DESIGN.md`
- Roadmap del proyecto: `roadmap.md`
- Auditoria editorial: `docs/content-audit.md`
- Decisiones tecnicas: `docs/decisions.md`
