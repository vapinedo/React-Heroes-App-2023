import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "dc_heroes": [
        {
            "name": "Batman",
            "image": "batman.png",
            "price": 10
        },
        {
            "name": "Catwoman",
            "image": "catwoman.png",
            "price": 5
        },
        {
            "name": "Superman",
            "image": "superman.png",
            "price": 20
        },
        {
            "name": "Wonder Woman",
            "image": "wonderwoman.png",
            "price": 17
        },
        {
            "name": "Robin",
            "image": "robin.png",
            "price": 10
        }
    ],
    "marvel_heroes": [
        {
            "name": "Black Panther",
            "image": "black-panther.png",
            "price": 22
        },
        {
            "name": "Captain America",
            "image": "captain-america.png",
            "price": 25
        },
        {
            "name": "Thor",
            "image": "thor.png",
            "price": 28
        },
        {
            "name": "Ironman",
            "image": "ironman.png",
            "price": 35
        },
        {
            "name": "Hulk",
            "image": "hulk.png",
            "price": 25
        }
    ]
};

const heroSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    getAll: state => {
      state
    }
  }
})

export default heroSlice.reducer
export const { getAll } = heroSlice.actions
