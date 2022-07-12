import { createStore } from "redux";
import counterReducer from "./Redux/Reducers/CounterReducer";
const store = createStore(counterReducer)

export default store;