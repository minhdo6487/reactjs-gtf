import * as types from './../constants/action_types'

const initialState = {};

const myReducer = (state=initialState, action) => {
    switch (action.type) {
        case (types.FETCHING_DATA_FAILURE):
            state = action.err;
            return {
                ...state
            };
        default: return state;
    }
};


export default myReducer;
