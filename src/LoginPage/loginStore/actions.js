const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';
const requestRegistration = 'REQUEST_REGISTRATION';
const receiveRegistration = 'RECEIVE_REGISTRATION';

export const actionCreators = {
    requestLogin: (username, pass) => async (dispatch) => {
        dispatch({ type: requestSignIn});

        const url = 'https://localhost:44331/api/login';
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Login: username,
                Password: pass
            })
        });
        const user = await response.json();

        dispatch({ type: receiveSignIn, user });
    },

    requestRegister: (username, pass) => async (dispatch) => {
        dispatch({ type: requestRegistration });
        
        const url = 'https://localhost:44331/api/registration';
        const response = await fetch(url, {
            method: 'POST',
            data: {
                Login: username,
                Password: pass
            }
        });
        const registrResponse = await response.json();

        dispatch({ type: receiveRegistration, registrResponse });
    }
};