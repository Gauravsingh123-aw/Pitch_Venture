import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLoginLifeCycle=createAsyncThunk('user-Login',async (user,thunkApi)=>{
    try{
        // console.log(user)
        const API_URL=import.meta.env.VITE_API_URL;
        let response=await axios.post(`${API_URL}user-api/user_login`,user)
        // console.log(response)
        if(response.data.message==='login successful'){
            //saving the token in sessionstorage
            sessionStorage.setItem('token',response.data.token);
            sessionStorage.setItem('username',response.data.user.username)
        }
        else{
            return thunkApi.rejectWithValue(response.data.message)
        }
        return response.data;
    }
    catch(error){
        if (error.response) {
            // Return only the serializable parts of the error
            return rejectWithValue({
              message: error.message,
              status: error.response.status,
              data: error.response.data
            });
          } else {
            // For other errors, just return the error message
            return rejectWithValue({
              message: error.message
            });
          }
    }
})

const userLoginSlice=createSlice({
    name:'user-login',
    initialState:{currentUser:{},loginStatus:false,errorMessage:'',isPending:false},
    reducers:{
        clearState:(state,action)=>{
            state.currentUser={},
            state.loginStatus=false,
            state.errorMessage='',
            state.isPending=false
        }
    },
    extraReducers:builder=>builder
    .addCase(userLoginLifeCycle.pending,(state,action)=>{
        state.isPending=true;
    })
    .addCase(userLoginLifeCycle.fulfilled,(state,action)=>{
        state.currentUser=action.payload.user;
        state.loginStatus=true;
        state.isPending=false;
        state.errorMessage='';
    })
    .addCase(userLoginLifeCycle.rejected,(state,action)=>{
        state.currentUser={}
        state.loginStatus=false
        state.isPending=false
        state.errorMessage=action.payload
    })

})

//exporting root reducer
export default userLoginSlice.reducer;

//exporting action creator functions
export const {clearState}=userLoginSlice.actions

