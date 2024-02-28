function addTask(){
    // Получаем значение из текстового поля
    const taskText = document.getElementById("taskInput").value; // value - получает значение из инпута
    // Проверяем на пустоту
    if(taskText.trim() === ""){ // trim - удаляет пробелы в начале и в конце строки
        alert("Задача не может быть пустым");
        return; // return после вызова alert() не дает задаче добавиться в список
    }
    const taskItem = document.createElement("li"); // создаем элемент списка
    taskItem.innerHTML = `${taskText} <button onclick = "removeTask(this)">Удалить</button>`;
    // Добавляем элемент список задач
    document.getElementById("tasksList").appendChild(taskItem);
    //очищаем текстовое поле
    document.getElementById("taskInput").value = "";
}
function removeTask(button){
    // Удаляем родительский элемент
    const taskItem = button.parentElement; // если найдет li, удаляет его
    taskItem.remove();
}