import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/userLoginSlice.js'
import startupReducer from './slices/startupSlice.js'
export const reduxStore=configureStore({
    reducer:{
        userLogin:loginReducer,
        startupDetail:startupReducer
      
    }
})