/**
 * Strips spaces and line breaks from string
 *
 * @param {String} s 
 * @return {String} stripLineBreaks
 */
function cleanString(s) {
  
    var stripSpaces = s.replace(/\s+/g, '');
    var stripLineBreaks = stripSpaces.replace(/\r?\n|\r/g, '');
  
  return stripLineBreaks;
}