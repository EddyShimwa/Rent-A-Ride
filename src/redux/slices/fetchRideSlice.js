import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRide = createAsyncThunk(
 "ride/fetchRide",
 async ( { rejectWithValue }) => {
  try {
   const response = await axios.get(
    "http://127.0.0.1:3000/cars/",
    {
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
     },
    }
   );

   console.log(response.data);

   if (response.status !== 200) {
    throw new Error(response.data.error);
   }

   return { ride: response.data.ride };
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
 name: "fetchRide",
 initialState: initialState,

 reducers: {},
 extraReducers: {
  [fetchRide.pending]: (state) => {
   state.loading = true;
   state.error = null;
  }
  ,
  [fetchRide.fulfilled]: (state, { payload }) => {
   state.loading = false;
   state.success = true;
   state.ride = payload.ride;
  }
  ,
  [fetchRide.rejected]: (state, { payload }) => {
   state.loading = false;
   state.error = payload.error;
  }
 }
});

export default rideSlice.reducer;
