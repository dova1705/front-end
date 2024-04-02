import React, { useState } from 'react';

import style from './Butterbrod.module.css';

function Butterbrod(): JSX.Element{
    const [butterbrod, setButterdrod] = useState<string>('Твой буттерброд')
    function handleAddTomato(): void {
    setButterdrod(`${butterbrod} tomato`);
    }
    function handleAddCucumber() : void {
    setButterdrod(`${butterbrod} cucumber`);
    }
    function handleAddOnion() : void {
    setButterdrod(`${butterbrod} onion`);
    }
    function handleAddClear() : void{
    setButterdrod('Твой буттерброд');
    }
    return(
    <><div className={style.container}>
            <h1>Butterbrod</h1>
            <p>{butterbrod}</p>
            <button type="button" className={style.btn} onClick={handleAddOnion}>добавить лук</button>
            <button type="button" className={style.btn} onClick={handleAddTomato}>добавить томат</button>
            <button type="button" className={style.btn} onClick={handleAddCucumber}>добавить огурец</button>
            <button type="button" className={style.btn} onClick={handleAddClear}>очистить</button>
        </div></>
    );
}
export default Butterbrod;