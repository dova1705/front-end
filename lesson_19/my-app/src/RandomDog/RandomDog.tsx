import React, { useEffect, useState } from 'react';

import style from './RandomDog.module.css'

function RandomDog():JSX.Element{
    const [url, setUrl] = useState<string>('');
    async function loadDogPicture():Promise<void> {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const obj = await res.json();
        console.log(obj);
        const { message } = obj;
        setUrl(message);
    }
    useEffect(() => {
        loadDogPicture();
    }, []);

    return(
        <div className={style.container}>
            <h1 className={style.heading}>Random dog</h1>
            <div className={style.imageContainer}>
                <img className={style.image} src={url} alt="Random Dog" />
            </div>
            <button type="button" className={style.btn} onClick={loadDogPicture}>Next image</button>
        </div>
    );
}
export default RandomDog;