// создал заголовок
const heading = document.createElement("h2");
// создал текстовый узел
heading_text = document.createTextNode("Продолжим изучать JS");
// прикрепил в заголовку текст
heading.appendChild(heading_text);
// прикрепил готовый заголовок к body документа
document.body.appendChild(heading);