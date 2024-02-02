// Пример 1 создание объекта
const student = {
    age: 31,
    name: 'Dova'
};
console.log(student); // { age: 31, name: 'Dova' }
// получить значение по ключу
console.log(student.age); // 31
console.log(student.name); // Dova

// Пример 2 - ключ может состоять из двух слов
// если ключ имеет пробелы - его нужно обернуть в кавычки (квадратные скобки!!!)
const product = {
    title: "iphone",
    price: 2000,
    "model of phone" :"XR"
}
console.log(product); //{ title: 'iphone', price: 2000, 'model of phone': 'XR' }
// получить значение по ключу
console.log(product.price); // 2000
console.log(product["model of phone"]); //XR

//Положить значение по ключу
product.diagonal = 6.5;
product["type of adapter"] = "USB-C";
console.log(product);

// Пример 3 
// Если у нас есть переменная и мы хотим доставать 
// значения из объекта по этой переменной
let key = "age";
console.log(student[key]); // 31
key = "name";
console.log(student[key]); // Dova

const client = {
    firstName: "John",
    wife: "Maria"
};

const key1 = "wife";
// как достать по переменной из объекта
console.log(client.key1); // undefined (потому-что key1 написан без квадратной скобки)
console.log(client[key1]); // Maria

// Пример 4
// Допустим у нас были переменные - и мы хотим создать из них объект
const title = "Titanic";
const capacity = 1500;
const titanic = {title, capacity};
console.log(titanic); // { title: 'Titanic', capacity: 1500 }

// Пример 5
const name1 = "Avrora";
const cap = 300;
// хочу создать объект из этих переменных, но с другими названиями ключей
const avrora = {title:name1, capacity:cap}
console.log(avrora); // { title: 'Avrora', capacity: 300 }

// Пример 6
// Метод внутри объекта 
const dog = {
    nick: "Tuzik",
    bark(){
        console.log("Гав");
    }
};
//вызов метода
dog.bark();

// ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ
// Наследование - это копирование свойств родительского объекта в новый
const bicycle = {
    barnd: "Desna",
    price: 2000,
    bell(){
        console.log("Beep-beep");
    }
};
//вызов метода
bicycle.bell();

// на осноании велосипеда мы сделаем горный велосипед
// указываем прототип с помощью свойства прото(по два подчеркивания с каждой стороны __proto__:)
const mountineBike = {
    __proto__: bicycle,
    price: 3000,
    gears: 7
}
console.log(mountineBike.price); // 3000
console.log(mountineBike.gears); // 7
console.log(mountineBike.barnd); // Desna (в mountineBike нет ключа barnd наследует с родительскокго brand)

// создайте объект транспортное средство vehicle с полями
// - speed со значением 40
// - capacity со значением 4
// - метод drive(){} - метод выводит в консоль фразу "Поехали"

// Создайте на основе vehicle объект jeep с capacity = 5 
// скорость 60 numbersOfDoors = 2
// вызовите метод drive от jeep
const vehicle = {
    speed: 40,
    capacity: 4,
    drive(){
        console.log("Поехали!");
    }
};

const jeep = {
    __proto__: vehicle,
    capacity: 5,
    speed: 60,
    numbersOfDoors: 2
};
jeep.drive();