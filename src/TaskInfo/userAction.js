const requestUserType = 'REQUEST_USER_FORECASTS';
const receiveUserType = 'RECEIVE_USER_FORECASTS';

export const actionUserCreators = {
    requestUser: (id) => async (dispatch) => {
        dispatch({ type: requestUserType });
        const url = `https://localhost:44331/api/taskinfo/` + id + `,1` ;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: receiveUserType, users });
    }
};