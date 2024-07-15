import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './slices/State'

const Store = configureStore({
  reducer: {
    books:booksSlice
  }
});


export default Store;


