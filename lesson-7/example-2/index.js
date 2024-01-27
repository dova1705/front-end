const paragraphElement = document.getElementById("text");
const changeButtonElement = document.getElementById("btn-change");
const flowerElement = document.getElementById("flowers");
const changeFlowerBtn = document.getElementById("btn-change-flower");
const surikatElement = document.getElementById("surikat");
const btnAddImage = document.getElementById("add-surikat");
// console.log(paragraphElement);
// console.log(changeButtonElement);

// addEventListener - слушатель событии
// Мы можем назначить обработчик события и при нажатии на кнопку мы будем менять 
// фон параграфа на зелёный, цвет текста на белый
changeButtonElement.addEventListener("click", () => {
    paragraphElement.style.backgroundColor = "#000";
    paragraphElement.style.color = "white"
});

// Меняем текст внутри
changeFlowerBtn.addEventListener("click", () => {
    flowerElement.textContent = "Ягодки"
    flowerElement.style.backgroundColor = "green"
    flowerElement.style.color = "#fff"
})

btnAddImage.addEventListener("click", () => {
    surikatElement.src = "https://img.razrisyika.ru/kart/129/515291-surikat-2.jpg";
    surikatElement.style.width = "30%";
    surikatElement.style.display = "flex";
    surikatElement.style.margin = "20px";
})
surikatElement.style.borderRadius = "30px"