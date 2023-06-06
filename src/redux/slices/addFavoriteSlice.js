import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addFavorite = createAsyncThunk(
 "favorites/addFavorites",
 async (favoriteData, { rejectWithValue }) => {
  try {
   const response = await axios.post(
    "http://127.0.0.1:3000/favorites/", favoriteData,
    {
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
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
 name: "addFavorite",
 initialState: initialState,

 reducers: {},

 extraReducers: (builder) => {
  builder
   .addCase(addFavorite.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(addFavorite.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.success = true;
    state.favorites = payload.favorites;
   })
   .addCase(addFavorite.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload.error;
   });
 }
});

export default addFavoritesSlice.reducer;


