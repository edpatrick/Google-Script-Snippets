/**
* Get last row from column
*
* @param {object} sheet
* @param {number} columnNum
* @param {number} lastRow
*
* @return {Number}
*/
function getLastRowInCol(sheet, columnNum, lastRow) {
  var data = sheet.getRange(1, columnNum, lastRow, 1).getValues();
  var lastRowInCol = 0;
  for (i = lastRow -1; i > 0; i--) {
    if (data[i] != "") {
      
      return i+1;
    }
  }
}