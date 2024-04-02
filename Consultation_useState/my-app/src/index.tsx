import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CityPage from './CityPage/CityPage';
import Counter from './Counter/Counter';
import Sandwich from './Sandwich/Sandwich';
import Consult from './Consult/Consult';
import Sandwich1 from './Sandwich1/Sandwich1';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <CityPage /> 
    <Counter/>
    <Sandwich />
    <Consult />
    <Sandwich1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

