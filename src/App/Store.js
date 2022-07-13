import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './../Features/Counter/CounterSlice';
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
});
export default store;
