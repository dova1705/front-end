import React from 'react';


interface Props{
    color: string
    title: string
    family: string
    price: number
}

function Flower(props: Props): JSX.Element{
    // const {flowers} = props;
    const {color, title, family,price} = props;
    return(
        <div>
            <h2>Flower</h2>
            <p>
                <span style={{backgroundColor: color}}>Цвет: {color}</span> <br />
                Название: {title} <br />
                Семейство: {family} <br />
                Цена: {price}</p>
        </div>
    );
}

export default Flower;