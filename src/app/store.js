import { configureStore } from '@reduxjs/toolkit';
import wishListReducer from '../features/wishSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishListReducer
  },
});
