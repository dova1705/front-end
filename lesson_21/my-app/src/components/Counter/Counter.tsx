import React, { useState } from 'react';
// вторая строка должен быть пустым
import style from './Counter.module.css';

function Counter(): JSX.Element {
    const [counter, setCounter] = useState<number>(0); // (0) начальное значение counter, setCounter меняет counter
    function handlPlus():void {
        setCounter(counter + 1);
    }
    function handlMinus():void {
        setCounter(counter - 1);
    }
    return(
        <>
        <h1>Добавление денег</h1>
        <img src="https://i.ytimg.com/vi/y_g63EhX68A/maxresdefault.jpg" alt="" />
        <div className={`${style.container} ${style.counterClass}`}> 
            <button className={style.btn} type="button" onClick={handlMinus}>Убрать лишние деньги</button>
            <span style={{ color: 'red' }}>{counter}</span>
            <button className={style.btn} type="button" onClick={handlPlus}>Добавить деньги на счет</button>
        </div>
        </>
    )
}
export default Counter; 