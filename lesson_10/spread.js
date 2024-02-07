// Spread syntax - синтаксис "распыление"

// Повторим примитивные и ссылочные типы

const fruits = ['apple', 'orange', 'mango'];
const fruits2 = fruits;
fruits2[0] = 'banana';
console.log(fruits); // [ 'banana', 'orange', 'mango' ]
console.log(fruits2); // [ 'banana', 'orange', 'mango' ]

// То есть один объект и две переменные которые содержат ссылку на этот объект
// Если сам объект изменить/мутировать - то оюе переменные будут содерэать ссылку
// на изменённый объект

// При работе с примитивными типами - мы храним в переменной значение
let str = "hello";
let str2 = str;
str = "world";
console.log(str); // world
console.log(str2); // hello

// Как скопировать элементы массива в новый массив
const cars = ['audi', 'bmw', 'mercedes'];
// spread operator ...
const carsCopy = [...cars];
//если мы мутируем второй массив то первый не измениться
carsCopy[0] = 'opel';
console.log(cars); // [ 'audi', 'bmw', 'mercedes' ] 
console.log(carsCopy); // [ 'opel', 'bmw', 'mercedes' ]

// Как объединить два массива в третий с помощью spread
const cities1 = ["Berlin", "Paris"];
const cities2 = ["Moscow", "Vladivostok"];

const joinedCities = [...cities2, ...cities1];
console.log(joinedCities); // [ 'Moscow', 'Vladivostok', 'Berlin', 'Paris' ]

// Мы можем создать массив  и добавить в него элемент
const vegetables = ["cucmber", "tomato"];
const newVegetables = [...vegetables, "carrot"]; // добавляум морковь в самый конец
console.log(newVegetables); // [ 'cucmber', 'tomato', 'carrot' ]