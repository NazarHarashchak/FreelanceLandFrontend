const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';

export const actionCreators = {
    requestUsersList: () => async (dispatch) => {
        dispatch({ type: requestUsersListType });

        const url = `https://localhost:44331/api/users`;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: receiveUsersListType, users });
    }
};