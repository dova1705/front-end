// function getStudent(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({name: "Anri", age:32})
//         },4000)
//     })
// };

// let x;
// getStudent().then((student) => {
//     console.log(student.name); // Anri
//     x = student.name;
//     console.log("внутри колбэка", x); //Выведется вторым Anri
// });
// console.log("снаружи колбэка", x); //Выведется первым undefined

// Второе задание
function getDriveLicense(succes, failure){
    if(Math.random() > 0.1){
        succes("Успех!!!");
    }else{
        failure("упс, неудача :(")
    }
}

function succes (result){
    console.log(`Успешно завершено результатом ${result}`);
}

function failure(error){
    console.log(`Неудача завершена с ошибкой ${error}`);
}
getDriveLicense(succes, failure);