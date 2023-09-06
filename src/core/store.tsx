import { configureStore } from '@reduxjs/toolkit'
import DCHeroesReducer from './features/DCHeroesSlice';
import MarvelHeroesReducer from './features/MarvelHeroesSlice';

const store = configureStore({
  reducer: {
    DCHeroes: DCHeroesReducer,
    MarvelHeroes: MarvelHeroesReducer,
  }
})

export default store
