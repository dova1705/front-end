import React, { useEffect, useState } from 'react';

function Playground(): JSX.Element{
    const [numberofDogs, setNumberofDogs] = useState<number>(0);
    const [numberOfBirds, setNumberOfBirds] = useState<number>(10);
    function handleAddDog(): void{
        setNumberofDogs(numberofDogs + 1);
    }
    function handleAddBird(): void{
        setNumberOfBirds(numberOfBirds + 1);
    }

    // жизненный цикл компонента
    //  этапы:
    // 1) Mounting - первая отрисовка компонента
    // 2) Updating - обновление компонента
    // 3) Unmounting - удаление компонента (перестает отрисовываться)
    
    // Пример 1 - пустой массив зависимостей
    useEffect(() => {
        console.log("useEffect 1 - только при первой отрисовке === Mounting");
    },[]); // [] - массив зависимостей

    // Пример 2 -без массива вообще
    useEffect(() => {
        console.log("useEffect 2 - при маунте и при любых изменениях");
    },);

    // Пример 3 - с массивом зависимостей
    useEffect(() =>{
        console.log("useEffect 3 - при первичной отрисовке и при изменении numberOFDogs")
    }, [numberofDogs]);
    return(
        <div>
            <h2>Playground</h2>
            <p>Number of dogs: {numberofDogs}</p>
            <p>Number of birds {numberOfBirds}</p>
            <button type="button" onClick={handleAddDog}>Add dog</button>
            <button type="button" onClick={handleAddBird}>Add bird</button>
        </div>
    )
}
export default Playground;