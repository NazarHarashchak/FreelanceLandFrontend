const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';

export const actionCreators = {
    requestUsersList: () => async (dispatch) => {
        dispatch({ type: requestUsersListType });
        console.log("acc" + sessionStorage.tokenKey);
        const url = `https://localhost:44331/api/users`;
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.tokenKey
            }
        });
        const users = await response.json();

        dispatch({ type: receiveUsersListType, users });
    }
};