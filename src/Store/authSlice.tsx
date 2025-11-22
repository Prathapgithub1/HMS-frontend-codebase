import { createSlice } from "@reduxjs/toolkit";

interface AuthState{
    token:String |null;
    userId:String | null;
    role:String | null;
    userName:String |null;
    email:String |null;
}

const initialState:AuthState={
    token:null,
    userId:null,
    role:null,
    userName:null,
    email:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.role = action.payload.role;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
        },
        logout:(state)=>{
            state.token=null;
            state.userId=null;
            state.role=null;
            state.userName=null;
            state.email=null;
        }
    }

})

export const {setCredentials,logout}=authSlice.actions;
export default authSlice.reducer;
