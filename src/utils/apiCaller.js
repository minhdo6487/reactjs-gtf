import axious from 'axios';
import {API_URL} from './../constants/Config';


export default function callApi(endpoint, method, body){
    return axious({
            method: method,
            url: `${API_URL}/${endpoint}`,
            data: body
        }).catch(err => {
            console.log(err)
        });
}
