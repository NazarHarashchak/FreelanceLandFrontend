import ApiService from '../services/apiService';

const requestRegistration = 'REQUEST_REGISTRATION';
const receiveRegistration = 'RECEIVE_REGISTRATION';

let apiService = new ApiService();

export const actionCreators = {
    requestRegister: (email, username, pass) => async (dispatch) => {
        dispatch({ type: requestRegistration });

        const url = '/account/register';
        const response = await apiService.post(url,
            JSON.stringify({
                Email: email,
                Login: username,
                Password: pass
            }));

        const user = await response;
      
        console.log("From storage: " + sessionStorage.tokenKey + '\r\n' + "Username: " + user.login);
        dispatch({ type: receiveRegistration });
    }
};

