import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRated: false,
};

const ratingSlice = createSlice({
  name: "ratingReducer",
  initialState,
  reducers: {
    setIsRated: (state, { payload }) => {
      state.isRated = payload;
    },
  },
});

export const { setIsRated } = ratingSlice.actions;

export default ratingSlice.reducer;
