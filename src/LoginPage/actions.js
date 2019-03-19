import { requests } from '../services/apiService';

const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';

export const actionCreators = {
    requestLogin: (username, pass) => async (dispatch) => {
        dispatch({ type: requestSignIn});

        const url = '/account/login';
        const response = await requests.doPost(url ,
            JSON.stringify({
                Login: username,
                Password: pass
        }));
        
        const user = await response;
        if (user !== null) {
            localStorage.setItem('tokenKey', user.access_token);
            localStorage.setItem('id', user.id);
            localStorage.setItem('login', user.login);
            localStorage.setItem('role', user.role);
            console.log("From storage: " + localStorage.tokenKey + '\r\n' + "Username: " + user.login + '\r\n' + "Role: " + user.role);
        }
        dispatch({ type: receiveSignIn, user });
        
    }
};