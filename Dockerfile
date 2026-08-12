# ---------------------------------------------------------------------------
# Piattaforma di lancio Paco — immagine di produzione (VPS).
#
# Multi-stage: build con tutte le dipendenze, runtime minimale che serve la
# build con l'adapter Node standalone (statico + endpoint /api/waitlist).
#
#   docker build -t paco-launch \
#     --build-arg SITE=https://paco.alpacode.it \
#     --build-arg PUBLIC_WHATSAPP_NUMBER=39340xxxxxxx .
#
# Attenzione: SITE e PUBLIC_WHATSAPP_NUMBER sono variabili di BUILD
# (finiscono dentro l'HTML statico: canonical, sitemap, link wa.me).
# Cambiarle richiede una nuova build. I segreti (RESEND_API_KEY, ecc.)
# sono invece letti a runtime: si passano al `docker run` / compose.
# ---------------------------------------------------------------------------

FROM node:22-alpine AS base
WORKDIR /app

# ---- dipendenze (cache-friendly: si invalida solo se cambiano i lock) ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ---- build ---------------------------------------------------------------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG SITE=https://paco.alpacode.it
ARG PUBLIC_WHATSAPP_NUMBER=
ENV SITE=$SITE \
    PUBLIC_WHATSAPP_NUMBER=$PUBLIC_WHATSAPP_NUMBER

# VERCEL non è definita → astro.config sceglie l'adapter Node standalone
RUN npm run build

# ---- runtime -------------------------------------------------------------
FROM base AS runtime
ENV NODE_ENV=production

# solo le dipendenze di produzione (l'entry standalone ne risolve alcune
# da node_modules; niente devDependencies nell'immagine finale)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund && npm cache clean --force

COPY --from=build /app/dist ./dist

# utente non privilegiato
RUN addgroup -S paco && adduser -S paco -G paco
USER paco

ENV HOST=0.0.0.0 \
    PORT=4321
EXPOSE 4321

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:4321/ || exit 1

CMD ["node", "./dist/server/entry.mjs"]
