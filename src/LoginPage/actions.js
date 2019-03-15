import ApiService from '../services/apiService';

const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';

let apiService = new ApiService();

export const actionCreators = {
    requestLogin: (username, pass) => async (dispatch) => {
        dispatch({ type: requestSignIn});

        const url = '/account/login';
        const response = await apiService.post(url ,
            JSON.stringify({
                Login: username,
                Password: pass
        }));
        
        const user = await response;
        if (user !== null) {
            localStorage.setItem('tokenKey', user.access_token);
            localStorage.setItem('id', user.id);
            localStorage.setItem('login', user.login);
            console.log("From storage: " + sessionStorage.tokenKey +'\r\n' + "Username: " + user.login);
        }
        dispatch({ type: receiveSignIn, user });
        
    }
};