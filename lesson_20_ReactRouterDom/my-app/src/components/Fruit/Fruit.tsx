import React from 'react';

interface Props {
    title: string;
    color: string;
    weight: number;
}
function Fruit(props: Props): JSX.Element{
    const{title, color, weight} = props;
    return(
        // style={{backgroundColor: color}} -у каждой карточки будет свой цвет
        <div style={{backgroundColor: color}}>
            <h2>Fruits</h2>
            <p>Название: {title}</p>
            <p>цвет: {color}</p>
            <p>Вес: {weight}</p>
        </div>
    )
}
export default Fruit;