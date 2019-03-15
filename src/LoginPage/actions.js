import apiService from '../services/apiService';

const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';


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
        if(user !== null){
            localStorage.setItem('tokenKey', user.access_token);
            localStorage.setItem('id', user.id);
            localStorage.setItem('login', user.login);
            console.log("From storage: " + localStorage.tokenKey +'\r\n' + "Username: " + user.login);
        }
        dispatch({ type: receiveSignIn, user });
        
    }
};