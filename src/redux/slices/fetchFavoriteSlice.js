import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFavorites = createAsyncThunk(
 "favorites/fetchFavorites",
 async (_, { rejectWithValue }) => {
   try {
    const response = await axios.get("http://127.0.0.1:3000/favorites/", {
     headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
     },
    });

    console.log(response.data);

    if (response.status !== 200) {
     throw new Error(response.data.error);
    }

    return { favorites: response.data };
   } catch (error) {
    return rejectWithValue({ error: error.response.error });
   }
 }
);

const initialState = {
 loading: false,
 error: null,
 favorites: [],
};

const favoritesSlice = createSlice({
 name: "favorites",
 initialState: initialState,

 reducers: {},

 extraReducers: (builder) => {
  builder
   .addCase(fetchFavorites.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(fetchFavorites.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.favorites = payload.favorites;
   })
   .addCase(fetchFavorites.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload.error;
   });
 }

});

export default favoritesSlice.reducer;

export const selectFavoritesLoading = (state) => state.favorites.loading;
export const selectFavoritesError = (state) => state.favorites.error;
export const selectFavorites = (state) => state.favorites.favorites;
