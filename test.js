/*jslint-disable*/

const {isFloat, isInt, toInt, toFloat} = require("./index");

// console.log(isObject([]));
console.log(isInt(100.1));
console.log(isFloat("100.10"));
console.log(toInt("aa100.10", 1.01));
console.log(toFloat("a100.10", 1.01));

/*jslint-enable*/