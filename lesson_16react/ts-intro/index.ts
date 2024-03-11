console.log("Welcome o TypeScript!");

let x = 10;
// x = "hello"; //выдаст ошибку

// как типизировать 
// явно vs неявно
// При объявлении переменной мы указываем тип данных:

let y: number = 10; // пример явной типизации
let p: string; 
p = "hello"; 

let isDrunk: boolean = true;

// ключевое слово type
// Мы можем объявлять типы отдельно

type Age = number; // Типы данных пишутся всегда с большой буквы
let myAge: Age = 17;

let k: number|string = 5; // можно объявлять типы одновременно
k = "hello";
console.log(k);

let qwerty: any; // any - любой тип

//union type
type Pet = "dog" | "cat";
let petOfAlex: Pet = "dog";
console.log(petOfAlex); // "dog" 
petOfAlex = "cat";
console.log(petOfAlex); // "cat"

// Можно расширить типы
type ExtendedPet = Pet | "fish" | "bird";
let myPet: ExtendedPet = "fish";
console.log(myPet); // "fish"

type Gender = "male" | "female";
type ExtendedGender = Gender | "non binary person"

// Как типизировать массив стринговых значений 
let fruits: string[] = ["apple", "orange", "banana"];
// Особенно важно указывать тип данных при создании пустого массива

let vegetables: string[] = []; // пустой массив
vegetables.push("carrot"); // добавляем элемент в пустой массив
console.log(vegetables); // [ 'carrot' ]

// Как типизировать объект
type User = {
    firstname: string;
    isAdmin: boolean;
}

const user1: User = {
    firstname: "Dova",
    isAdmin: true
}

interface Monster {
    name: string;
    height: number;
    isAlive: boolean;
    isEvil: boolean;
}
// Создали объект указанного топа
const frankenstein: Monster = {
    name: "Frankenstein",
    height: 100,
    isAlive: true,
    isEvil: false
}
console.log(frankenstein);

interface ExtendedMonster extends Monster{
    isFlying: boolean;
}

//  Опциональные поля
interface Food{
    title: string;
    isSweet?: boolean; // знак вопроса это  опциональное поле (необязательное поле)
}

const pancake: Food = {
    title: "Pancakes", isSweet: true
}

const carrot: Food = {
    title: "Carrot"
}
console.log(pancake);
console.log(carrot);



// Создать интерфейс город City
// со след свойствами:
// name
// population
// riversName - опциональное поле название реки
// isCapital - опциональное поле - является ли город столицей
// isTouristic - опциональное поле - является ли город туристическим

// Создайте объект для этого интерфейса

// Дополнительно сделайте интеферфейс расширяющий город
// со след свойствами: добавить дату основания 

interface City {
    name: string;
    population: number;
    riversName?: string;
    isCapital?: boolean;
    isTouristic?: boolean;
}
// Создаем объект
const ashgabat: City = {
    name: "Ashgabat",
    population: 1003678,
    riversName: "Каракум",
    isCapital: true,
    isTouristic: true
}
console.log(ashgabat)

interface ExtendedCity extends City{
    dateOfFoundation: number;
}

const mary: ExtendedCity = {
    name: "Mary",
    population: 208697,
    dateOfFoundation: 1884
}

console.log(mary);

// Типизация функции
// Нужно типизировать параметры и возвращаемое значение
// (a:number, b:number) - параметры функции, :number - тип возвращаемого значения
function sum(a:number, b:number):number{
    return a + b;
}
const dev = (a:number, b:number) => a/b;
console.log(sum(10,12)); // 22
console.log(dev(20,2)); // 10

function toUpper(str:ExtendedPet):string{
    return str.toUpperCase();
}
console.log(toUpper("dog"));

const nine = Number ("9");
const nineStr = String(9);
console.log(nine);
console.log(nineStr);