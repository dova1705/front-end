// МАССИВ - ДИНАМИЧЕСКИЙ МАССИВ
// ДЛИНА НЕ ФИКСИРОВАНА

// Два способа создание массива
const arr1 = []; // 1 способ
const arr2 = new Array();

// Как добавить значение по индексу
const fruits = [];
fruits[0] = "apple";
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);

// как получить значенте по индексу
console.log(fruits[1]); // banana

// как получить значение по индексу элемента которого нет в списке
console.log(fruits[2]); // undefined

// как получить длину массива
console.log(fruits.length); //2

// как создать массив сразу со значениями
const cars = ["BMW", "Mercedes", "Audi", "Tesla"];
console.log(cars); // ["BMW", "Mercedes", "Audi", "Tesla"]

//пройтись циклом for по массиву
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// методы работы с массивом
const students = [];
students.push("John"); // добавили с права
console.log(students);
students.push("Tom"); // добавили с права
console.log(students);
students.unshift("Alex"); // добавили с лева
console.log(students);

// pop() - удаляет элемент с конца массива (с права)
students.pop();
console.log(students); //[ 'Alex', 'John' ]
const vik = students.pop(); 
console.log(vik); // John
// shift() - удаляет элемент слева массива (начало)
students.shift();
console.log(students); // [ ]