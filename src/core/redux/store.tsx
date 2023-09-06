import { configureStore } from '@reduxjs/toolkit'
import heroReducer from './features/heroSlice';

const store = configureStore({
  reducer: {
    hero: heroReducer,
  }
})

export default store
