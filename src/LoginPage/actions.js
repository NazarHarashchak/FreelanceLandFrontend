import { requests } from '../services/apiService';

const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';
const requestNotifCount = 'REQUEST_NOTIFICATION_COUNT';
const receiveNotifCount = 'RECEIVE_NOTIFICATION_COUNT';

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
            sessionStorage.setItem('tokenKey', user.access_token);
            sessionStorage.setItem('id', user.id);
            sessionStorage.setItem('login', user.login);
            sessionStorage.setItem('role', user.role);
        }
        dispatch({ type: receiveSignIn, user });
        
    },

    requestNotificationsCount: (id) => async (dispatch) => {
        dispatch({ type: requestNotifCount });

        const url = '/notification/getCount';
        const response = await requests.doPost(url,
            JSON.stringify({
                Id: id
            }));

        const count = await response;
        if (count !== null) {
            sessionStorage.setItem('count', count);
        }
        dispatch({ type: receiveNotifCount, count });
    }
};