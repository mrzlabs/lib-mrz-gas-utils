/**
 * Proyecto: lib-mrz-gas-utils
 * Modulo: sheetIO
 */

function getLastDataRow(sh, col) {
  const c = col || 1;
  const vals = sh.getRange(1, c, sh.getMaxRows(), 1).getValues();
  for (let i = vals.length - 1; i >= 0; i--) {
    if (vals[i][0] !== '' && vals[i][0] !== null) return i + 1;
  }
  return 0;
}

function readRange(sh, a1) {
  try {
    return sh.getRange(a1).getValues();
  } catch (err) {
    Logger.log('ERR readRange ' + a1 + ' :: ' + err.message);
    return [];
  }
}

function writeRow(sh, row, data) {
  try {
    sh.getRange(row, 1, 1, data.length).setValues([data]);
  } catch (err) {
    Logger.log('ERR writeRow ' + row + ' :: ' + err.message);
  }
}