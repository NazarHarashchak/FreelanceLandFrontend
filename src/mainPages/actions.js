import { requests } from '../services/apiService';
import { request } from 'http';

const receiveTop = 'RECEIVE_TOP';
const requestTopType = 'REQUEST_TOP';

export const requestTop = () => async (dispatch) => {

    dispatch({ type: requestTopType });

    const url=`/TopUsers/`;
    const users = await requests.doGet(url);
    dispatch({ type: receiveTop, users});
};