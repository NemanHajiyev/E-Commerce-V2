import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderProducts: [],
        totalPrice: 0,
    },

    reducers: {
        saveOrder: (state, action) => {
            state.orderProducts = action.payload.products;
            state.totalPrice = action.payload.totalPrice;
        }
    }
});

export const { saveOrder } = orderSlice.actions;
export default orderSlice.reducer;
