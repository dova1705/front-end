// Функции в JS
// FUNCTION DECLARATION
// Декларация функции (объявление)
function sum (a, b){
    return a + b;
}
// Вызов функции
let result = sum(17,5);
console.log(result); // 22

// Если нет return функция вернёт undefined
function print (){
    console.log("Hello");
}
let res2 = print();
console.log(res2); // undefined

// FUNCTION EXPRESSION
const divide = function (a, b){
    return a / b;
}
// Вызов функции
console.log(divide(10,2)); // 5

// Какая разница между FUNCTION DECLARATION и FUNCTION EXPRESSION
// FUNCTION DECLARATION - объявление функции
// FUNCTION EXPRESSION - вызов может находится до объявления

print2();
function print2(){
    console.log("print-2");
}