import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './slices/registerSlice';
import loginSlice from './slices/loginSlice';
import rideSlice from './slices/addRideSlice';
import ridesSlice from './slices/fetchRideSlice';
import singleRideSlice from './slices/singleRideSlice';
import favoritesSlice from './slices/fetchFavoriteSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
    ride: rideSlice,
    rides: ridesSlice,
    singleRide: singleRideSlice,
    favorites: favoritesSlice,
  }
});

export default store;
