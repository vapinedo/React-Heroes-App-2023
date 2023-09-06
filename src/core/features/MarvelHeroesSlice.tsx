import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    error: "",
    isLoading:  false,
};

export const fetchMarvelHeroes = createAsyncThunk("heroes/fetchHeroes", () => {
    return axios
        .get(import.meta.env.VITE_MARVEL_HEROES)
        .then((response) => response.data);
});

const MarvelHeroesSlice = createSlice({
  name: 'marvel_heroes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMarvelHeroes.pending, (state) => {
        state.isLoading = true
    }),
    builder.addCase(fetchMarvelHeroes.fulfilled, (state, action) => {
        state.error = ""
        state.isLoading = false
        state.data = action.payload
    }),
    builder.addCase(fetchMarvelHeroes.rejected, (state, action) => {
        state.isLoading = false
        state.data = {}
        state.error = action.error.message
    })
  },
});

export default MarvelHeroesSlice.reducer