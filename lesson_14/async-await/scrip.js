// 1-й вариант работы с промисами 
function getName (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("John")
        },1000)
    })
}
console.log(getName()); // Promise { <pending> }
// Обработка с помощью then
getName().then((data) => {
    console.log(data);
})

// 2-й вариант работы с промисами
async function f(){
    const response = await getName(); // с помощью await мы можем раскрыть промис и обработать его
    //await ожидает получение данных
    console.log(response);
}

// две одинаковые функции которые возвращают 5
function getFive(){
    return new Promise(function(resolve, rejected){
        resolve(5)
    }) 
}
console.log(getFive()) // Promise { 5 }

async function getFiveVer2(){
    return 5
}
console.log(getFiveVer2()) // Promise { 5 }