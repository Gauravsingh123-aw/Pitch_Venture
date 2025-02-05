import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const startupLifecycle=createAsyncThunk('startup-detail',async(data,thunkApi)=>{
    try{
        const API_URL=import.meta.env.VITE_API_URL;
        let response=await axios.post(`${API_URL}startup-api/get_startupdata`,{data});
        console.log(res,res.data);
        if(res.data.message==="startup data found"){
            
        }
        else{
            return thunkApi.rejectWithValue(response.data.message);
        }
        return res.data;
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



const startupSlice=createSlice({
    name:"startup-detail",
    initialState:{detail:{}},
    reducers:{
        
    },
    extraReducers:builder=>builder
    .addCase(startupLifecycle.pending,(state,action)=>{
        state.detail={};
    })
    .addCase(startupLifecycle.fulfilled,(state,action)=>{
        state.detail=action.payload;
    })
    .addCase(startupLifecycle.rejected,(state,action)=>{
        state.detail={};
    })
    
})

export default startupSlice.reducer

