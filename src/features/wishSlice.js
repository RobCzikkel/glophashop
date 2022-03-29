import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: []
    },
    reducers: {
        addItem(state,action) {
            state.items.push(action.payload)
        },
        removeItem(state,action) {
            state.items = state.items.filter(item => item.name !== action.payload.name)
        }
    }
})

export const { addItem, removeItem } = wishListSlice.actions;
export default wishListSlice.reducer;