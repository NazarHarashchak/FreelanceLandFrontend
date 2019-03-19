import ApiService from '../services/apiService';

const requestProfilePage = 'REQUEST_PROFILE_PAGE';
const receiveProfilePage = 'RECEIVE_PROFILE_PAGE';

let apiService = new ApiService();

export const actionCreators = {
    requestProfilePage: (id) => async (dispatch) => {
        dispatch({ type: requestProfilePage });
        const User = await apiService.get('/users/'+id);

        dispatch({ type: receiveProfilePage, User });
    }
};