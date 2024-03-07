const formElement = document.getElementById("form");
const answerElement = document.getElementById("answer");

formElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name = event.target.name.value; // получили имя через значение атрибута name в инпуте
    console.log(name);
    loadGender(name);
});

async function loadGender(name){
    const response = await fetch(`https://api.genderize.io/?name=${name}`)
    const obj = await response.json();
    console.log(obj);
    const {name:firstName, gender, probability} = obj;
    console.log(firstName)
    console.log(gender)
    answerElement.textContent = `Имя ${firstName} Пол: ${gender} С вероятностью ${probability}`;
}
    