import React from 'react';
import './App.css';
import { JSX } from 'react/jsx-runtime';
import { Routes, Route } from 'react-router-dom';
import Activity from './components/Activity/Activity';
import Counter from './components/Counter/Counter';
import Coctail from './components/Coctail/Coctail';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ProductPage from './components/ProductPage/ProductPage';


function App(): JSX.Element {
  return (
    // path="/" - можно написать что хотим 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} /> 
        <Route path="/activity" element={<Activity />} />
        <Route path="/coctail" element={<Coctail />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/products/:productId" element={<ProductPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;
