// store.js
import { createStore } from 'redux';
import cartReducer from './reducer'; //to pass the reducer as argument in createStore

const store = createStore(cartReducer);

export default store;
