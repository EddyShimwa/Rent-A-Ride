import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
 "user/loginUser",
 async (data, { rejectWithValue }) => {
  try {
   const response = await axios.post(
    "http://127.0.0.1:3000/login/", data,
    {
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
     },
    }
   );

   if (response.status !== 202) {
    throw new Error(response.data.error);
   }

   const token = response.data.jwt;
   localStorage.setItem("token", token);
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
 user: {},
}

const loginSlice = createSlice({
 name: "login",
 initialState: initialState,

 reducers: {},

 extraReducers: {
  [loginUser.pending]: (state) => {
   state.loading = true;
   state.error = null;
  },

  [loginUser.fulfilled]: (state, { payload }) => {
   state.loading = false;
   state.success = true;
   state.user = payload.user;
  },

  [loginUser.rejected]: (state, { payload }) => {
   state.loading = false;
   state.error = payload;
  },
 }
});

export default loginSlice.reducer;

export const selectLoginLoading = (state) => state.login.loading;
export const selectLoginError = (state) => state.login.error;
export const selectLoginSuccess = (state) => state.login.success;
export const selectLoginUser = (state) => state.login.user;
export const selectLoginToken = (state) => state.login.user.jwt;
export const selectLoginUserId = (state) => state.login.user.id;
export const selectLoginUserState = (state) => state.login;


