/**
 * Gets first empty column from spreadsheet object
 *
 * @param {Object} sheet
 * @return {Number} total
 */
function getFirstEmptyCol(sheet) {
  
  /*source: http://stackoverflow.com/questions/6882104/faster-way-to-find-the-first-empty-row-google-apps-script*/
  var range = sheet.getDataRange();
  var values = range.getValues();
  var valueLength = values.length;
  var count = 0;
  var total = 0;
  for (var row=0; row<valueLength; row+=1) {    
    for (var col=0; col<values[row].length; col+=1) {
      count++;
      if (count > total) {
        total = count;
      }
    }
    count = 0;
  }
  return (total+1);
}