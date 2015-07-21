/**
* @desc Returns today's date in (d)d/(m)m/yyy format
* @return today (string)
*/
function todayDate () {
  "use strict";
  var today, day, month, year;
  today = new Date();
  day = today.getDate();
  month = today.getMonth()+1; /*January is 0*/
  year = today.getFullYear(); 
  today = day+'/'+month+'/'+year; 
  return today; 
}