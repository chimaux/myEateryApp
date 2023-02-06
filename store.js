import { configureStore } from '@reduxjs/toolkit'
import reducer from './features/basketSlice'
export const store = configureStore({
  reducer: {
    basket:reducer
  },
})