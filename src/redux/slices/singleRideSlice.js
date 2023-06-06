import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const singleRide = createAsyncThunk(
 "ride/singleRide",
 async (id, { rejectWithValue }) => {
  try {
   const response = await axios.get(
    `http://127.0.0.1:3000/cars/${id}`,
    {
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
     },
    }
   );

   if (response.status !== 200) {
    throw new Error(response.data.error);
   }

   return { ride: response.data };
  } catch (error) {
   return rejectWithValue({ error: error.response.error });
  }
 }
);

const initialState = {
 loading: false,
 error: null,
 ride: {},
};

const rideSlice = createSlice({
 name: "singleRide",
 initialState: initialState,

 reducers: {},
 extraReducers: {
  [singleRide.pending]: (state) => {
   state.loading = true;
   state.error = null;
  }
  ,
  [singleRide.fulfilled]: (state, { payload }) => {
   state.loading = false;
   state.ride = payload;
  }
  ,
  [singleRide.rejected]: (state, { payload }) => {
   state.loading = false;
   state.error = payload.error;
  }

 }
});

export default rideSlice.reducer;
