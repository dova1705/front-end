const titleElement = document.getElementById("title");
const yearElement = document.getElementById("year");
const authorElement = document.getElementById("author")
const genreElemetn = document.getElementById("genre");
const imageElement = document.getElementById("book-image");

async function loadBook(){
    const res = await fetch("https://alisherkhamidov.github.io/book-api/book.json")
    const obj = await res.json();
    console.log(obj);
    const {title, author, year, genre, cover} = obj // Деструктуризация

    titleElement.textContent = title;
    yearElement.textContent = year;
    authorElement.textContent = author;
    genreElemetn.textContent = genre;
    imageElement.src = cover; 
}
loadBook();