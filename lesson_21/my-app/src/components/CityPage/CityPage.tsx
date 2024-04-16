import React from 'react';
// обьязательно должно быть пустым
import style from './CityPage.module.css';

function CityPage(): JSX.Element {
    return(
        <div className={style.cityClass}>
            <h1>Все о городе</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maxime nihil eius qui consequatur? Atque delectus ex in. 
                Temporibus aliquam fugit consequatur ut ex, ullam quo
            </p>
            <img src="https://live.staticflickr.com/3943/14997974254_3ad59359a2_h.jpg" alt="" />
        </div>
    );
}
export default CityPage; // виден вругих файлах