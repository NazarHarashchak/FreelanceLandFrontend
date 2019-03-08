const requestRegistration = 'REQUEST_REGISTRATION';
const receiveRegistration = 'RECEIVE_REGISTRATION';

export const actionCreators = {
    requestRegister: (email, username, pass) => async (dispatch) => {
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
                Email: email,
                Login: username,
                Password: pass
            })
        });
        const user = await response.json();

        dispatch({ type: receiveRegistration, user });
    }
};

