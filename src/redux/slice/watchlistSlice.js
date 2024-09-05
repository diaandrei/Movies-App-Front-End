import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlistActiveTab: 1,
};

const watchlistReducer = createSlice({
  name: "watchlistReducer",
  initialState,
  reducers: {
    setWatchlistActiveTab: (state, { payload }) => {
      state.watchlistActiveTab = payload;
    },
  },
});

export const { setWatchlistActiveTab } = watchlistReducer.actions;

export default watchlistReducer.reducer;
