import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementWith5, reset } from './CounterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            <button onClick={()=> dispatch(reset())}>reset</button>
            <button onClick={()=> dispatch(incrementWith5())}>increment with 5</button>
        </div>
    );
};

export default CounterView;