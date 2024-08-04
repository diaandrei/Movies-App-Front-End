import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [''],
};

const initialState = {
  count: null,
  countInvitations: null,
};

export const mainSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    count: (state, actions) => {
      state.count = actions.payload;
    },
    countInvitations: (state, actions) => {
      state.countInvitations = actions.payload;
    },
  },
});

export const {count, countInvitations} = mainSlice.actions;

export const mainReducer = persistReducer(persistConfig, mainSlice.reducer);
