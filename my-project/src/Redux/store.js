import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice'; // Adjust the path according to your file structure

// Configure the store with the user reducer
const store = configureStore({
  reducer: {
    user: userReducer, // Attach the user reducer to the store
  },
});

export default store;
