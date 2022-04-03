import { configureStore } from '@reduxjs/toolkit';
import wishListReducer from '../features/wishSlice'
import globalReducer from '../features/globalSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishListReducer,
    global: globalReducer
  },
});
