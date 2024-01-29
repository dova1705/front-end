// создал заголовок
const heading = document.createElement("h2");
// создал текстовый узел
heading_text = document.createTextNode("Продолжим изучать JS");
// прикрепил в заголовку текст
// метод appendChild добавляет узел после последнего дочернего элемента указанного родительского узла
heading.appendChild(heading_text);
// прикрепил готовый заголовок к body документа
document.body.appendChild(heading);
// создали элемент div
let div = document.createElement("div");
div.innerText = "div создан с помощью js"
