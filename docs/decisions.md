# Decisiones técnicas

## Stack y enfoque general

Se eligió Astro como framework principal para mantener el proyecto:

- estático
- rápido
- fácil de desplegar en GitHub Pages
- sencillo de mantener

El proyecto quedó orientado a crecimiento futuro, pero sin introducir complejidad prematura.

## Por qué no se usó Tailwind

En esta fase convenía una base más explícita y controlada:

- menos ruido visual en el markup
- tokens centralizados fáciles de ajustar
- menor fricción para otra IA que entre a refinar el look
- menos dependencia de utilidades para una sola landing

Se optó por CSS nativo con variables y componentes encapsulados porque deja una estructura limpia y suficientemente flexible para la Fase 2.

## Estructura del proyecto

Se separó el proyecto en cuatro capas prácticas:

- `src/data/*` para contenido editable
- `src/components/ui/*` para piezas reutilizables
- `src/components/sections/*` para bloques de la landing
- `src/layouts/*` y `src/pages/*` para composición y SEO

Esto permite modificar contenido, estilos y composición sin mezclar responsabilidades.

## Preparación para Gemini en Fase 2

Se dejó una base visual sobria, pero intencional:

- paleta corporativa y técnica
- jerarquía clara
- placeholders locales reemplazables
- secciones bien segmentadas

Gemini podrá enfocarse en refinamiento visual trabajando sobre:

- `src/styles/tokens.css`
- `src/styles/global.css`
- componentes de sección y UI

sin tener que reconstruir la arquitectura ni reorganizar los datos.

## Preparación para futuras subpáginas

La navegación ya usa una estructura de items con `kind: "anchor" | "route"`.
Esto permite migrar después de anclas a rutas reales como `/servicios`, `/proyectos` o `/contacto` con cambios mínimos.

Además:

- los servicios tienen `slug`
- los proyectos tienen `slug`
- el servicio de agregados conserva `futureDetails`

Eso deja el contenido listo para crecer a fichas, acordeones o páginas individuales.

## GitHub Pages

La configuración quedó preparada para un sitio de proyecto:

- `site: https://luexi.github.io`
- `base: /SADEY`

Esto evita rutas rotas en Pages mientras el sitio viva dentro del repositorio `SADEY`.

Cuando exista dominio propio, bastará con:

- cambiar `site`
- cambiar `basePath` en `src/data/site.ts`
- eliminar `base`
- agregar `public/CNAME`

## Alcance evitado deliberadamente

No se agregó:

- backend
- formulario funcional
- librerías extra
- CMS
- subpáginas reales
- branding final

La intención fue entregar una base profesional, no una solución sobrecargada ni improvisada.
