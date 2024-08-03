// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    userData: null,
  },
  reducers: {
    submitForm: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
