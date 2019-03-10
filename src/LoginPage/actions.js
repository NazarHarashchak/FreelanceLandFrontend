import ApiService from '../services/apiService';

const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';
let apiService = new ApiService();


export const actionCreators = {
    requestLogin: (username, pass) => async (dispatch) => {
        dispatch({ type: requestSignIn});

        const url = '/account/token';
        const response = await apiService.post(url ,
            JSON.stringify({
                Login: username,
                Password: pass
        }));
        
        const user = await response;
        sessionStorage.setItem('tokenKey', user.access_token);
        console.log("From storage: " + sessionStorage.tokenKey +'\r\n' + "Id: " + user.id + "Username: " + user.username);
        dispatch({ type: receiveSignIn, user });
        
    }
};