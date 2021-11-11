import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  new: null,
  original: null,
  trend: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.new = action.payload.new;
      state.original = action.payload.original;
      state.trend = action.payload.trend;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommended;
export const selectNewDisney = (state) => state.movie.new;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trend;

export default movieSlice.reducer;
