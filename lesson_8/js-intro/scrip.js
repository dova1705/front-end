// вывод на экран
console.log("chek 1 2");

//создание переменных 
//const, let, var
let dog = "Sharik";
dog = "Tuzik";
dog = 17; // изменили тип дпнных
console.log(dog);

// создание константы
const cat = "Barsik";
// cat = "Tuzik";
// console.log(cat);

// примитивные типы данных
// 1. string - является примитивом
let str1 = "можно в двойных";
let str2 = 'можно в одинарные';
let str3 = "13" //это string (строка)
let str4 = str1 + " " + str2;
console.log(str4);
console.log(str1.toUpperCase()); //перевод в верхний регистр

// 2. number
let num1 = 9;
let num2 = 9.6;

// 3. bigInt
let num3 = 12345n; // больший диапозон, чем у number

// 4. boolean
let isDrunk = true;
// условная конструкция
if(isDrunk) {
    console.log("Ты пьян");
}
// тернарный оператор
const result = isDrunk ? "Ты пьян" : "Ты не пьян";

// 5. undefined
let str5;
console.log(str5); // undefined
str5 = 17;
console.log(str5);

// 6. null
// null - отсутствие значение
// document.getElementById("несуществующий id") --> null
// Можно присвоить null в ручную
let empty = null;
console.log(empty);

// 7. symbol
// новый тип, раньше его не было и сейчас остается малопопулярным
// используется для создания уникальных значений внутри программ
let s1 = Symbol("something");
console.log(s1);

//ПРЕОБРАЗОВАНИЕ ТИПОВ
// 1. Преобразование в строку
    // неявное преобразование
    let str7 = "" + 9; // "9"
    console.log(str7);

    // явное преобразование
    const num4 = 10;
    let str8 = String(num4); // "10"
    console.log(str8);

//  Пример-1
const res = 9 + 12 + "5"; // "215"
console.log(res);
const res2 = "5" + 9 + 12; // "5912"
console.log(res2);

// пример-2. Преобразование в число неявное
const num5 = +"6"; // 6
const sum = +"9" + +"10"; // 19
console.log(sum);

// пример-3. Явное преобразование
const num6 = Number("117"); // 117
const num7 = Number("129&8*#"); // NaN - not a number появляется в при неудачном преобразовании или неудачной математической операции
console.log(num7);
console.log(NaN + 10); // NaN

// Можно посмотреть тип значения переменной
// typeof - он вернет строку "string" или "number"
console.log(typeof num6);
console.log(typeof num7);
console.log(typeof isDrunk);

// Преобразование в булевое значение
// Число в булевое значение
const res4 = Boolean(17); // true
const res5 = Boolean(0); // false
//преобразование строки в булевое значение 
const res6 = Boolean("hello"); // true
const res7 = Boolean(" "); // true
const res8 = Boolean(""); // false
const res9 = Boolean(null); // false
const res10 = Boolean(undefined); // false

// Равентсво строгое и нестрогое 

// === - строгое равенство
// == - нестрогое равенство
console.log(9 === "9"); // false
console.log(9 == "9"); // true 9-ка преобразуется в стринг "9" и тогда он проверяет равенство "9" == "9"

// string number boolean
console.log(true == " "); // true
console.log(true == ""); // false
console.log(true == "1"); //true ????