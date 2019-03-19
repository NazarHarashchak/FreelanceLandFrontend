import { requests } from '../services/apiService';

const requestProfilePageType = 'REQUEST_PROFILE_PAGE_TYPE';
const receiveProfilePageType = 'RECEIVE_PROFILE_PAGE_TYPE';

export const actionCreators = {
    requestProfilePage: (id) => async (dispatch) => {
        dispatch({ type: requestProfilePageType });
        const User = await requests.doGet('/users/'+id);

        dispatch({ type: receiveProfilePageType, User });
    }
};