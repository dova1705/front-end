// Асинхронный код / синхронный код
console.log("apple");
setTimeout(() => {
    console.log("banana");
},3000); // ждет 3 секунд   
console.log("orange")

// JS - однопоточный язык программирования

function getSix (){
    setTimeout(() => {
        return 6
    },4000) // задержка 4 секунды
}

let x = getSix();
console.log(x);

function printClap(){
    console.log("clap");
}

function printBravo(){
    console.log("bravo");
}

function clapHands(){
    setTimeout(printClap, 2000);
    setTimeout(printBravo, 3000);
}

clapHands();