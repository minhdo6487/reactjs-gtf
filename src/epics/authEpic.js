import 'rxjs'; // works for RxJS v6
import * as types from '../constants/action_types';
import { auth } from '../actions';
import { mergeMap, map } from 'rxjs/operators';
import {ofType} from "redux-observable";
import { ajax } from 'rxjs/ajax';

const API_ROOT = 'http://localhost:8000/api/v1_0/';

export const authEpic = (action$) => action$.pipe(
    ofType(types.LOGIN),
    mergeMap((action) =>
            ajax({
                method: "POST",
                url: `${API_ROOT}login/`,
                body: {
                    'username': action.payload.username,
                    'pw': action.payload.password
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .pipe(
                map(response => auth(response.response.data)
            ),
        )
    )
);
