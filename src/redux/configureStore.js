import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './slices/registerSlice';
import loginSlice from './slices/loginSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
  }
});

export default store;
