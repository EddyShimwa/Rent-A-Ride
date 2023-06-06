import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addFavorites = createAsyncThunk(
 "favorites/addFavorites",
 async (data, { rejectWithValue }) => {
  try {
   const response = await axios.post(
    "http://127.0.0.1:3000/favorites", data,
    {
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
     },
    }
   );

   if (response.status !== 201) {
    throw new Error(response.data.error);
   }

   return response.data;
  } catch (error) {
   return rejectWithValue(error.response.data);
  }
 }
);

const initialState = {
 loading: false,
 error: null,
 success: false,
 favorites: [],
}

const addFavoritesSlice = createSlice({
 name: "addFavorites",
 initialState: initialState,

 reducers: {},

 extraReducers: (builder) => {
  builder
   .addCase(addFavorites.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(addFavorites.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.success = true;
    state.favorites = payload.favorites;
   })
   .addCase(addFavorites.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload.error;
   });
 }
});

export default addFavoritesSlice.reducer;


