import { createSlice } from '@reduxjs/toolkit';
import { notifySuccess, notifyError } from '../React-Toastify/Toastify'

const initialState = {
    products: [],
    favProducts: [],
    searchTerm: '',
    filterProduct: [],
    categoryProduct: []
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
                state.favProducts = [...state.favProducts, newItem];
                notifySuccess()
            }
            else {
                notifyError()
            }
        },

        removeFavorieItem: (state, action) => {
            const favorieFiltered = state.favProducts.filter((product) => product.id !== action.payload.id);
            state.favProducts = favorieFiltered;
        },

        filteredProducts: (state, action) => {
            state.searchTerm = action.payload;
            state.filterProduct = state.products.filter((product) =>
                product.name.toLowerCase().includes(state.searchTerm.toLocaleLowerCase())
            )
        },
        categoryProducts: (state, action) => {
            const filterCategory = state.products.filter((product) => product.category === action.payload)
            state.categoryProduct = filterCategory;
        }
    }
})

export const { setProducts, addToFavorie, removeFavorieItem, filteredProducts, categoryProducts } = productSlice.actions

export default productSlice.reducer