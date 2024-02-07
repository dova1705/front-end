// Стрелочная функция
// Пример обычной функции
function sum(a,b){
    return a+b;
}
console.log(sum(1,2)); // 3

// Стрелочная функция
// блочная
const sum2 = (a,b) => {
    return a+b;
}
console.log(sum2(1,2)); // 3

// Запись в одну строку
// строчная
const sum3 = (a,b) => a + b;
const res = sum3(1,2);
console.log(res); // 3

// Передача функции в качестве параметра 
function calculate (a,b, operation){
    return operation(a,b);
}

function subtract (a,b){
    return a - b;
}

// Вызов функции
calculate(10,5,subtract); // 5
calculate(9,3, (a,b) => a / b); // 3

// Создать метод universalGreeting, этот метод будет приветствовать на разных языках
// Пусть метод принимает в качестве параметров
// -имя
// - функция приветсвия 

// Напишите две функции приветсвия 
// - одна пусть приветствует на аглийском englishGreeting: "Hello,  name"
// второя пусть будет на японском japaneseGreeting: "Konnichiwa,  name"

// Вызовите метод universalGreeting

function universalGreeting(name, greetingFunction){
    return greetingFunction(name);
}
function english (name){
    return `Hello,  ${name}`; // шаблонная строка - бэктикс
}
const res2 = universalGreeting("Alex", english);
console.log(res2);


const res3 = universalGreeting("Honda",(name => `Konnichiwa,  ${name}`));
console.log(res3);