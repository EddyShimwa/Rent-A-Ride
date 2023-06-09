import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeFavorite = createAsyncThunk(
 "favorites/removeFavorites",
 async (favoriteData, {
  rejectWithValue
 }) => {
  try {
   const response = await axios.delete(
    `http://127.0.0.1:3000/favorites/${favoriteData.id}`, {
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
     },
    }
   )

   if (response.status !== 200) {
    throw new Error(response.data.error);
   }

   return response.data;
  } catch (error) {
   console.log("Delete error:", error);
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

const removeFavoritesSlice = createSlice({
 name: "removeFavorite",
 initialState: initialState,

 reducers: {},

 extraReducers: (builder) => {
  builder
    .addCase(removeFavorite.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(removeFavorite.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.favorites = state.favorites.filter((favorite) => favorite.id !== payload.favoriteId);
    })
    .addCase(removeFavorite.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    });
}
});

export default removeFavoritesSlice.reducer;
