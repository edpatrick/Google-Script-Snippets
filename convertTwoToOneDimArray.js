/**
* Converts a two dimensional array to a one dimensional array
*
* @param {Array} twoDimArray
*
* @return {Array} oneDimArray
*/
function convertTwoToOneDimArray(twoDimArray) {
  "use strict";
  var oneDimArray, outputArrayCount, i, k, j, m;
  oneDimArray = [];
  outputArrayCount = 0;
  for (i = 0, k = twoDimArray.length; i < k; i = i + 1) {
    
    for (j = 0, m = twoDimArray[i].length; j < m; j = j + 1)
    {
      
      oneDimArray[outputArrayCount] = twoDimArray[i][j];
      outputArrayCount = outputArrayCount + 1;
      
    }
  }
  
  return oneDimArray;
  
}