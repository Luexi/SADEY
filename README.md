# SADEY - Landing corporativa

Landing page corporativa para SADEY construida con Astro como sitio estático, preparada para desplegarse en GitHub Pages y para refinarse visualmente en una siguiente iteración.

Estado actual: `Fase 1 completada`

## Objetivo del proyecto

Esta fase entrega la base técnica y editorial del sitio:

- arquitectura ordenada y escalable
- contenido inicial corregido y estructurado
- placeholders locales reemplazables
- estilos globales con tokens CSS
- despliegue automático en GitHub Pages desde `main`
- documentación de handoff para la Fase 2

La Fase 1 no incluye formulario funcional, logo final, branding definitivo ni subpáginas reales.

## Stack

- Astro
- TypeScript
- CSS nativo con variables de diseño
- GitHub Actions + GitHub Pages

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

## Desarrollo local

1. Instala dependencias:

```bash
npm install
```

2. Inicia el servidor local:

```bash
npm run dev
```

3. Abre `http://localhost:4321/SADEY/` si quieres validar el proyecto con `base` activo, o la URL local indicada por Astro durante desarrollo.

## Build de producción

```bash
npm run build
```

El sitio compilado queda en `dist/`.

Para revisarlo localmente como se publicará:

```bash
npm run preview
```

## Estructura del proyecto

```text
/
├── 40bdfddc-7e1d-4034-afde-edb3989426ba.jpg
├── a513e5d2-b0d6-4b8f-9ba4-cf53e6c77a12.jpg
├── datos pagina web.txt
├── PRUEBAS FISICAS Y QUIMICAS PARA LOS AGREGADOS.pdf
├── .github/workflows/deploy.yml
├── docs/
├── public/
│   ├── favicon.svg
│   └── placeholders/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
├── roadmap.md
└── tsconfig.json
```

## Archivos fuente del cliente

En la raíz del repositorio se conservaron estos insumos originales para trazabilidad y futuras iteraciones:

- `datos pagina web.txt`
- `PRUEBAS FISICAS Y QUIMICAS PARA LOS AGREGADOS.pdf`
- `40bdfddc-7e1d-4034-afde-edb3989426ba.jpg`
- `a513e5d2-b0d6-4b8f-9ba4-cf53e6c77a12.jpg`

Estos archivos funcionan como referencia editorial y visual. No son parte del build productivo ni deben tratarse como assets finales del sitio.

## Dónde editar contenido

- Configuración general, SEO, navegación y placeholders de contacto: `src/data/site.ts`
- Servicios: `src/data/services.ts`
- Proyectos/casos destacados: `src/data/projects.ts`
- Diferenciales: `src/data/differentiators.ts`

El contenido base fue estructurado a partir de `datos pagina web.txt` y del PDF técnico ubicado en la raíz del repositorio.

Toda la landing consume datos desde esos archivos. La idea es que el contenido se pueda actualizar sin tocar la estructura visual.

## Dónde reemplazar imágenes

- Hero: `public/placeholders/hero-placeholder.svg`
- Sobre nosotros: `public/placeholders/about-placeholder.svg`
- Proyectos: `public/placeholders/project-1-placeholder.svg`, `project-2-placeholder.svg`, `project-3-placeholder.svg`

Gemini puede sustituir estos placeholders por imágenes reales sin modificar el modelo de datos ni la composición general.

Las dos imágenes JPG de la raíz se conservan como referencia visual del cliente, no como recursos finales conectados a la landing.

## Estilos y sistema visual

- Tokens globales: `src/styles/tokens.css`
- Base global y utilidades: `src/styles/global.css`

Los componentes tienen estilos encapsulados y apoyos mínimos desde globales. Para refinar la estética en Fase 2, conviene empezar por tokens y después ajustar los estilos de sección.

## GitHub Pages

La configuración actual asume publicación en:

- `site`: `https://luexi.github.io`
- `base`: `/SADEY`

Esto permite que el repositorio `SADEY` funcione correctamente como sitio de proyecto dentro de GitHub Pages.

### Archivos clave de deploy

- Configuración Astro: `astro.config.mjs`
- Workflow: `.github/workflows/deploy.yml`

### Qué hacer en GitHub

En el repositorio, entra a:

`Settings > Pages > Source`

y deja seleccionada la opción:

`GitHub Actions`

### Si los assets salen rotos en GitHub Pages

Revisa esto en orden:

1. Que `base` siga siendo `/SADEY` en `astro.config.mjs`
2. Que `basePath` siga siendo `/SADEY` en `src/data/site.ts`
3. Que los enlaces internos y assets usen la utilidad `withBase()` o rutas relativas correctas
4. Que el workflow esté ejecutándose sobre `main`
5. Que Pages esté configurado para publicar desde `GitHub Actions`

## Dónde cambiar el base path

- Configuración de build y rutas públicas: `astro.config.mjs`
- Configuración usada por navegación, CTA y assets locales: `src/data/site.ts`

Ambos valores deben mantenerse sincronizados mientras el proyecto se publique como `https://luexi.github.io/SADEY`.

## Dónde cambiar el dominio cuando llegue el momento

1. Actualiza `site` en `astro.config.mjs`
2. Cambia `basePath` en `src/data/site.ts` a `''`
3. Elimina `base` de `astro.config.mjs`
4. Agrega `public/CNAME`
5. Configura el dominio en GitHub Pages

## Migración futura a dominio propio

Cuando exista dominio propio:

1. Agrega `public/CNAME` con el dominio final, por ejemplo `www.tudominio.com`
2. Cambia `site` en `astro.config.mjs` al dominio final
3. Cambia `basePath` en `src/data/site.ts` a `''`
4. Elimina `base` de `astro.config.mjs`
5. Revisa cualquier enlace interno que antes dependiera de `/SADEY`
6. Configura DNS y HTTPS desde GitHub Pages

GitHub indica que, cuando Pages se publica con un workflow personalizado, el dominio debe gestionarse desde la configuración del repositorio y el `CNAME` en `public/`.

## Handoff entre Codex y Gemini

Codex dejó lista la base técnica, editorial y de despliegue.

Gemini debe enfocarse en:

- refinamiento visual
- ritmo vertical
- hero
- tarjetas
- tipografía
- paleta fina
- tratamiento de placeholders e imágenes reales

Gemini no debe romper:

- el modelo de datos en `src/data/*`
- el deploy a GitHub Pages
- el `base` actual
- la estructura semántica y accesible

Consulta `docs/handoff-phase-2-gemini.md` antes de modificar el diseño.

## Documentación adicional

- Roadmap del proyecto: `roadmap.md`
- Auditoría editorial y de contenido: `docs/content-audit.md`
- Decisiones técnicas: `docs/decisions.md`
- Handoff para la Fase 2: `docs/handoff-phase-2-gemini.md`
