class Plants{
    constructor(height = 100, age = 1){
        this.height = height;
        this.age = age;
    }
    grow(){
        this.height += 10;
    }
}

class Rose extends Plants {
    constructor(height, age, numberOfFlowers){
        super(height, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}

const goldenRose = new Rose(10, 5, 25);
console.log(goldenRose);
goldenRose.grow();
console.log(goldenRose);