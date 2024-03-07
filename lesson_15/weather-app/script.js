const button = document.getElementById("refreshButton");
const links = [
    {
        url: "https://wttr.in/Moscow",
        params: {
            2: "",
            m: "",
            lang: "ru"
        },
    },
    {
        url: "https://wttr.in/Amsterdam",
        params: {
            2: "",
            m: "",
            lang: "ru"
        },
    },
    {
        url: "https://wttr.in/Ashgabat",
        params: {
            2: "",
            m: "",
            lang: "ru"
        },
    },
    {
        url: "https://wttr.in/Berlin",
        params: {
            2: "",
            m: "",
            lang: "ru"
        },
    },
];

function fetchData(){
    for(const link of links){ // перебираем ссылки
        const {url, params} = link // деструктуризация ссылки (извлекаются url и params из объекта link) 
        const queryString = new URLSearchParams(params).toString(); // создаем строку запроса
        fetch(`${url}?${queryString}`) // отправляем запрос
            .then((response) => response.text()) // получаем ответ в виде текста
            .then((pageText) => {
                const result = document.getElementById("content");
                result.innerHTML = pageText; // выводим на экран 
            })
    }
}

button.addEventListener("click", fetchData);