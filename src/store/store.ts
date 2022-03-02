import { configureStore } from '@reduxjs/toolkit';
import { basketSlice } from './reducers/basket';


// Centralized file for all reducers, or 'slices' (this includes their get and set functions)
const store = configureStore({
  reducer: {
    basket: basketSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;