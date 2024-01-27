console.log("Welcome to DOM");

// как создать переменную
// String name = "Anna"; это в java

// let объявление переменной
let name = "Anna"; // можем менять значение
// const объявление константы
const name2 = "Nicol"; //не можем изменять значение

let age;
age = 31;
console.log(age);

// Мы можем сохранять в переменную элементы из html-документа
// и дальше работать с ним
// метод get.ElementById() - получить элемент по id
const boxElement = document.getElementById("box-1");
console.log(boxElement);

// Все что касается стиля находится под атриьутом style
// свойства css внутри js пишутся в формате Lower camel case - background-color
// backgroundColor

//изменили цвет
boxElement.style.backgroundColor = "red"
// изменили ширину
boxElement.style.width = "250px";
// изменили цвет текста
boxElement.style.color = "white";
//изменили текст (контент)
boxElement.textContent = "Dova"