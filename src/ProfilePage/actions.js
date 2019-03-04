const requestProfilePage = 'REQUEST_PROFILE_PAGE';
const receiveProfilePage = 'RECEIVE_PROFILE_PAGE';

export const actionCreators = {
    requestProfilePage: () => async (dispatch) => {
        dispatch({ type: requestProfilePage });
        let id=8;
        const url = 'https://localhost:44331/api/users/'+id;
        const response = await fetch(url);
        const User = await response.json();

        dispatch({ type: receiveProfilePage, User });
    }
};