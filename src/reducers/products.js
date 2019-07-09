import * as types from './../constants/action_types'

const initialState = [];

const myReducer = (state=initialState, action) => {
    // let {product} = action;
    // if (!product) {return state}
    // let keyIndex = _.findIndex(state, function(o) { return o.id === product.id;});

    switch (action.type) {
        // case (types.LIST_ALL):
        //     return [...state];
        // case (types.ADD_PRODUCT):
        //     product.id = rds.generate();
        //     state.push(product);
        //     localStorage.setItem('products', JSON.stringify(state));
        //     return [...state];
        // case (types.UPDATE_PRODUCT):
        //     console.log(product)
        //     keyIndex = _.findIndex(state, function(o) { return o.id === product.id;});
        //     state[keyIndex].name = product.name;
        //     state[keyIndex].description = product.description;
        //     localStorage.setItem('products', JSON.stringify(state));
        //     return [...state];
        // case (types.DELETE_PRODUCT):
        //     console.log(product)
        //     keyIndex = _.findIndex(state, function(o) { return o.id === product.id;});
        //     state.splice(keyIndex, 1);
        //     localStorage.setItem('products', JSON.stringify(state));
        //     return [...state];
        case (types.FETCHING_DATA_SUCCESS):
            state = action.data;

            return [...state];
        default: return state;
    }
};


export default myReducer;
