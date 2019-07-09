import {combineEpics} from 'redux-observable';
import {priceplanSpecEpic, priceplanEpic} from './priceplanEpic';
import {authEpic} from './authEpic';

const rootEpic = combineEpics(
    priceplanEpic,
    priceplanSpecEpic,
    authEpic
);

export default rootEpic;
