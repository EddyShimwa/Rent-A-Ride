import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteRideAsync = createAsyncThunk(
  'rides/deleteRide',
  async (rideId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:3000/cars/${rideId}`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error(response.data.error);
      }

      const responseData = response.data;

      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteRidesSlice = createSlice({
  name: 'deleteRides',
  initialState: {
    rides: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteRideAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRideAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteRideAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default deleteRidesSlice.reducer;
