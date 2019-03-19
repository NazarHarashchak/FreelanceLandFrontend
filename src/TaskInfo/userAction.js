import ApiService from '../services/apiService';

const requestUserType = 'REQUEST_USER_FORECASTS';
const receiveUserType = 'RECEIVE_USER_FORECASTS';

let apiService = new ApiService();

export const actionUserCreators = {
    requestUser: (id) => async (dispatch) => {
        dispatch({ type: requestUserType });
        const users = await apiService.get('/taskinfo/1,' + id);

        dispatch({ type: receiveUserType, users });
    }
};