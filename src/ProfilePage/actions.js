import apiService from '../services/apiService'
const requestProfilePageType = 'REQUEST_PROFILE_PAGE_TYPE';
const receiveProfilePageType = 'RECEIVE_PROFILE_PAGE_TYPE';

export const actionCreators = {
    requestProfilePage: (id) => async (dispatch) => {
        dispatch({ type: requestProfilePageType });
        const url = '/api/users/' + id;
        const response = await apiService.get(url);
        const User = await response

        dispatch({ type: receiveProfilePageType, User });
    }
};