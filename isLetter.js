/**
 * Calculates if paramater is a letter
 *
 * @param {String} text
 * @return {Boolean}
 */
function isLetter(text) { 
  var letters = /^[A-Za-z]+$/;
  if (text.match(letters))  { 
    return true;
  } else {
    return false;
  }
}