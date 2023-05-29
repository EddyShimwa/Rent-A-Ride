import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
  }
});

export default store;
