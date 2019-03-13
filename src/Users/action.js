import ApiService from '../services/apiService';

const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';

let apiService = new ApiService();

export const actionCreators = {
    requestUsersList: () => async (dispatch) => {
        dispatch({ type: requestUsersListType });
        
        const url = `/api/users`;
        const users = await apiService.get(url);

        dispatch({ type: receiveUsersListType, users });
    }
};