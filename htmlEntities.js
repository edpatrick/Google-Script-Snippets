/**
* @desc replaces html entities in each array element
* @param outputArray (array)
* @return outputArray (array)
* source: http://css-tricks.com/snippets/javascript/htmlentities-for-javascript/
*/
function htmlEntities(outputArray) {
  "use strict";
  var outputArrayElement, i, j;
  outputArrayElement = "";
  for (i = 0, j = outputArray.length; i < j; i = i + 1) {   
    if (typeof outputArray[i] === "string") {      
    outputArrayElement = outputArray[i];
    outputArrayElement.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    outputArray[i] = outputArrayElement;      
    }
    }       
    return outputArray;
}