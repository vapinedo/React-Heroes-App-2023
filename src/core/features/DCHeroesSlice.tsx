import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    error: "",
    isLoading:  false,
};

export const fetchDCHeroes = createAsyncThunk("heroes/fetchHeroes", () => {
    return axios
        .get(import.meta.env.VITE_DC_HEROES)
        .then((response) => response.data);
});

const DCHeroesSlice = createSlice({
  name: 'dc_heroes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDCHeroes.pending, (state) => {
        state.isLoading = true
    }),
    builder.addCase(fetchDCHeroes.fulfilled, (state, action) => {
        state.error = ""
        state.isLoading = false
        state.data = action.payload
    }),
    builder.addCase(fetchDCHeroes.rejected, (state, action) => {
        state.isLoading = false
        state.data = {}
        state.error = action.error.message
    })
  },
});

export default DCHeroesSlice.reducer