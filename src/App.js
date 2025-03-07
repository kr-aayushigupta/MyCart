// App.js



import React from 'react';
import ItemList from './Component/ItemList';
import Cart from './Component/Cart';
import './mycss.css'

const App = () => {
  return (
    <div>
      <h1 className='div1'>Shopping Cart App</h1>
      <ItemList />
      <Cart />
    </div>
  );
};

export default App;

