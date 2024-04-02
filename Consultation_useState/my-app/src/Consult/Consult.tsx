import React, { useState } from 'react';

import style from './Consult.module.css';

function Consult(): JSX.Element{
    const [consult, setConsult] = useState<number>(0);
    function handlePlus(): void {
        setConsult(consult+1);
    }
    function handleMinus(): void {
        setConsult(consult-1);
    }
    return(
        <><h1>Счетчик</h1><img src="https://bankdetektor.ru/upload/iblock/d85/schetchik-banknot-cassida-5550-uv-dl.jpg" alt="" /><div className={`${style.container} ${style.consultClass}`}>
            <button type="button" className={style.btn} onClick={handleMinus}>Уменьшить счетчик</button>
            <span style={{ color: 'red' }}>{consult}</span>
            <button type="button" className={style.btn} onClick={handlePlus}>Увеличить счетчик</button>
        </div></>
    )
}
export default Consult;