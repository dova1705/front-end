const cardElement = document.getElementById("dracula-card");
async function loadDracula(){
    const response = await fetch("https://alisherkhamidov.github.io/fake-api/dracula.json")
    const obj = await response.json();
    console.log(obj);
    const {name, age, isHungry, mood, motto} = obj // Делаем деструктуризацию
    console.log(name, age, isHungry, mood, motto); // проверили что получили значения
    cardElement.textContent = `${name} ${age} ${mood} ${motto} ${isHungry ? "Хочет есть" : "Не хочет есть"}` // сохраняем в параграф
}
loadDracula(); // запускаем функцию