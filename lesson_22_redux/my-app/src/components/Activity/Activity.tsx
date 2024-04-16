import React, { useEffect, useState } from 'react';

import style from './Activity.module.css';

function Activity(): JSX.Element {
    const [name, setName] = useState<string>('');
    const [numberOfParticipants, setNumberOfParticipants] = useState<number>(0)
    const [activityType, setActivityType] = useState<string>('');

    async function fetchActivity():Promise<void>{
        const res = await fetch('https://www.boredapi.com/api/activity');
        const obj = await res.json();
        
        // const obj = await res.json(); - это строка, которая используется для извлечение JSON-данных из HTTP-ответа
        // полученного после выполнения запроса к серверу.
        
        // res - это результат выполнение функции fetch, которая представляет HTTP-ответа от сервера

        // res.json() - это метод объекта Response в JavaScript, которое читает тело HTTP-ответа как JSON.
        // Он выполняет преобразование данных, полученных от сервера в ответе на запрос, в формате JSON
        // и возвращает JavaScript - объект, который представляет этот JSON.

        // res.json() предназначен специально для извлечения JSON из ответа сервера,
        // и он позволяет дальше работать с этими данными как с объектом в JavaScript.

        // await res.json() - ключевое слово await используется здесь
        // чтобы приостановить выполнение функции до тех пор, пока результат res.json() не будет готов.

        // Как только данные будут готовы, они будут присвоенны переменной obj.
        const { activity, type, participants } = obj;
        setName(activity);
        setNumberOfParticipants(participants);
        setActivityType(type);
    }
    useEffect(() => {
        fetchActivity();
    }, []) // [] - пустой массив зависимости 
    const handleReaload = (): void => { { fetchActivity(); } };
    return(
        <div>
            <h1>Random Activity</h1>
            <p>Название мероприятия: {name}</p>
            <p>Колличество участников: {numberOfParticipants}</p>
            <p>Тип мероприятия: {activityType}</p>
            <button type="button" onClick={handleReaload}>NEXT</button>
        </div>
    );
}
export default Activity;