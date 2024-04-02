import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CityPage from './CityPage/CityPage';
import Counter from './Counter/Counter';
import Car from './Car/Car';
import Fruit from './Fruit/Fruit';
import FruitPage from './FruitPage/FruitPage';
import Parent from './Parent/Parent';
import FlowerCard from './hw_18/FlowerCard/FlowerCard';
import Playground from './Playground/Playground';
import RandomDog from './RandomDog/RandomDog';
import Coctail from './Coctail/Coctail';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Playground />
    <App />
    <CityPage /> 
    <Counter/>
    <Car color="red" brand="Mercedes"/>
    <Car color="grey" brand="BMW"/>
    <Car color="yellowgreen" brand="Lada"/>
    <Fruit title="Желтый банан" color="yellow" weight={2500}/>
    <Fruit title="Зеленое яблоко" color="green" weight={1000}/>
    <Fruit title="Красное яблоко" color="red" weight={1500} />
    <FruitPage />
    <Parent />
    <FlowerCard />
    <RandomDog />
    <Coctail />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

