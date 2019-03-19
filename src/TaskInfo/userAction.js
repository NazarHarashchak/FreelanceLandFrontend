import { requests } from '../services/apiService';

const requestUserType = 'REQUEST_USER_FORECASTS';
const receiveUserType = 'RECEIVE_USER_FORECASTS';

export const actionUserCreators = {
    requestUser: (id) => async (dispatch) => {
        dispatch({ type: requestUserType });
        const users = await requests.doGet('/taskinfo/1,' + id);

        dispatch({ type: receiveUserType, users });
    }
};