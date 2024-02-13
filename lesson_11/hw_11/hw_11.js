const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

// Создайте на основе страрого массива новый массив объектов
// по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
const newCars = cars.map((car) => {
    return {
        brand: car.brand,
        isDiesel: car.isDiesel}
});
console.log(newCars);

// ================================================================
// Создайте новый массив, где оставьте только машины с дизельным двигателем.
const diselCars = cars.filter((car) => car.isDiesel);
console.log(diselCars);

// ================================================================
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const nonDiselCars = cars.filter((car) => !car.isDiesel);
console.log(nonDiselCars);

// ================================================================
// Посчитайте общую стоимость всех машин не с дизельным двигателем.
const sum = cars
    .filter((car) => !car.isDiesel)
    .map((car) => car.price)
    .reduce((acc, price) => acc + price, 0);
//  .reduce((sum, car) => sum + car.price, 0); // тоже самое но короче (после filter пишем, без map)

console.log(sum);

// ================================================================
// Повысьте цену всех машин в массиве на 20%.
cars.forEach((car) => car.price *= 1.2);
console.log(cars);

// ================================================================
// Создайте новый массив, где все дизельные машины 
// заменены на { brand: "Tesla", price: 25000, isDiesel: false }
const cars2 = cars.map((car) => {
    if(car.isDiesel){
        return {
            brand: "Tesla",
            price: 25000,
            isDiesel: false
        }
    }
    return car;
});
console.log(cars2);

const cars3 = cars.map((car) => 
    car.isDiesel ? { brand: "Tesla", price: 25000, isDiesel: false} : car
)
console.log(cars3);