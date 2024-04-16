import React from 'react';
import './App.css';
import { JSX } from 'react/jsx-runtime';
import { Route, Routes } from 'react-router-dom';
import Coctail from './Coctail/Coctail';
import RandomDog from './RandomDog/RandomDog';
import Playground from './Playground/Playground';
import Home from './Home/Home';
import Layout from './Layout/Layout';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element= {<Layout />}>
        <Route path="/coctail" element={<Coctail />} />
        <Route path="/randomdog" element={<RandomDog />} />
        <Route path="/playground" element={<Playground />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
