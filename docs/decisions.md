# Decisiones tecnicas

## Stack y enfoque general

Se eligio Astro como framework principal para mantener el proyecto:

- estatico
- rapido
- facil de desplegar en GitHub Pages
- sencillo de mantener

El proyecto quedo orientado a crecimiento futuro, pero sin introducir complejidad prematura.

## Por que no se uso Tailwind

En esta fase convenia una base mas explicita y controlada:

- menos ruido visual en el markup
- tokens centralizados faciles de ajustar
- menor friccion para futuras iteraciones
- menos dependencia de utilidades para un sitio corporativo estatico

Se opto por CSS nativo con variables y componentes encapsulados porque deja una estructura limpia y suficientemente flexible para evolucionar el sitio sin rehacer la base visual.

## Estructura del proyecto

Se separo el proyecto en cuatro capas practicas:

- `src/data/*` para contenido editable
- `src/components/ui/*` para piezas reutilizables
- `src/components/sections/*` para bloques reutilizables por pagina
- `src/layouts/*` y `src/pages/*` para composicion y SEO

Esto permite modificar contenido, estilos y composicion sin mezclar responsabilidades.

## Evolucion de la portada

La portada se simplifico a una estructura mas compacta:

- header
- hero
- footer

Las secciones adicionales siguen existiendo en el proyecto cuando conviene reutilizarlas o retomarlas, pero la home actual prioriza una entrada mas directa.

## Navegacion y branding

La navegacion usa una estructura de items con `kind: "route"` centralizada en `src/data/site.ts`.

Eso permite:

- mantener header y footer sincronizados
- resaltar la ruta activa desde un solo origen
- ajustar rutas sin duplicar configuracion

El branding principal tambien depende de `src/data/site.ts`, mientras que el logo visual vive en `src/assets/branding/logo.png`.

## Preparacion para futuras subpaginas

La base sigue lista para crecer:

- los servicios tienen `slug`
- los proyectos tienen `slug`
- Terracerias ya contempla estructura por capas
- el layout mantiene SEO base y rutas canonicas

Eso deja el contenido listo para crecer a nuevas iteraciones sin redisenar la arquitectura.

## GitHub Pages

La configuracion quedo preparada para un sitio de proyecto:

- `site: https://luexi.github.io`
- `base: /SADEY`

Esto evita rutas rotas en Pages mientras el sitio viva dentro del repositorio `SADEY`.

Cuando exista dominio propio, bastara con:

- cambiar `site`
- cambiar `basePath` en `src/data/site.ts`
- eliminar `base`
- agregar `public/CNAME`

## Alcance evitado deliberadamente

No se agrego:

- backend
- formulario funcional
- CMS
- dependencias visuales pesadas
- integraciones innecesarias

La intencion fue entregar una base profesional, clara y facil de mantener, no una solucion sobrecargada.
