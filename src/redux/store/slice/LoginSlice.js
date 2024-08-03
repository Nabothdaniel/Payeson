import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
      userData: null,
    },
    reducers: {
      loginUser: (state, action) => {
        state.userData = action.payload;
      },
    },
  });
  
  export const { loginUser } = loginSlice.actions;
  export default loginSlice.reducer;