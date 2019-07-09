import {createStore, applyMiddleware, compose} from 'redux';
import { createEpicMiddleware } from 'redux-observable'
import myReducer from './reducers/index'

import rootEpics from './epics/index';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
    myReducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(rootEpics);
// store.dispatch({type: 'FETCHING_DATA'});

export default store;
