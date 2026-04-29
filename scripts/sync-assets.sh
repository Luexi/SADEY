#!/usr/bin/env bash
set -euo pipefail

# Copia los assets reales desde cliente/ hacia src/assets/ y public/assets/.
# Normaliza galerias a 01.jpeg, 02.jpeg, ... y luego ejecuta el
# optimizador para dejar las salidas web como WebP/JPEG ligeros.
# Idempotente: limpia los destinos administrados antes de copiar.

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CLIENTE="$ROOT/cliente"

SRC_BRAND="$ROOT/src/assets/branding"
SRC_HERO="$ROOT/src/assets/hero"
SRC_ADQ="$ROOT/src/assets/projects/adquisicion-mezcla"
SRC_AMAAC="$ROOT/src/assets/projects/reposicion-amaac"
SRC_CHIL="$ROOT/src/assets/projects/modernizacion-chilixx"

PUB_VIDEO="$ROOT/public/assets/video"
PUB_OG="$ROOT/public/assets/og"

mkdir -p "$SRC_BRAND" "$SRC_HERO" "$SRC_ADQ" "$SRC_AMAAC" "$SRC_CHIL" "$PUB_VIDEO" "$PUB_OG"

# Limpieza previa (solo los destinos que este script administra)
rm -f "$SRC_BRAND"/logo.* "$SRC_HERO"/hero-main.* 2>/dev/null || true
find "$SRC_ADQ" "$SRC_AMAAC" "$SRC_CHIL" -type f \( \
  -name "[0-9][0-9].jpeg" -o \
  -name "[0-9][0-9].jpg" -o \
  -name "[0-9][0-9].png" -o \
  -name "[0-9][0-9].webp" \
\) -delete 2>/dev/null || true
rm -f "$PUB_VIDEO"/*.mp4 "$PUB_VIDEO"/*.jpg "$PUB_OG"/og-default.* 2>/dev/null || true

# 1. Logo
cp "$CLIENTE/logo.png" "$SRC_BRAND/logo.png"

# 2. Hero
cp "$CLIENTE/foto para la seccion hero.jpeg" "$SRC_HERO/hero-main.jpeg"

# 3. Video
cp "$CLIENTE/video que ira en obra de adquisición de mezcla asfáltica.mp4" \
   "$PUB_VIDEO/adquisicion-mezcla.mp4"

# 4. OG default (copia del hero)
cp "$CLIENTE/foto para la seccion hero.jpeg" "$PUB_OG/og-default.jpg"

# Helper: copia los .jpeg de una carpeta hacia destino, renombrando 01.jpeg, 02.jpeg, ...
copy_gallery() {
  local source_dir="$1"
  local dest_dir="$2"
  local i=1
  # Orden estable: alfabetico (los nombres de WhatsApp tienen timestamp incluido)
  while IFS= read -r -d '' f; do
    printf -v padded "%02d" "$i"
    cp "$f" "$dest_dir/$padded.jpeg"
    i=$((i + 1))
  done < <(find "$source_dir" -maxdepth 1 -type f -name "*.jpeg" -print0 | sort -z)
  echo "  -> $((i - 1)) imagenes copiadas a $dest_dir"
}

echo "Copiando galeria adquisicion-mezcla..."
copy_gallery "$CLIENTE/PROYECTO ADQUISICION DE MEZCLA" "$SRC_ADQ"

echo "Copiando galeria protocolo AMAAC..."
copy_gallery "$CLIENTE/PROYECTO  protocolo AMAAC" "$SRC_AMAAC"

echo "Copiando galeria CHILIXX..."
copy_gallery "$CLIENTE/PROYECTO CHILIXX" "$SRC_CHIL"

# Poster del video: primera foto de la galeria adquisicion
cp "$SRC_ADQ/01.jpeg" "$PUB_VIDEO/adquisicion-mezcla-poster.jpg"

echo ""
echo "Optimizando imagenes web..."
(cd "$ROOT" && npm run optimize:media)

echo ""
echo "Sync completado."
ls -la "$SRC_BRAND" "$SRC_HERO" "$PUB_VIDEO" "$PUB_OG"
