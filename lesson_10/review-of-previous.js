// 7 Типов примитивных
// String, number, bigInt, boolean, undefined, null, symbol

// Переобразование в строку
const str = String(1992);
console.log(typeof str); // string
// Переобразование в число
const num = Number("1992"); // число 1992
const num2 = Number("17/2dn"); // NaN
// NaN - not a number - number
console.log(num2); // NaN
console.log(typeof NaN); // number

// Переобразование в boolean
const b1 = Boolean(1); // true
const b2 = Boolean(0); // false
const b3 = Boolean(""); // false
const b4 = Boolean(-1); // true
const b5 = Boolean(null); // false
const b6 = Boolean(undefined); // false
const b7 = Boolean(NaN); // false

('b' + 'a' + + 'a' + 'a').toLowerCase(); // banana