/**
* @desc Get number of first empty row of spreadsheet
* @param ss (object)
* @return count (number)
* @source: http://stackoverflow.com/questions/6882104/faster-way-to-find-the-first-empty-row-google-apps-script
*/
function getFirstEmptyRow(ss) {
  "use strict";
  var column, values, count;
  column = ss.getRange('A:A');
  values = column.getValues();
  count = 0;
  while ( values[count][0] !== "" ) {
    count = count + 1;
  }
  count = count + 1; /*because index starts at 0*/
  return count;
}