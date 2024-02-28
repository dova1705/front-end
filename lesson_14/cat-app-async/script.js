const catFactsElement = document.getElementById("cat-facts");
// Функция обертка
async function loadCatFacts(){
    const response = await fetch("https://catfact.ninja/fact"); //сетевой запрос
    const obj = await response.json();
    console.log(obj);
    const {fact, length} = obj;
    catFactsElement.textContent = `${fact} ${length}`; // сохраняем в параграф. fact, length ключи
}
loadCatFacts();