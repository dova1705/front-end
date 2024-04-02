import React from 'react';

interface Props{
    color: string;
    brand: string;
}

function Car(props: Props): JSX.Element{ // типизируем
    const{color, brand} = props; // деструктуризация
    return(
        // у каждой карточки будет собственный цвет
        <div style={{backgroundColor: color}}>
            <h2>Car card</h2>
            <p>Марка: {brand}</p>
            <p>Цвет: {color}</p>
        </div>
    );
}
export default Car;

// Создать компонент Fruit с пропсами
// -title
// -color
// -weight

// При помощи этого компонента создайте несколько элементов
// Желтый банан 2500г
// зеленное яблоко 1000г
// Красное яблоко 2000г