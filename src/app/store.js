import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../fretures/posts/postsSlice";
import usersReducer from '../users/userSlice'

export const store=configureStore({
    reducer:{
        posts: postReducer,
        users: usersReducer
    }
})