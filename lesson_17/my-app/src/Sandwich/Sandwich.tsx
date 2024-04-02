import React, { useState } from "react";
// Обязательно должен быть пустым
import style from './Sandwich.module.css'

export default function Sandwich(): JSX.Element {
    const [sandwich, setSandwich] = useState<string>('Бутербродный конфигуратор');
    function handleAddCheese():void{
        setSandwich(`${sandwich} Сыр`);
    }
    function handleAddBread():void{
        setSandwich(`${sandwich} Хлеб`);
    }
    function handleAddSalami():void{
        setSandwich(`${sandwich} Колбаса`);
    }
    function handleAddClear():void{
        setSandwich('Бутерброд');
    }

    // Возвращает массив из двух элементов
    // (состояние, функция для обновления состояния) const [sandwich, setSandwich] = useState<string>('Бутербродный конфигуратор');
    // Состояние - может быть чем унодно, например, строка или число, массив...
    return(
        <><h1>Sandwich</h1><img src="https://100foto.club/uploads/posts/2022-11/1668343862_18-100foto-club-p-sendvichi-dlya-kofeen-29.jpg" alt="" /><p>{sandwich}</p><div className={`${style.container} ${style.anotherClass}`}>
            <button type="button" onClick={handleAddCheese} className={style.btn}>Добавить сыр</button>
            <button type="button" onClick={handleAddBread} className={style.btn}>Добавить хлеб</button>
            <button type="button" onClick={handleAddSalami} className={style.btn}>Добавить колбасу</button>
            <button type="button" onClick={handleAddClear} className={style.btn}>сбросить</button>
        </div></>
    )
}
