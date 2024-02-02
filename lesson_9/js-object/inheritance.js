// Class
class Animal {
    constructor(age, name, color) {
        this.age = age;
        this.name = name;
        this.color = color;
    }
    //метод
    info(){
        console.log(`Меня зовут: ${this.name}, возраст: ${this.age}, цвет: ${this.color}`)
    }
}
const dog = new Animal(2, "Шарик", "белый");
dog.info(); // Меня зовут: Шарик, возраст: 2, цвет: белый
console.log(dog); // Animal { age: 2, name: 'Шарик', color: 'белый' }

// Наследование
// Создадим произвольный класс птица
// добавим поле высота полета heightOfFlight и ration - рацион
class Bird extends Animal{
    constructor(age, name, color, heightOfFlight, ration){
        super(age, name, color);
        this.heightOfFlight = heightOfFlight;
        this.ration = ration;
    }
}

const calibri = new Bird(2, "Калбри", "коричневый", 10, "корм");
console.log(calibri);
// переопределение метода info ???
info = () =>{
    console.log(`Меня зовут: ${this.name}, возраст: ${this.age}лет, цвет: ${this.color}, высота полета: ${this.heightOfFlight}, рацион: ${this.ration}`)
}

class Alcohol{
    constructor(title, strength, volume){
        this.title = title;
        this.strength = strength;
        this.volume = volume;
    }
    drink(){
        console.log(`приятно выпить ${this.title}`);
    }
}
class Cognac extends Alcohol{
    constructor(title, strength, volume, age, country){
        super(title, strength, volume);
        this.age = age;
        this.countyr = country;
    }
}

class Martiny extends Alcohol{
    constructor(title, strength, volume, sugarAmount){
        super(title, strength, volume);
        this.sugarAmount = sugarAmount;
    }
}

const ararat = new Cognac("Арарат", 40, 0.5, 5, "Armenia");
ararat.drink();

const blackLabel = new Martiny("Bianco", 37, 0.5, 13);
blackLabel.drink();