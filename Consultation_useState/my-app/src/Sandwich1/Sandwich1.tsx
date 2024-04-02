import React, { useState } from 'react';
// должен быть свободным
import style from './Sandwich1.module.css';

export default function Sandwich1(): JSX.Element{
    const [sandwich1, setSandwich1] = useState<string>("Бутербродный конфигуратор");
    function handleAddTomatto():void{
        setSandwich1(`${sandwich1} Томат`);
    }
    function handleAddOnion() : void {
        setSandwich1(`${sandwich1} Лук`);
    }
    function handleAddPepper() : void {
        setSandwich1(`${sandwich1} Перец`);
    }
    function handleAddClear() : void {
        setSandwich1(`Бутерброд`);
    }
    return(
        <><h1>Сэндвич</h1><img src="https://media.baamboozle.com/uploads/images/179726/1605053142_238136" alt="" /><p>{sandwich1}</p><div className={`${style.container} ${style.anotherClass}`}>
            <button type="button" onClick={handleAddTomatto} className={style.btn}>Томат</button>
            <button type="button" onClick={handleAddOnion} className={style.btn}>Лук</button>
            <button type="button" onClick={handleAddPepper} className={style.btn}>Перец</button>
            <button type="button" onClick={handleAddClear} className={style.btn}>Очистить</button>
        </div></>
    )
}
