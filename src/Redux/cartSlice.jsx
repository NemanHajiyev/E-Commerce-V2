import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    totalQnty: 0,
    totoalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToBaket: (state, action) => {
            const newItem = action.payload;
            const findProduct = state.products.find((item) => item.id === newItem.id)
            if (findProduct) {
                findProduct.quantity++
                findProduct.totalPrice += newItem.price
            }
            else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }
            state.totoalPrice += newItem.price
            state.totalQnty++
        }
    }
})


export const { addToBaket } = cartSlice.actions
export default cartSlice.reducer