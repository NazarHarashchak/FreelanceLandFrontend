import { requests } from '../services/apiService';

const requestProfilePage = 'REQUEST_PROFILE_PAGE';
const receiveProfilePage = 'RECEIVE_PROFILE_PAGE';

export const actionCreators = {
    requestProfilePage: (id) => async (dispatch) => {
        dispatch({ type: requestProfilePage });
        const User = await requests.doGet('/users/'+id);

        dispatch({ type: receiveProfilePage, User });
    }
};