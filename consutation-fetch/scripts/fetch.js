const container = document.querySelector(".container"); // получили контейнер через класс
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => render(data))

const render = arr => {
    arr.forEach(({name, username}) => {
    const cardElement = document.createElement("div");
    const nameElement = document.createElement("p");
    const usernameElement = document.createElement("p");
    // добавление объектов
    nameElement.innerText = name;
    usernameElement.innerText = username;
    cardElement.append(nameElement, usernameElement); // nameElement, usernameElement добавили в cardElement
    container.append(cardElement); // cardElement добавили в container
    })
}
