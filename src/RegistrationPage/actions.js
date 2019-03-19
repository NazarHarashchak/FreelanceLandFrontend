import { requests } from '../services/apiService';

const requestRegistration = 'REQUEST_REGISTRATION';
const receiveRegistration = 'RECEIVE_REGISTRATION';

export const actionCreators = {
    requestRegister: (email, username, pass) => async (dispatch) => {
        dispatch({ type: requestRegistration });

        const url = '/account/register';
        const response = await requests.doPost(url,
            JSON.stringify({
                Email: email,
                Login: username,
                Password: pass
            }));

        const user = await response;

        dispatch({ type: receiveRegistration , user});
    }
};

