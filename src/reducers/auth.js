import * as types from './../constants/action_types'

const initialState = {};

const myReducer = (state=initialState, action) => {
    switch (action.type) {
        case (types.AUTHENTICATION):
            state = action.payload;
            localStorage.setItem('jwt', action.payload.token);
            return {
                isProgress: true
            };
        default: return state;
    }
};


export default myReducer;
