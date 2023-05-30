import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
 "user/loginUser",
 async (data, { rejectWithValue }) => {
  try {
   console.log('user:', data);

   const response = await axios.post(
    "http://127.0.0.1:3000/login/",

    {
     data: {
      email: data.email,
      password: data.password,
     },
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
     },
    }
   );

   console.log("response from loginUser slice:", response);

   if (response.status !== 202) {
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
 user: {},
}

const loginSlice = createSlice({
 name: "login",
 initialState: initialState,

 reducers: {
  resetLogin: (state) => {
   state.loading = false;
   state.error = null;
   state.success = false;
  }
 },

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

export const { resetLogin } = loginSlice.actions;
export default loginSlice.reducer;

export const selectLoginLoading = (state) => state.login.loading;
export const selectLoginError = (state) => state.login.error;
export const selectLoginSuccess = (state) => state.login.success;
export const selectLoginUser = (state) => state.login.user;
export const selectLoginToken = (state) => state.login.user.jwt;
export const selectLoginUserId = (state) => state.login.user.id;
export const selectLoginUserState = (state) => state.login;


