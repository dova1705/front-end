import React, { useState } from 'react';
// вторая строка должен быть пустым
import style from './Counter.module.css';

function Counter(): JSX.Element {
    //создали переменную состояния counter 
    // и функцию setCounter для изменения состояния 
    // useState - это хук 
    // в круглых скобках начальное состояние переменной состояния
    // хук useState принимает начальное значение переменной состояния 
    // возвращает массив в котором на первом месте переменнаясостояния
    // а на втором месте функция сеттер
    // Хук - э то функция которая используется только внутри коспонента 
    // В жизненном цикле компонента React есть 3 фазы:
    // Сборка (mounting)
    // Обновление(updating)
    // Разборка(unmounting)
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