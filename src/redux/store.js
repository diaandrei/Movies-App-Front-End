import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { emptySplitApi } from "./slice/emptySplitApi";
import ratingSlice from "./slice/ratingSlice";
import selectedMoviesSlice from "./slice/topTenMoviesSlice";

export const store = configureStore({
  reducer: {
    ratingReducer: ratingSlice,
    topTenMoviesReducer: selectedMoviesSlice,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(emptySplitApi.middleware),
});

export const persistor = persistStore(store);
