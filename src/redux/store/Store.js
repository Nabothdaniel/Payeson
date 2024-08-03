// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slice/formSlice';
import loginReducer from './slice/LoginSlice'
import userReducer from './slice/userSlice'

const store = configureStore({
  reducer: {
    form: formReducer,
    login:loginReducer,
    user: userReducer
  },
});

export default store;
