/**
 * Proyecto: lib-mrz-gas-utils
 * Modulo: httpClient
 */

function httpReq(url, opts) {
  const o = opts || {};
  o.muteHttpExceptions = true;
  try {
    const res = UrlFetchApp.fetch(url, o);
    return { code: res.getResponseCode(), body: res.getContentText() };
  } catch (err) {
    return { code: 0, body: '', err: err.message };
  }
}

function httpJson(url, opts) {
  const r = httpReq(url, opts);
  try {
    r.json = JSON.parse(r.body);
  } catch (e) {
    r.json = null;
  }
  return r;
}