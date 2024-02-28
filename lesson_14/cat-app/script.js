// const catFactsElement = document.getElementById("cat-facts");
// //console.log(catFactsElement);
// fetch("https://catfact.ninja/fact") // сетевой запрос
// .then((response) => response.json())
// .then((obj) => {
//     const{fact, legth} = obj; // деструктуризация
//     catFactsElement.textContent = `${fact} ${legth}` //сохраняем в параграф
// })

const catFactsElement = document.getElementById("cat-facts");
// console.log(catFactsElement);
fetch("https://catfact.ninja/fact") // сетевой запрос
.then((response)=> response.json())
.then((obj)=>{
    const {fact, length} = obj;// деструктуризация
    catFactsElement.textContent = `${fact} ${length}` //сохраняем в параграф
})