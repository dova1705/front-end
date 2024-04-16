import React, { useEffect, useState } from 'react';
import style from './Coctail.module.css'

function Coctail(): JSX.Element{
    const [name, setName] = useState<string>('');
    const [image, setImage] = useState<string>('');
    async function loadCoctail(): Promise<void> {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        const obj = await res.json();
        const {drinks} = obj; // drinks - массив с коктейлями (по ссылке fetch)
        const {strDrink, strDrinkThumb} = drinks[0];
        setName(strDrink);
        setImage(strDrinkThumb);
    }
    useEffect(() => {
        loadCoctail();
        }, []); // будет работать только при первой отрисовке, потому что в конце пустые квадратные скобки
    return (
        <div className={style.container}>
            <h1>Coctail: {name}</h1>
            <img src={image} alt="" />
            <button type="button" className={style.btn} onClick={loadCoctail} >Get Coctail</button>
        </div> // тег button в атрибуте onClick можно написать по другому onClick={() => loadCoctail()}
    )
}
export default Coctail;