/**
 * Proyecto: lib-mrz-gas-utils
 * Modulo: logger
 */

function logInf(msg) {
  Logger.log('[INF] ' + new Date().toISOString() + ' ' + msg);
}

function logErr(msg, err) {
  Logger.log('[ERR] ' + new Date().toISOString() + ' ' + msg + ' :: ' + (err && err.message));
}

function logWrn(msg) {
  Logger.log('[WRN] ' + new Date().toISOString() + ' ' + msg);
}