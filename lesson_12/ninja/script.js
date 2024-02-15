const formElemnt = document.getElementById("form");
const listElement = document.getElementById("persons-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one"); // clearOneBtn

// Сперва получаем данные из формы с помощью метода getElementById()
// formElement - это объект формы с идентификатором "form"
// listElement - это объект списка с идентификатором "persons-list"
// clearBtnElement - это объект кнопки с идентификатором "clear" очистить весь список
// clearOneBtnElement - это объект кнопки с идентификатором "clear-one" очистить один элемент

const persons = [];

const clearList = function (){
    while(listElement.hasChildNodes()){ // пока есть доченрние элементы
        listElement.firstChild.remove(); // удаляем первый элемент списка
    }
}

const clearOne = function(){
    if(listElement.hasChildNodes()){
        listElement.firstChild.remove();
    }
}

// Функция clearInput срабатывает при нажатии на кнопку добавить в список
function clearInputs(event){
    event.target.nickname.value = "";
    event.target.place.value = "";
}

// Функуия changeStatus срабатывает при нажатии на элемент списка и добавляет либо убирает подчеркивание 
function changeStatus(event){
    if(event.target.style.textDecoration === "line-through"){
        event.target.style.textDecoration = "none";
    } else{
        event.target.style.textDecoration = "line-through";
    }
}


clearBtnElement.addEventListener("click", clearList);
clearOneBtnElement.addEventListener("click", clearOne);

// данные из формы извлекаются с помощью свойства target и сохраняются в объект person 
// объект имеет два свойства - name и place
// объект person добавляется в массив persons с помощью push
formElemnt.addEventListener("submit", (event) => {
    event.preventDefault(); // предотвращает переход на другую страницу
    const person = {
        name: event.target.nickname.value,
        place: event.target.place.value
    }
    persons.push(person);

    const liElement = document.createElement("li"); // создали тег li
liElement.textContent = `${person.name} ${person.place}  :ninja:`; // добавили текст в li
liElement.onclick = changeStatus;
listElement.append(liElement); // добавили li в конец списка
clearInputs(event);
});
