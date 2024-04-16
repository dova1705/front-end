import React from 'react';

import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element{
    return(
        <nav className={style.novigation}>
            <ul className={style.list}>
                <li className={style.listElement}>
                    <NavLink to="/coctail" className={style.link}>Coctail</NavLink>
                </li>
                <li className={style.listElement}>
                    <NavLink to="/randomDog" className={style.link}>Random Dog</NavLink>
                </li>
                <li className={style.listElement}>
                    <NavLink to="/playground" className={style.link}>Playground</NavLink>
                </li>
                <li className={style.listElement}>
                    <NavLink to="/" className={style.link}>Home</NavLink>
                </li>
            </ul>
        </nav>
    )
}