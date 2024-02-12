// методы массивов
const numbers77 = [1,2,3,4,5]
numbers77.push(6) // добавляет элемент в конец массива
numbers77.unshift(0) // добавляет элемент в начала массива
numbers77.pop() // удаляет последний элемент массива
numbers77.shift() // удаляет первый элемент массива

//.forEach() - перебирает элементы массива и меняет исходный массив 

//.map() - перебирает элементы массива и не меняет исходный массив

// .filter() - возвращает новый массив с элементами которые удовлетварают условию

// .find() - возвращает первый элемент массива который удовлетварает условию

const numbers = [4,6,1,17,9,15,27,43,7];
// С помощью цикла for
const numbers_pow0 = []
for (let i = 0; i < numbers.length; i++){
    numbers_pow0.push(numbers[i] ** 3);
}
console.log(numbers_pow0);

// С помощью метода .forEach()
const numbers_pow1 = [];
numbers.forEach((el) => numbers_pow1.push(el ** 3))
console.log(numbers_pow1)

// С помощью метода .map()
const numbers_pow3 = numbers.map((el) => el ** 3)
console.log(numbers_pow3);

// Сформировать новый массив, в которой попадут все последние цифры
const lastDigits = [];
numbers.forEach((el) => lastDigits.push(el % 10));
console.log(lastDigits);

const strings = [
    "hello", 
    "world", 
    "orange",
    "good morning",
    "danke",
    "duck", 
    "dinosaure"
]
// forEach
// Сформировать новый массив и если длина меньше 6, то добавить 1
const string_1 = []
strings.forEach((el) => string_1.push(el.length < 6 ? el + 1 : el))
console.log(string_1);

// Дан массив с разными типами данных. Сформировать новый массив если элемент является числом то заменить его на строку
const arr = [3, "hello", true, "hi", 4, 5, "world"]
const changedArr = arr.map((el) => (typeof el === "number" ? "number" : el));
console.log(changedArr); 

// Дан массив с числами. Сформировать новый массив - если число меньше 0,
// то вернуть в массив строку "negative", а если больше 0, то вернуть "positive"
const nums = [3 ,-9,100,-7,-4,33];
const num2 = m=nums.map((el) => (el > 0 ? "positive" : "negative"));
console.log(num2);

// Дан массив со строками. Сформировать новый массив в которой попадут все строки из исходного массива
// которое начинается на букву "D" или "d"
const strings1 = ["hello", "world", "orange", "good morning", "danke", "duck", "dinosaure"];
const d_strings = []
strings1.forEach((el) => 
el[0].toLowerCase() === "d" ? d_strings.push(el) : "");
console.log(d_strings);

// Создать массив на основе предыдущего и чтобы в новый массив попали строки длиной больше 7 символов
const long_strings = string_1.filter((el) => el.length > 7)
console.log(long_strings);

// Метод slice() - возвращает копию части массива начиная с указанного индекса и до указанного индекса
const str = "hello"
const sliced = str.slice(1) // возвращает "ello"
console.log(sliced)
