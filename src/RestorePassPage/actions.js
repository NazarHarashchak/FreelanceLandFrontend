import { requests } from '../services/apiService';

const requestValidateEmail = 'REQUEST_VALIDATE_EMAIL';
const receiveValidateEmail = 'RECEIVE_VALIDATE_EMAIL';
const requestSendCode = 'REQUEST_SEND_CODE';
const receiveSendCode = 'RECEIVE_SEND_CODE';
const requestChangePass = 'REQUEST_CHANGE_PASS';
const receiveChangePass = 'RECEIVE_CHANGE_PASS';

export const actionCreators = {
    requestValidate: (login) => async (dispatch) => {
        dispatch({ type: requestValidateEmail });

        const url = '/api/revertpass/validateUser';
        const response = await requests.doPost(url ,
            JSON.stringify({
                Login : login
        }));
        
        const user = await response;
        dispatch({ type: receiveValidateEmail, user });   
    },

    requestSend: (email) => async (dispatch) => {
        dispatch({ type: requestSendCode });

        const response = await requests.doPost('/api/revertpass/sendCode',
            JSON.stringify({
                Email: email
            }));

        const code = await response;
        dispatch({ type: receiveSendCode, code });
    },

    requestChange: (login, pass) => async (dispatch) => {
        dispatch({ type: requestChangePass });

        const response = await requests.doPost('/api/revertpass/changePass',
            JSON.stringify({
                Login: login,
                Password: pass
            }));

        const updatedUser = await response;
        dispatch({ type: receiveChangePass, updatedUser });
    }
};