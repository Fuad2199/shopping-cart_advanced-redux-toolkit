import { configureStore } from '@reduxjs/toolkit'
import productsReducer, { productsFetch } from '../slices/productSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

store.dispatch(productsFetch())