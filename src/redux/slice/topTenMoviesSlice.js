import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMovies: [],
};

const selectedMoviesSlice = createSlice({
  name: "selectedMoviesReducer",
  initialState,
  reducers: {
    setSelectedMovies: (state, { payload }) => {
      state.selectedMovies = payload;
    },
  },
});

export const { setSelectedMovies } = selectedMoviesSlice.actions;

export default selectedMoviesSlice.reducer;
