// Мы можем создавать элементы с нуля и прикреплять их к документу html
// Создадим пустой элемент p

// создали элемент с нуля
const newElement = document.createElement("p");
// Меняем текст внутри элемента 
newElement.textContent = "Я был создан при помощи JS";
// Добавляем бордер (рамку)
newElement.style.border = "2px solid red";
// прикрепляем элемент к документу html
document.body.append(newElement);

// 
const targetElement = document.getElementById("target-element");
// создали кнопку
const newBtn = document.createElement("button");
// тип кнопки
newBtn.type = "button";
// текст кнопки 
newBtn.textContent = "нажми на меня";
// поместили внутрь блока target-element
targetElement.append(newBtn);