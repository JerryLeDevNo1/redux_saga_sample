import * as types from "../types";

const initialState = {
    number: 0,
};

function CounterReducers(state = initialState, action = {}) {
    const {type, payload} = action;

    switch (type) {
        case types.PLUS:
            return {
                ...state,
                number: state.number + payload,
            };

        case types.MINUS:
            return {
                ...state,
                number: state.number - payload,
            };
        
        default:
            return state;
    };

};

export default CounterReducers;
