import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
 "user/registerUser",
 async (user, { rejectWithValue }) => {
  try {
   const response = await axios.post(
    "http://127.0.0.1:3000/users",
    {
      user,
      headers: {
       "Content-Type": "application/json",
       "Accept": "application/json",
      },
    }
   );
   console.log(response.data.jwt);

   if (response.status !== 201) {
    throw new Error(response.data.error);
   }

   const token = response.data.jwt;
   localStorage.setItem("token", token);

   return { user: response.data.user, jwt: token };
  } catch (error) {
   return rejectWithValue(error.response.error);
  }
 }
);

const initialState = {
 loading: false,
 error: null,
 success: false,
 user: {},
}

const registerSlice = createSlice({
 name: "register",
 initialState: initialState,

 reducers: {},

 extraReducers: {
  [registerUser.pending]: (state) => {
   state.loading = true;
   state.error = null;
  }
  ,
  [registerUser.fulfilled]: (state, { payload }) => {
   state.loading = false;
   state.success = true;
   state.user = payload.user;
  }
  ,
  [registerUser.rejected]: (state, { payload }) => {
   state.loading = false;
   state.error = payload;
  }
 }
});

export default registerSlice.reducer;

export const selectRegisterLoading = (state) => state.register.loading;
export const selectRegisterError = (state) => state.register.error;
export const selectRegisterSuccess = (state) => state.register.success;
export const selectRegisterUser = (state) => state.register.user;
export const selectRegisterUserState = (state) => state.register;
