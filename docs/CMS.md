# Gestión de proyectos con el CMS

Este portfolio usa **Decap CMS** (antes Netlify CMS) para administrar los proyectos
desde un panel web, sin tocar código.

- Los datos viven en `src/data/projects.json`.
- El panel está en `public/admin/` (`index.html` + `config.yml`).
- El sitio lee el JSON en build (`src/data/projects.js`), así que **no hay fetch en runtime**.

Hay **dos modos de uso**:

1. **Local** (sin cuentas, funciona ya) — para editar desde tu compu.
2. **Producción** (editar desde el sitio en vivo / celular) — requiere configurar login de GitHub una sola vez.

---

## 1. Editar localmente (recomendado para empezar)

Necesitás **dos terminales** abiertas en la carpeta del proyecto:

```bash
# Terminal 1 — backend local de Decap (proxy git, sin login)
npx decap-server

# Terminal 2 — el sitio en modo desarrollo
npm run dev
```

Abrí **http://localhost:5173/admin/**

> El `local_backend: true` de `config.yml` hace que el panel escriba directo en
> tus archivos locales, sin pedir login.

### Agregar / editar un proyecto

1. En el panel, entrá a **Content → Projects**.
2. Tocá un proyecto para editarlo, o **"Add Projects"** para uno nuevo.
3. Campos:
   - **Title** — nombre del proyecto.
   - **Description** — resumen corto.
   - **Screenshot** — subí la imagen (se guarda en `public/assets/projects/`).
   - **Demo / store URL** — link al proyecto.
   - **Featured** — si está activo, el proyecto aparece **primero**.
   - **Technologies** — lista de íconos. Por cada uno:
     - **Icon name**: nombre del set `simple-icons`, p. ej. `simple-icons:react`.
       Buscá nombres en https://icones.js.org (filtrá por "Simple Icons").
     - **Icon color**: color de marca en hex, p. ej. `#61DAFB`.
4. **Reordenar**: arrastrá los proyectos en la lista.
5. **Borrar**: menú "⋮" del proyecto → eliminar.
6. Tocá **Save**.

### Publicar lo editado

El modo local solo cambia tus archivos. Para que aparezca online:

```bash
git add -A
git commit -m "Add new project"
git push
```

El push dispara el deploy automático (ver sección 3).

> ⚠️ **Optimizá las imágenes nuevas.** Decap sube el archivo original sin comprimir.
> Después de agregar imágenes pesadas, corré:
> ```bash
> npm run optimize:images
> ```
> (configurá las nuevas imágenes en `scripts/optimize-images.mjs` si querés convertirlas a WebP).

---

## 2. Editar desde el sitio en vivo / celular (login de GitHub)

Para usar el panel en `https://lucasestebanlps.github.io/admin/` necesitás un
**proveedor OAuth** que valide tu login de GitHub (GitHub Pages no puede hacerlo solo).

Tenés dos caminos. **El A es el más fácil.**

### Opción A — Servicio hospedado (DecapBridge u similar) ✅ recomendado

Servicios como **DecapBridge** (https://decapbridge.com) hacen de proveedor OAuth
gratis, sin que tengas que hospedar nada.

1. Creá una cuenta y **conectá tu repositorio** `lucasestebanlps/lucasestebanlps.github.io`.
2. El servicio te da un snippet de `backend` para pegar en `public/admin/config.yml`.
   Va a verse parecido a:
   ```yaml
   backend:
     name: git-gateway        # o el que indique el servicio
     repo: lucasestebanlps/lucasestebanlps.github.io
     branch: main
     base_url: https://<url-que-te-dan>
   ```
3. Commit + push. Listo: entrás a `/admin/`, te logueás con GitHub y editás.

### Opción B — Tu propio proxy OAuth en Cloudflare Workers (gratis, DIY)

Más control, pero más pasos.

#### B.1 — Crear la OAuth App en GitHub

1. GitHub → **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**.
2. Completá:
   - **Application name**: `Portfolio CMS` (lo que quieras).
   - **Homepage URL**: `https://lucasestebanlps.github.io`
   - **Authorization callback URL**: `https://<tu-worker>.workers.dev/callback`
     (la URL del worker la tendrás en el paso siguiente; podés volver y editarla).
3. Guardá. Anotá el **Client ID** y generá un **Client Secret**.

#### B.2 — Desplegar el proxy en Cloudflare Workers

1. Creá una cuenta gratis en https://workers.cloudflare.com
2. Usá un proxy OAuth para Decap compatible con Workers. Hay implementaciones
   comunitarias mantenidas (buscá "decap cms oauth cloudflare worker"); verificá
   que esté actualizada antes de usarla.
3. Configurá las variables del worker:
   - `GITHUB_CLIENT_ID` = el Client ID del paso B.1
   - `GITHUB_CLIENT_SECRET` = el Client Secret del paso B.1
4. Desplegá. Vas a obtener una URL tipo `https://portfolio-cms-oauth.<tu-cuenta>.workers.dev`.
5. Volvé a la OAuth App (B.1) y poné el **callback** como
   `https://portfolio-cms-oauth.<tu-cuenta>.workers.dev/callback`.

#### B.3 — Apuntar el CMS al proxy

En `public/admin/config.yml`, agregá `base_url` (y `auth_endpoint` si el proxy lo
requiere) al bloque `backend`:

```yaml
backend:
  name: github
  repo: lucasestebanlps/lucasestebanlps.github.io
  branch: main
  base_url: https://portfolio-cms-oauth.<tu-cuenta>.workers.dev
  # auth_endpoint: auth   # descomentá solo si el proxy lo pide
```

Commit + push. Entrás a `/admin/`, "Login with GitHub" y editás desde cualquier lado.

> El `local_backend: true` puede quedar: solo se usa cuando corrés `npx decap-server`.
> En producción se ignora.

---

## 3. Deploy automático (GitHub Actions)

`.github/workflows/deploy.yml` buildea y publica en la rama `gh-pages` en **cada push a `main`**.
Es decir: guardás desde el CMS (que commitea a `main`) → se publica solo.

Configuración necesaria una sola vez:

1. Repo → pestaña **Actions** → si está deshabilitado, habilitá los workflows.
2. Repo → **Settings → Pages** → Source: rama **`gh-pages`**, carpeta `/ (root)`.
3. Ya no necesitás `npm run deploy` manual (queda como fallback).

---

## 4. Comandos útiles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Sitio en desarrollo (http://localhost:5173) |
| `npx decap-server` | Backend local del CMS (para editar sin login) |
| `npm run build` | Build de producción a `dist/` |
| `npm run lint` | Linter |
| `npm run optimize:images` | Convierte/comprime imágenes (editá `scripts/optimize-images.mjs`) |
| `npm run deploy` | Deploy manual a `gh-pages` (fallback) |

---

## 5. Problemas comunes

- **El panel local no guarda / "Failed to load"**: ¿está corriendo `npx decap-server`
  en otra terminal? El modo local lo necesita.
- **`/admin/` en producción no deja loguear**: falta configurar OAuth (sección 2).
- **Subí una imagen y pesa mucho**: corré `npm run optimize:images`.
- **El deploy no corre**: revisá la pestaña **Actions** y que Pages apunte a `gh-pages`.
- **Cambié un proyecto pero no se ve online**: ¿hiciste `git push`? El modo local
  solo toca archivos en tu compu hasta que pusheás.
