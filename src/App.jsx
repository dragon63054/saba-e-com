import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './pages/registration';
import MainPage from './pages/main_page';
import ProductDetails from './pages/product_view';
import CartPage from './pages/addtocart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path='/dashboard' element={<MainPage />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/addtocart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
