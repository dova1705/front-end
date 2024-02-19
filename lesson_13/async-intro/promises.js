function getSix (){
    setTimeout(() => {
        return 6
    },4000) // задержка 4 секунды
}
let x = getSix();
console.log(x)

function getSeven(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(7)
        },4000)
    })
}
const promise = getSeven();
console.log(promise)
// с помощью then мы можем получить данные из промиса (обработать)
promise.then((data) => {
    console.log(data)
})

function getSevenReject(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            reject(new Error("ошибочка сервера"))
        },4000)
    })
}

const promise2 = getSevenReject();
promise2.then((data) => {
    console.log(data); // значения попадают в then
    // с даннымы мы можем работать только здесь
})
.catch((error) => {
    console.log(error)
})

// функция принимать имя пользователя - 
// если имя John - вернет resolved
// если имя другое - вернет rejected

function getAgeUserByName(name){
    return new Promise(function(resolve, reject){
        if(name === "John"){
            setInterval(()=>{
                resolve(30)
            },3000)
            
        }else{
            setInterval(() => {
                reject(new Error(`нет такого имени: ${name}, try again`))
            },3000)
        }
    })
}
getAgeUserByName("John")
.then((data)=>console.log(data))
.catch((e) => console.log(e))

getAgeUserByName("Tom")
.then((data) => console.log(data))
.catch((e) => console.log(e))