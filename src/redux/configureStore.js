import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './slices/registerSlice';
import loginSlice from './slices/loginSlice';
import rideSlice from './slices/addRideSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
    ride: rideSlice,
  }
});

export default store;
