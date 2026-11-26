/**
 * Proyecto: lib-mrz-gas-utils
 * Modulo: retry
 */

function retryWrap(fn, maxAtt, delMs) {
  const att = maxAtt || 3;
  const del = delMs || 1000;
  let lastErr;
  for (let i = 0; i < att; i++) {
    try {
      return fn();
    } catch (err) {
      lastErr = err;
      if (i < att - 1) Utilities.sleep(del * Math.pow(2, i));
    }
  }
  throw lastErr;
}