import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    favProducts: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;

        },
        addToFavorie: (state, action) => {
            const newItem = action.payload;
            const isAlreadyFavorite = state.favProducts.some(item => item.id === newItem.id);
            if (!isAlreadyFavorite) {
                state.favProducts.push(newItem);
            }
        }
    }
})

export const { setProducts, addToFavorie } = productSlice.actions

export default productSlice.reducer