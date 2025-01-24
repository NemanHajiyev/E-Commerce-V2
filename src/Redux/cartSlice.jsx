import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }
})

export default cartSlice.reducer