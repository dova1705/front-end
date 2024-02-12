// Повторим spread массива
const fruits = ['apple', 'orange', 'mango'];
const newFruits = [...fruits, "banana"];
console.log(newFruits); // [ 'apple', 'orange', 'mango', 'banana' ]

// Повторим spread объекта
const fruit = {
    title: "apple",
    color: "red",
    weight: 200
}
console.log(fruit); // { title: 'apple', color: 'red', weight: 200 }
const specialOrange = {...fruit, country: "Maroco"}; // добавили поле country
console.log(specialOrange); // { title: 'apple', color: 'red', weight: 200, country: 'Maroco' }

// скопируем apple и заменим цвет
const newApple = {...fruit, color: "green"};
console.log(newApple); // { title: 'apple', color: 'green', weight: 200 }