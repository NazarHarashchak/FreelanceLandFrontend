import apiService from '../services/apiService'
const requestProfilePage = 'REQUEST_PROFILE_PAGE';
const receiveProfilePage = 'RECEIVE_PROFILE_PAGE';

export const actionCreators = {
    requestProfilePage: (id) => async (dispatch) => {
        dispatch({ type: requestProfilePage });
        const url = '/api/users/'+localStorage.getItem('id');
        const response = await apiService.get(url);
        const User = await response

        dispatch({ type: receiveProfilePage, User });
    }
};