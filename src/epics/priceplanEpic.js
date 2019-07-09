import {of} from 'rxjs'; // works for RxJS v6
import * as types from '../constants/action_types';
import {  getDataSuccess, fetchFailure } from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import {ofType} from "redux-observable";
import agent from '../agent';
import { ajax } from 'rxjs/ajax';

const API_ROOT = 'http://localhost:8000/api/v1_0/';

export const priceplanEpic = (action$) => action$.pipe(
    ofType(types.FETCHING_DATA),
    mergeMap(() => agent.Priceplan.getAllProduct()
            .pipe(map(response => getDataSuccess(response.response.data)),
                catchError(err => of(fetchFailure(err)))
        )
    )
);


export const priceplanSpecEpic = (action$) => action$.pipe(
    ofType('FETCHING_SPECIFIC'),
    mergeMap(action =>
            ajax({
                method: "GET",
                url: `${API_ROOT}priceplan/${action.id}/`,
                body: null
            })
            .pipe(
                map(reponse => ({type: 'FETCHING_SPECIFIC_PRODUCT', product: reponse.response.data})
            ),
        )
    )
);

