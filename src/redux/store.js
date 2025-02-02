import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/userLoginSlice.js'
export const reduxStore=configureStore({
    reducer:{
        userLogin:loginReducer
    }
})