import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Counter(): JSX.Element{
    const dispatch = useDispatch();
    function handlePlus(): void{
        // Dispatch мы вызываем когда хотим изменить централизованное состояние  
        dispatch({ type: 'counter/plus', payload: 1 });
    }
    function handleMinus(): void{
        dispatch({ type: 'counter/minus', payload: 1 });
    }
    const counter = useSelector((state: RootState)=>state.counter.value);
    return (
        <div>
            <button type="button" onClick={handlePlus}>+</button>
            <button type="button" onClick={handleMinus}>-</button>
        </div>
    );
}