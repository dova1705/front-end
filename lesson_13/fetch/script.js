// Функция для загрузки данных с сервера
function fetchData(){
    // fetch - это метод отправки сетевых запросов
    fetch("https://jsonplaceholder.typicode.com/users")
    // обрабатываем наш ответ с сервера (в виде промиса)
    .then(response => { // ответ от сервера
        if(response.status !== 200){
            // при ошибке
            throw new Error("Error")
        }
        return response.json()
    })
    // чаще промис обрабатывается двумя then 
    .then(json => {
        const result = document.getElementById("content");
        result.innerHTML = ""; // очищаем содержимое перед обновлением данных (div)
        const userList = document.createElement("ul"); // создаем список
        json.forEach(user => {
            const listItem = document.createElement("li"); // создаем элемент списка
            listItem.textContent = user.name; // добавляем имя пользователя в список
            userList.appendChild(listItem); // добавляем listItem в userList
        })
        result.appendChild(userList); // добавляем userList в result
    })
    .catch(error => {
        console.error(error);
    });
}
// обработчик события нажатия на кнопку
document.getElementById("updateButton").addEventListener("click", fetchData)