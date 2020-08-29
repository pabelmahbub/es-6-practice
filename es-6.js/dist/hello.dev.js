"use strict";

console.log('HEllo');
var classic = 'One';
console.log(classic); //backup

function add(num1) {
  var num2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 78;
  return num1 + num2;
}

var total = add(13, 7); // If second value is not provided

var newTotal = add(13);
console.log(total);
console.log(newTotal);