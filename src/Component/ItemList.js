import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions';
import { removeItem, increaseQuantity, decreaseQuantity } from '../actions';
import '../mycss.css'

const ItemList = () => {
  const dispatch = useDispatch();

  const items = [
    { id: 1, name: 'Mobile', price: 15000 },
    { id: 2, name: 'Laptop', price: 50000 },
    { id: 3, name: 'Headphones', price: 1500 },
    { id: 4, name: 'Mouse', price: 800 },
    { id: 5, name: 'Charger', price: 500 },
  ];

  const handleAddItem = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  return (
    <div className='div2'>
      <h2>Available Items</h2>
      {items.map((item) => (
        <div key={item.id}>
          <div>{item.name} : {item.price} Rs :
         
          <button onClick={() => handleAddItem(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
