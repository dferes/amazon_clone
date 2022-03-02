import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/payment' element={<Payment />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
