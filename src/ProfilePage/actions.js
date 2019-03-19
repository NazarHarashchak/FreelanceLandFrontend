const requestProfilePage = 'REQUEST_PROFILE_PAGE';
const receiveProfilePage = 'RECEIVE_PROFILE_PAGE';

export const actionCreators = {
    requestProfilePage: (id) => async (dispatch) => {
        dispatch({ type: requestProfilePage });
        const url = 'https://localhost:44332/api/users/'+id;
        const response = await fetch(url);
        const User = await response.json();

        dispatch({ type: receiveProfilePage, User });
    }
};