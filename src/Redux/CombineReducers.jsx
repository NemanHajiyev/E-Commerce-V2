import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
});

export default rootReducer;
