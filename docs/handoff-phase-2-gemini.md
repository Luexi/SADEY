# Handoff para Gemini - Fase 2

## Qué ya quedó hecho

- Proyecto Astro funcional
- Estructura reusable por componentes
- Datos y copy separados del markup
- Base semántica y accesible
- Tokens de diseño en CSS
- Placeholders locales
- Documentación técnica y editorial
- Deploy preparado para GitHub Pages
- Conservación en raíz de los archivos fuente TXT, PDF y JPG del cliente

## Qué no debes romper

- `src/data/*` como fuente principal de contenido
- `astro.config.mjs` con `site` y `base` actuales
- `.github/workflows/deploy.yml`
- la estructura semántica de headings
- los placeholders de contacto vacíos mientras el cliente no confirme datos reales
- la marca final `SADEY`

## Dónde tocar estilos

Empieza por aquí:

- `src/styles/tokens.css`
- `src/styles/global.css`

Después ajusta si hace falta:

- `src/components/ui/*`
- `src/components/sections/*`
- `src/components/layout/*`

## Dónde tocar contenido

Todo el contenido vive en:

- `src/data/site.ts`
- `src/data/services.ts`
- `src/data/projects.ts`
- `src/data/differentiators.ts`

Evita mover texto duro al markup.

## Componentes que puedes refinar

- `Header.astro`
- `Hero.astro`
- `About.astro`
- `ServicesPreview.astro`
- `ProjectsPreview.astro`
- `WhySadey.astro`
- `CTAWhatsApp.astro`
- `Footer.astro`
- `Button.astro`
- `Card.astro`
- `SectionHeading.astro`

## Objetivos de la Fase 2

- acercar el look a las referencias visuales sin copiar branding equivocado
- mejorar hero, composición y ritmo vertical
- subir el nivel visual general
- hacer más memorables botones, tarjetas y divisores
- definir una dirección estética más fina y consistente

## Límites de la Fase 2

No hacer todavía:

- formulario funcional
- backend
- subpáginas reales
- integración de correo
- inventar teléfonos, correos, dirección o certificaciones
- reemplazar `SADEY` por `MTHA`

## Notas editoriales

- El contenido ya fue depurado desde el TXT original
- El PDF técnico de agregados se usó como respaldo terminológico, no como bloque visible masivo
- Las dos imágenes JPG de la raíz son referencia visual, no assets finales conectados al frontend
- Si quieres ampliar el detalle técnico visible, hazlo de forma contenida y apoyándote en `futureDetails`
