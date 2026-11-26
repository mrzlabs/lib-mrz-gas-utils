# API Publica

## logger
- logInf(msg)
- logErr(msg, err)
- logWrn(msg)

## retry
- retryWrap(fn, maxAtt, delMs) -> resultado fn o throw
  - maxAtt default 3
  - delMs default 1000 con backoff exponencial

## sheetIO
- getLastDataRow(sh, col) -> number
- readRange(sh, a1) -> array
- writeRow(sh, row, data) -> void

## httpClient
- httpReq(url, opts) -> { code, body, err }
- httpJson(url, opts) -> { code, body, err, json }