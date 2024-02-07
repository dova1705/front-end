// Мы можем скопировать поля-значения из одного объекта в другой
// SPREAD объекты
const user = {name: "Dova"};
const userWithEmail = {...user, email: "dova@ya.ru"};
console.log(userWithEmail); // { name: 'Dova', email: 'dova@ya.ru' }
