/* eslint-disable no-undef */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const SHOW_CARS = 'car-rental/car/SHOW';
const SHOW_CAR = 'car-rental/car/SHOW/:id';
const ADD_CAR = 'car-rental/car/ADD';
const DELETE_CAR = 'car-rental/car/DELETE';

// Base Url
// const BASE_URL = process.env.REACT_APP_BASE_URL;
// Method getCars
export const getCars = createAsyncThunk(SHOW_CARS, async (filter = null, thunkAPI) => {
  const API_URL = filter === true ? `${BASE_URL}/cars?filter=true` : `${BASE_URL}/cars`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.get(API_URL, requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

export const getCar = createAsyncThunk(SHOW_CAR, async (id, thunkAPI) => {
  const API_URL = `${BASE_URL}/cars/${id}`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.get(API_URL, requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// Method AddCar
export const addCar = createAsyncThunk(ADD_CAR, async (car, thunkAPI) => {
  const API_URL = `${BASE_URL}/cars`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.post(API_URL, car, requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// Method Delete Car
export const deleteCar = createAsyncThunk(DELETE_CAR, async (id, thunkAPI) => {
  const API_URL = `${BASE_URL}/cars/${id}`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios.delete(API_URL, requestOptions);
    return id;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// Car Slice
const carSlice = createSlice({
  name: 'car',
  initialState: {
    isLoading: false,
    success: false,
    error: '',
    list: [],
    car: null,
    response: null,
  },
  reducers: {
    resetErrors: (state) => ({
      ...state,
      error: '',
      isLoading: false,
      success: false,
      response: null,
    }),
  },
  extraReducers: (builder) => {
    // Get Cars
    builder.addCase(getCars.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(getCars.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      list: action.payload.data.data.cars,
    }));

    builder.addCase(getCars.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));

    // Get Car
    builder.addCase(getCar.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(getCar.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      car: action.payload.data.data.cars,
    }));

    builder.addCase(getCar.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));

    // Add Car

    builder.addCase(addCar.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(addCar.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      response: action.payload.data.data,
    }));

    builder.addCase(addCar.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      errors: action.payload.data.errors,
    }));

    // Delete Car

    builder.addCase(deleteCar.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(deleteCar.fulfilled, (state, action) => {
      const id = action.payload;

      return {
        ...state,
        isLoading: false,
        success: true,
        id,
        list: state.list.filter((car) => car.id !== id),
      };
    });

    builder.addCase(deleteCar.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.data.error,
    }));
  },
});

export default carSlice.reducer;
export const { resetErrors } = carSlice.actions;
