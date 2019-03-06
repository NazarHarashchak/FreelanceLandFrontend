const requestRegistration = 'REQUEST_REGISTRATION';
const receiveRegistration = 'RECEIVE_REGISTRATION';

export const actionCreators = {
    requestRegister: (username, pass) => async (dispatch) => {
        dispatch({ type: requestRegistration });

        const url = 'https://localhost:44331/api/registration';
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
        const registrResponse = await response.json();

        dispatch({ type: receiveRegistration, registrResponse });
    }
};

