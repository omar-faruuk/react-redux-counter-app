import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "conter",
    initialState: {count: 0},
    reducers: {
        increment: state => {
            state.count = state.count + 1
        },
        decrement: state => {
            if(state.count <= 0){
                state.count = 0
            }else{
                state.count = state.count - 1
            }
        },
        reset: state => {
            state.count = 0
        },
        incrementWith5: state => {
            state.count = state.count + 5
        }
    }
})
export const {increment, decrement, reset, incrementWith5} = counterSlice.actions;

export default counterSlice.reducer;