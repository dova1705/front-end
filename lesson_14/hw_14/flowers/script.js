const flowersContainerElement = document.getElementById("flowers-container"); //делаем связку с flowers-container через id
async function loadFlowers(){
    // fetch - это метод отправки сетевых запросов
    const response = await fetch("https://alisherkhamidov.github.io/book-api/flowers.json")
    const flowers = await response.json(); // полученный ответ конвертируем в формат json
    console.log(flowers); // проверяем что получили, выводим в консоль
    flowers.forEach((flower) => {
        const {name, color, description, image, maxHeight} = flower // Деструктуризация
        const cardElement = document.createElement("div") // Создаем div
        cardElement.className = "flower-card" // Добавляем класс к cardElement
        const nameElement = document.createElement("span") // Создаем span
        // nameElement.className = "card-elem title";
        nameElement.classList.add("card-elem", "title") // Добавляем класс к nameElement
        const imgElement = document.createElement("img") // Создаем img
        imgElement.className = "card-elem" // Добавляем класс к imgElement
        nameElement.textContent = name; // в константу nameElement вставляем значение name через textContent
        imgElement.src = image; // в атрибут src тега img вставляем значение ключа image
        cardElement.append(nameElement, imgElement); // помещаем nameElement и imgElement в cardElement через append
        flowersContainerElement.append(cardElement);
    })
}
loadFlowers()