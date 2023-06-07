import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addRide = createAsyncThunk(
 "ride/addRide",
 async (ride, { rejectWithValue }) => {
  try {
   const response = await axios.post(
    "http://127.0.0.1:3000/cars/", ride,
    {
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
     },
    }
   );
   console.log(response.data);

   if (response.status !== 201) {
    throw new Error(response.data.error);
   }

   return { ride: response.data.ride};
  } catch (error) {
   return rejectWithValue({ error: error.response.error });
  }
 }
);

const initialState = {
 loading: false,
 error: null,
 success: false,
 ride: {},
}

const rideSlice = createSlice({
 name: "ride",
 initialState: initialState,

 reducers: {},
 extraReducers: {
  [addRide.pending]: (state) => {
   state.loading = true;
   state.error = null;
  }
  ,
  [addRide.fulfilled]: (state, { payload }) => {
   state.loading = false;
   state.success = true;
   state.ride = payload.ride;
  }
  ,
  [addRide.rejected]: (state, { payload }) => {
   state.loading = false;
   state.error = payload.error;
  }
 }
});

export default rideSlice.reducer;

export const selectRideLoading = (state) => state.ride.loading;
export const selectRideError = (state) => state.ride.error;
export const selectRideSuccess = (state) => state.ride.success;
export const selectRide = (state) => state.ride.ride;
