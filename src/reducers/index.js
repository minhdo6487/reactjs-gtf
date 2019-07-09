import {combineReducers} from 'redux';
import products from './products';
import product from './product';
import auth from './auth';
import errors from './errors';
import display from './display';


const myReducer = combineReducers({
    products,
    product,
    auth,
    errors,
    display
});

export default myReducer;
