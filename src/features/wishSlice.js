import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: []
    },
    reducers: {
        addItem(state,action) {
            let product = action.payload.product
            const item = {id:action.payload.id,...product}
            state.items.push(item)
        },
        removeItem(state,action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const { addItem, removeItem } = wishListSlice.actions;
export default wishListSlice.reducer;