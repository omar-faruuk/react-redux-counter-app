import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from '../Features/Posts/PostsSlice';


import { counterSlice } from './../Features/Counter/CounterSlice';
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        posts: PostsReducer,
    },
});
export default store;
