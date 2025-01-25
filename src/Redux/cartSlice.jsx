import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalQnty: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToBaket: (state, action) => {
            const newItem = action.payload;
            const findProduct = state.products.find((item) => item.id === newItem.id);

            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                state.products = [...state.products, newItem]
            }
            state.totalQnty += 1;
            state.totalPrice += newItem.price;
        },
    },
});

export const { addToBaket } = cartSlice.actions;
export default cartSlice.reducer;
