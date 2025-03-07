import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity,clearCart } from '../actions';
import '../mycss.css'
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='div1'>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              
              <div>
               <span>{item.name}</span>
               <span> - ${item.price}</span>
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                <span>-----</span>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
             
            </li>
          ))}
        </ul>
      )}
      <div>

        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
