import { createSlice } from '@reduxjs/toolkit';

// Define the user slice
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: "",
  },
  reducers: {
    setUserData: (state, action) => {
      state.email = action.payload; // Use action.payload directly
      console.log("Data saved inside the redux");
    },
    removeUserData: (state) => {       
      state.email = ''; // Clear the email state
    },
  },
});

// Export the action creators
export const { setUserData, removeUserData } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
