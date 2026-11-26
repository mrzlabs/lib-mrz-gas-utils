# lib-mrz-gas-utils

[![CI](https://github.com/mrzlabs/lib-mrz-gas-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/mrzlabs/lib-mrz-gas-utils/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Runtime: Apps Script V8](https://img.shields.io/badge/runtime-Apps%20Script%20V8-4285F4)

**ES** · Pequeña librería de utilidades para Google Apps Script: peticiones HTTP, reintentos con espera exponencial, logging y ayudas para Google Sheets. Sin dependencias.  
**EN** · A small utility library for Google Apps Script: HTTP requests, retries with exponential backoff, logging and Google Sheets helpers. No dependencies.

## Funciones / Functions

| Módulo / Module | Funciones / Functions |
|---|---|
| `logger` | `logInf(msg)`, `logWrn(msg)`, `logErr(msg, err)` |
| `retry` | `retryWrap(fn, maxAtt, delMs)` |
| `httpClient` | `httpReq(url, opts)`, `httpJson(url, opts)` |
| `sheetIO` | `getLastDataRow(sh, col)`, `readRange(sh, a1)`, `writeRow(sh, row, data)` |

Referencia completa en [`docs/api.md`](docs/api.md). / Full reference in [`docs/api.md`](docs/api.md).

## Ejemplo / Example

```javascript
function syncPrices() {
  const res = retryWrap(() => httpJson('https://api.example.com/prices'), 3, 1000);
  if (res.code !== 200 || !res.json) {
    logErr('No se pudo leer la API / API request failed', new Error('HTTP ' + res.code));
    return;
  }

  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Precios');
  const next = getLastDataRow(sh, 1) + 1;
  writeRow(sh, next, [new Date(), res.json.total]);
  logInf('Fila ' + next + ' escrita / row written');
}
```

## Instalación / Installation

Apps Script no usa `import`: los archivos se cargan en orden alfabético dentro del mismo proyecto.  
Apps Script has no `import`: files are loaded alphabetically inside the same project.

1. Instala [clasp](https://github.com/google/clasp) y entra a tu cuenta: `npm install -g @google/clasp && clasp login`.
2. Copia el contenido de `src/` a tu proyecto de Apps Script (o usa este repositorio como base).
3. Sube con `clasp push`.

El `scriptId` de tu proyecto va en `.clasp.json`, que **no** se versiona (está en `.gitignore`).  
Your project's `scriptId` goes in `.clasp.json`, which is **not** versioned (it is in `.gitignore`).

## Desarrollo / Development

```bash
npm ci
npm run lint
npm run format
```

## Estado / Status

Versión `0.1.0`: la API puede cambiar antes de `1.0.0`. / Version `0.1.0`: the API may change before `1.0.0`.
Consulta el [CHANGELOG](CHANGELOG.md). Plantilla base para proyectos nuevos: [tpl-mrz-gas-starter](https://github.com/mrzlabs/tpl-mrz-gas-starter).

## Contribuir y seguridad / Contributing and security

[CONTRIBUTING.md](CONTRIBUTING.md) · [SECURITY.md](SECURITY.md) · [MIT License](LICENSE)
