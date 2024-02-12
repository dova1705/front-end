// деструктуризация
// Массив объектов
const brothers = [
    {race: "Hobbit", heigth: 110, age: 40, name: "Frodo Baggins"},
    {race: "Human", heigth: 185, age: 45, name: "Aragorn"},
    {race: "Elf", heigth: 189, age: 117, name: "Legolas"},
    {race: "Dworf", heigth: 140, age: 150, name: "Gimli"},
    {race: "Human", heigth: 195, age: 200, name: "Gandalf"}
];
// const frodo = brothers[0];
// console.log(frodo);
const [frodo, aragorn, legolas, gimli, gandalf] = brothers;
console.log(aragorn); // { race: 'Human', heigth: 185, age: 45, name: 'Aragorn' }
const ageOfFrodo = frodo.age; // досталм по ключу
console.log(ageOfFrodo); // 40

const user = {id:1, email:"user@mail.com", login:"funny_user"};
// const email = user.email;
const {email, id, login} = user;
console.log(email); // user@mail.com