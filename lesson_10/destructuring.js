// Деструктуризация
const person = {name: 'Alex', age: 20};
console.log(person.age); // 20
const age = person.age;
const name = person.name;
console.log(name, age);

// другой способ сделать тоже самое
const dog = {nick: 'Bobik', breed: 'Husky'};
const {nick, breed, height = 150, color = "blue white"} = dog;
console.log(nick);
console.log(breed);
console.log(height);
console.log(color);
console.log(dog); // { nick: 'Bobik', breed: 'Husky' }
console.log(dog.color); // blue white
