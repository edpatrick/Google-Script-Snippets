/**
 * Calculates if paramater is a letter or number
 *
 * @param {String} text
 * @return {Boolean}
 */
function isLetterOrNumber(text) {
    var characters = /^[A-Za-z0-9]+$/;
  if (text.match(characters))  { 
    return true;
  } else {
    return false;
  }
}