import { INCREMENT, DECREMENT, RESET } from "../Constant"

const initialState = {
    count: 0,
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            if (state.count <= 0) {
                return {...state, count:0};
            } else {
                return {
                    ...state,
                    count: state.count - 1
                }
            }


        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}
export default counterReducer;