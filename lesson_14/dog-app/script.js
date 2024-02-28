const dogImageElement = document.getElementById("dog-image");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json()) // преобразование в формат json (строка)
    .then((obj) => {
        const {message} = obj; // деструктуризация
        console.log(message);
        dogImageElement.src = message; // сохраняем в img, атрибут srcset="" обязательный (в html) 
    })