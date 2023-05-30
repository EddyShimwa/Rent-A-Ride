import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './slices/registerSlice';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    // login: loginSlice,
    register: registerSlice,
  }
});

export default store;
