---
version: alpha
name: SADEY Laboratorio
description: Identidad visual para el sitio corporativo de SADEY LABORATORIO PARA LA CONSTRUCCION.
colors:
  primary: "#0B1730"
  primary-soft: "#14274B"
  primary-deep: "#081123"
  secondary: "#B5873F"
  secondary-strong: "#D4AD67"
  bg: "#F3EFE7"
  surface: "#FAF7F1"
  surface-alt: "#EFE9DE"
  surface-strong: "#FFFFFF"
  on-surface: "#182131"
  on-surface-variant: "#525D70"
  on-primary: "#FFFFFF"
typography:
  display:
    fontFamily: Manrope
    fontSize: 4.6rem
    fontWeight: 800
    lineHeight: "1.05"
    letterSpacing: "-0.01em"
  h1:
    fontFamily: Manrope
    fontSize: 3.8rem
    fontWeight: 800
    lineHeight: "1.08"
    letterSpacing: "-0.04em"
  h2:
    fontFamily: Manrope
    fontSize: 3.25rem
    fontWeight: 800
    lineHeight: "1.08"
    letterSpacing: "-0.04em"
  body-md:
    fontFamily: Work Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0"
  nav-label:
    fontFamily: Work Sans
    fontSize: 0.82rem
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.01em"
  label-caps:
    fontFamily: Work Sans
    fontSize: 0.76rem
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.16em"
rounded:
  sm: 0.35rem
  md: 0.55rem
  lg: 0.9rem
  xl: 1.2rem
  pill: 999px
spacing:
  2xs: 0.4rem
  xs: 0.7rem
  sm: 1rem
  md: 1.5rem
  lg: 2.25rem
  xl: 3.5rem
  2xl: 5rem
  3xl: 7rem
components:
  header:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    padding: 1rem
  nav-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-soft}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.pill}"
    padding: 0.68rem 1.05rem
  nav-chip-active:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.secondary-strong}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.pill}"
    padding: 0.68rem 1.05rem
  hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: 4rem
  footer:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    padding: 3.5rem
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.md}"
    padding: 0.9rem 1.45rem
  button-secondary:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.md}"
    padding: 0.9rem 1.45rem
  card-light:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 2.25rem
  card-dark:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 2.25rem
  service-carousel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 0.55rem
---

## Overview

SADEY se siente como un laboratorio tecnico de construccion: serio, claro y operativo. La interfaz debe transmitir confianza de campo y precision de laboratorio sin volverse fria ni generica.

La identidad actual combina azul profundo, dorado tecnico y superficies calidas. El sitio evita una estetica automotriz negra ajena a la marca: puede tomar ideas de navegacion premium, pero siempre traducidas al lenguaje visual de SADEY.

La portada actual es intencionalmente compacta: `header`, `hero` y `footer`. No debe reconstruirse como landing larga salvo que exista una nueva decision explicita.

El proyecto es **mobile-first por peticion del cliente**. Cada cambio visual se valida primero en telefono: header, chips, fotos, video, galerias, comparativos y footer deben cargar ligero, no desbordar y conservar lectura clara antes de afinar la version desktop.

## Colors

La paleta se basa en contraste fuerte y calidez controlada.

- **Primary (#0B1730):** azul profundo para fondos principales, overlays y presencia institucional.
- **Primary Deep (#081123):** azul casi nocturno para header, footer y capas de maxima jerarquia.
- **Primary Soft (#14274B):** azul de apoyo para estados, chips y fondos oscuros secundarios.
- **Secondary (#B5873F):** dorado SADEY para acentos, enlaces importantes y contornos.
- **Secondary Strong (#D4AD67):** dorado luminoso para estados activos, highlights y foco visual.
- **Background (#F3EFE7):** base calida tipo papel mineral, nunca blanco puro dominante.
- **Surface (#FAF7F1) y Surface Alt (#EFE9DE):** paneles claros, chips y descansos visuales.
- **On Surface (#182131):** texto principal sobre fondos claros.
- **On Surface Variant (#525D70):** texto secundario, metadata y descripciones.
- **On Primary (#FFFFFF):** texto sobre fondos azul profundo.

Usa transparencias del azul profundo y del dorado para overlays, hover states y brillos suaves, pero no agregues una nueva familia cromatica dominante.

## Typography

La combinacion actual es **Manrope** para marca, titulos y controles, con **Work Sans** para lectura y contenido operativo.

- Los titulos deben sentirse firmes y tecnicos: peso alto, line-height corto y tracking apretado.
- El cuerpo debe priorizar legibilidad, especialmente en servicios, listas de pruebas y contacto.
- Las etiquetas en mayusculas usan tracking amplio y tamano pequeno; funcionan como rotulos tecnicos, no como decoracion excesiva.
- Evita escalar texto con ancho de viewport fuera de los clamps ya definidos en CSS.

## Layout

El sitio usa una composicion centrada con ancho maximo cercano a `1180px`, espaciado generoso en paginas internas y una home reducida.

- Mantener `header + hero + footer` en `/`.
- Usar paneles y secciones de ancho contenido, no bloques flotantes innecesarios.
- En movil, compactar antes que ocultar contenido critico: marca, navegacion y contacto deben seguir encontrables.
- Las fotos y videos nuevos deben llegar optimizados para movil antes de entrar al repo; las fuentes pesadas viven fuera del commit.
- Las rutas internas pueden usar secciones completas, cards y galerias, pero la portada debe seguir directa.

## Elevation & Depth

La profundidad se expresa con sombras suaves azuladas, overlays oscuros y bordes translucidos.

- El hero usa imagen real, overlay azul profundo y un brillo dorado sutil.
- Las cards claras usan sombra moderada y superficie blanca calida.
- El header usa blur y sombra discreta para mantenerse sticky sin sentirse pesado.
- Evita sombras duras, glassmorphism excesivo o brillos que compitan con el contenido tecnico.

## Shapes

Los radios son sobrios: medianos para cards y botones, amplios solo para chips de navegacion.

- `0.35rem` para foco y detalles pequenos.
- `0.55rem` para botones y cards base.
- `1.2rem` para el panel hero.
- `999px` solo para chips, badges y pills de navegacion.

## Components

**Header**

Sticky, azul profundo translucido y con blur. Debe conservar el logotipo MTHA a la izquierda, el wordmark **SADEY** y el tagline **Laboratorio para la Construccion** junto al logo. La navegacion principal permanece visible como una fila de cuatro chips: Inicio, Servicios, Proyectos y Contacto.

**Navigation Chips**

Los chips normales son claros, redondeados y sobrios. La ruta activa se distingue con contorno dorado, fondo dorado/azul sutil y texto dorado. El estado activo debe funcionar tambien en subrutas, por ejemplo dentro de `/proyectos/[slug]`.

**Hero**

Panel principal con imagen real, bordes amplios y overlay azul profundo. El titulo visible es **"A que nos dedicamos?"** con el remate en dorado. El badge de marca puede aparecer en desktop, pero se oculta en movil para evitar ruido antes del titulo.

**Footer**

Compacto y oscuro. Debe incluir nota breve, navegacion secundaria en chips y contacto resumido con etiquetas cortas. En movil se apila sin crecer demasiado en altura.

**Buttons**

El primario usa dorado y texto blanco; el secundario usa superficie clara y texto azul profundo. Mantener uppercase, peso alto y espaciado amplio. No agregar CTAs al hero de la home actual salvo nueva decision.

**Cards**

Las cards claras son calidas y limpias. Las cards oscuras usan azul profundo, no negro puro. Usarlas para contenido repetible o informacion realmente enmarcada, no para envolver secciones completas sin necesidad.

**Service Media**

Las fotos de servicios usan WebP optimizado, captions breves y burbujas colapsables por prueba para reducir el largo movil. Las galerias de servicios y proyectos deben entrar al repo como WebP maximo 1280 px, calidad aproximada 74 y sin metadata; hero/covers pueden llegar a 1600 px cuando necesitan cubrir paneles grandes. El video de Diseno Protocolo AMAAC debe renderizarse con controles, `muted`, `playsinline`, `preload="metadata"` y poster ligero dentro de su burbuja de prueba; no debe incluir audio.

**Service Test Bubbles**

En `/servicios`, cada prueba con registro visual se muestra como una burbuja `<details>` abrible y cerrable. La primera burbuja de cada servicio inicia abierta; las demas quedan cerradas para que el usuario explore sin recorrer listas duplicadas. La burbuja usa borde suave, fondo calido, contador de fotos y chevron dorado. El foco de teclado en `<summary>` debe ser visible.

- No renderizar una lista principal de pruebas y luego repetir las mismas pruebas con fotos.
- Las pruebas sin registro visual se conservan en un resumen secundario colapsable: "Otras pruebas sin registro visual".
- SIAC, al no tener galerias, conserva un resumen compacto de "Servicios incluidos".
- Terracerias muestra una burbuja unica por prueba visual y chips "Aplica a" para las capas relacionadas; no debe volver al acordeon largo por capas como bloque principal.

**Service Carousel**

Dentro de cada burbuja, las pruebas con varias fotos usan un carrusel mobile-first. El carrusel debe ser ligero y funcionar sin librerias.

- Track horizontal con `scroll-snap-type: x mandatory`; cada slide ocupa ~88% del ancho en movil y ~50%/33% en `>=720px`/`>=980px`.
- `aspect-ratio: 4 / 3` fijo en cada slide para evitar layout shift.
- Botones prev/next solo visibles `>=720px`; en movil el usuario hace swipe.
- Indicadores de posicion con dots compactos calculados con `IntersectionObserver`.
- Tap o click sobre cualquier slide abre un visor `<dialog>` con flechas, contador y soporte de teclado (`ArrowLeft`, `ArrowRight`, `Esc`).
- Imagenes en `loading="lazy"` y `decoding="async"`; cap de ~6 fotos por prueba para mantener la pagina liviana.
- Para Terracerias el carrusel se renderiza una sola vez por prueba, con chips de capas, para evitar duplicar las mismas fotos.

**Project Before/After**

El comparativo CHILIXX muestra antes y despues apilados en movil y lado a lado en desktop. Mantener labels simples, fotos reales y relacion visual directa; no convertirlo en una pieza editorial pesada.

## Do's and Don'ts

**Do**

- Mantener los colores actuales de SADEY como fuente de verdad.
- Conservar logo, wordmark y tagline en el header.
- Mantener los cuatro botones de navegacion alineados en un solo renglon cuando el espacio lo permita.
- Resaltar la seccion actual con contorno dorado.
- Priorizar claridad movil, menor altura vertical y contacto facil de encontrar.
- Validar primero en movil porque el proyecto es mobile-first por peticion del cliente.
- Usar fotos reales del laboratorio, obra o proyectos cuando la imagen ayude a entender el servicio.
- Mantener fotos web optimizadas con `npm run audit:media`, `npm run optimize:media` y `npm run prepare:service-media` antes de cerrar cambios de media.
- Mantener `DESIGN.md` sincronizado cuando cambien UI, media, responsive o criterios visuales.

**Don't**

- No convertir el header en una barra negra estilo otra marca.
- No ocultar el logo ni eliminar la palabra SADEY sin una instruccion explicita.
- No regresar la home a una landing larga por defecto.
- No duplicar CTAs en el header movil y antes del footer.
- No usar paletas nuevas dominantes, especialmente morados, azules electricos o negros puros.
- No crear menus desplegables si la navegacion visible resuelve mejor la experiencia actual.
- No commitear fuentes pesadas de cliente como `FOTOS PRUEBAS/`; solo los assets web optimizados.
