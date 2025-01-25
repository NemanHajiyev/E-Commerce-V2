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

        removeBasketItem: (state, action) => {
            const itemId = action.payload.id;
            const itemToRemove = state.products.find((item) => item.id === itemId);

            if (itemToRemove) {
                state.products = state.products.filter((product) => product.id !== itemId);
                state.totalQnty -= itemToRemove.quantity;
                state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
            }
        },

        increment: (state, action) => {
            const itemId = action.payload.id;
            const product = state.products.find((item) => item.id === itemId);
            if (product) {
                product.quantity += 1;
                state.totalQnty += 1;
                state.totalPrice += product.price
            }

        },

        decrement: (state, action) => {
            const itemId = action.payload.id;
            const product = state.products.find((item) => item.id === itemId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
                state.totalQnty -= 1;
                state.totalPrice -= product.price
            }

        },

    },
});

export const { addToBaket, removeBasketItem, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
