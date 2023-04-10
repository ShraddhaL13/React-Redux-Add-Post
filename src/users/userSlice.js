import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0',name:'Shraddha'},
    {id:'1', name:'Luccky'},
    {id :'2', name:'Aayush'}
]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users; 

export default userSlice.reducer 