// Массив объектов
const brothers = [
    {race: "Hobbit", heigth: 110, age: 40, name: "Frodo Baggins"},
    {race: "Human", heigth: 185, age: 45, name: "Aragorn"},
    {race: "Elf", heigth: 189, age: 117, name: "Legolas"},
    {race: "Dworf", heigth: 140, age: 150, name: "Gimli"},
    {race: "Human", heigth: 195, age: 200, name: "Gandalf"}
];
// метод Map - возвращает новый массив, 
// созданный путем применения функции к каждому элементу исходного массива
// Этот метод не изменяет имходный массив

// Пример 1
const names = brothers.map((element) => element.name);
console.log(names); // [ 'Frodo Baggins', 'Aragorn', 'Legolas', 'Gimli', 'Gandalf' ]
const names1 = brothers.map(brothers => brothers.name);
console.log(names1); // ['Frodo Baggins', 'Aragorn', 'Legolas', 'Gimli', 'Gandalf']

// Пример 2
// слова element/brother - это всего лишь имя переменной (может быть любым)
// Удобно выбирать слово в единственном числе. 
// Пример: массив cars - переменную в колбэке назвать car

const ages = brothers.map((brothers) => brothers.age);
console.log(ages); // [ 40, 45, 117, 150, 200 ]

// Пример 3
const racesNames = brothers.map((brothers) => brothers.race + " " + brothers.name);
console.log(racesNames); // [ 'Hobbit Frodo Baggins', 'Human Aragorn', 'Elf Legolas', 'Dworf Gimli', 'Human Gandalf' ]

// Пример 4
// высокий - выше или равно 170
// маленький - ниже 170
// массив из слов ["маленький, высокий, высокий, маленький, высокий"]

const sizes = brothers.map((brothers) => {
    if (brothers.heigth >= 170){
        return "высокий";
    }
    return "маленький";
});
console.log(sizes); // [ 'маленький', 'высокий', 'высокий', 'маленький', 'высокий' ]

// Решение с тернарным оператором
const sizes2 = brothers.map(brothers => brothers.heigth >= 170 ? "высокий" : "маленький");
console.log(sizes2); // [ 'маленький', 'высокий', 'высокий', 'маленький', 'высокий' ]

// Метод forEach - для изменения исходного массива
// Пример 1
// Состарим всех героев на 1 год
brothers.forEach((brother) => brother.age += 1);
console.log(brothers);

// Пример 2
// Переведем все имена на верхний регистр (не создает копию массива изменяет исходный)
brothers.forEach((brother) => brother.name = brother.name.toUpperCase());
console.log(brothers);

// Пример 3. Метод reduce
// с помощью цикла for
let sum = 0;
for(let i = 0; i < ages.length; i++){
    sum+= ages[i];
}
console.log(sum); // 552
// Метод reduce
const sum2 = ages.reduce((acc, current) => acc + current, 0);
// iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200
console.log(sum2); // 552

// Комбинация map+reduce
// общая высота наших героев
const totalHeight = brothers.reduce((acc, brother) => acc + brother.heigth, 0)
console.log(totalHeight); // 720

// можно сделать цепочку
const totalHeight2 = brothers
.map((brother) => brother.heigth) // получили массив ростов
.reduce((acc, height) => acc + height, 0);
console.log(totalHeight2); // 819

// Хотим объеденить все имена через пробел
const nameStr = brothers
.map((brother) => brother.name) // получили массив имен
.reduce((acc, name) => acc + name + " ", "");
console.log(nameStr); // Frodo Baggins Aragorn Legolas Gimli Gandalf
// .trim - убирает пробелы в начале и в конце строки

// Метод split разделяет строку на массив
const str = "Gandalf, Sauron, Saruman, Legolas, Elrond";
const namesArr = str.split(", "); // метод split принимает разделитель
console.log(namesArr); // [ 'Gandalf', ' Sauron', ' Saruman', ' Legolas', ' Elrond' ]

// Метод join
const str2 = namesArr.join(", ");
console.log(str2); // Gandalf, Sauron, Saruman, Legolas, Elrond

// Метод find - вохвращает первое совпадение с заданным условием
const person = brothers.find((brother) => brother.race === "Human");
console.log(person); // { race: 'Human', heigth: 185, age: 45, name: 'Aragorn' }

const person2 = brothers.find((brother) => brother.heigth <= 120);
console.log(person2); // { race: 'Hobbit', heigth: 110, age: 41, name: 'FRODO BAGGINS' }

const person3 = brothers.find((brother) => brother.name === 'LEGOLAS');
console.log(person3); // { race: 'Elf', heigth: 189, age: 117, name: 'Legolas' }

// Метод filter
// возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный)
// Выбрать тех кто старше 100 лет
const oldBrothers = brothers.filter((brother) => brother.age > 100);
console.log(oldBrothers);   

// Выбрать всех старых но не Human
const oldNonHumans = brothers
.filter((brother) => brother.age > 100 && brother.race !== "Human");
console.log(oldNonHumans);