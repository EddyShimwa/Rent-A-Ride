import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './slices/registerSlice';
import loginSlice from './slices/loginSlice';
import rideSlice from './slices/addRideSlice';
import fetchRideSlice from './slices/fetchRideSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
    ride: rideSlice,
    fetchRide: fetchRideSlice,
  }
});

export default store;
