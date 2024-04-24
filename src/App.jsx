import React, { useState } from 'react';
import './App.css';
import NavScrollExample from './Component/Navbar';
import Product from './Component/Product';
import ProductDetail from './Component/ProductDetail';
import Searchitems from './Component/Searchitems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Component/Cart';
import { items } from './Component/data';

const App = () => {
  const [data , setData] =useState([...items])
  const [cart , setCart] = useState([])
  return (
    <>
      <BrowserRouter>
        <NavScrollExample  cart={cart} setdata={setData}/>
        <Routes >
        <Route path='/' element={ <Product cart={cart} setCart={setCart}  items={data}/>}/>
        <Route path='/product/:id' element={ <ProductDetail  cart={cart} setCart={setCart} />}/>
        <Route path='/search/:term' element={ <Searchitems cart={cart} setCart={setCart} />}/>
        <Route path='cart' element={ <Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
