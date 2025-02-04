import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
});

export default rootReducer;
