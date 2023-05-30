import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../constants/axios";

export const loginUser = createAsyncThunk(
 "user/loginUser",
 async (data, { rejectWithValue }) => {
  try {
   const response = await post("auth/login", data);
   return response.data;
  } catch (error) {
   return rejectWithValue(error.response.data);
  }
 }
);
