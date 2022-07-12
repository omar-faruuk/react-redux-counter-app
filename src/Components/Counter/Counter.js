import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../../Redux/Actions/CounterAction';
import { resetCounter } from './../../Redux/Actions/CounterAction';


const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleIncrement=()=>{
        dispatch(incrementCounter())
    }
    const handleDecrement=()=>{
        dispatch(decrementCounter())
    }
    const handleReset=()=>{
        dispatch(resetCounter())
    }
    return (
        <div>
            <h2>counter app</h2>
            <h2>count: {count}</h2>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Counter;