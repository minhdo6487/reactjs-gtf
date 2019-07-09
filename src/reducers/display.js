import * as types from './../constants/action_types'

const initialState = {
    is_side_bar: false
};

const myReducer = (state=initialState, action) => {
    switch (action.type) {
        case (types.ON_TOGGLE_SIDE_BAR):
            let {is_display} = action;
            state.is_side_bar = !state.is_side_bar;

            if (is_display) {
                state.is_side_bar = is_display;
            }
            return {
                ...state
            };
        default: return state;
    }
};


export default myReducer;
