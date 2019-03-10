const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';

export const actionCreators = {
    requestLogin: (username, pass) => async (dispatch) => {
        dispatch({ type: requestSignIn});
        const url = 'https://localhost:44331/account/token';
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
        })
        
        const user = await response.json();
        sessionStorage.setItem('tokenKey', user.access_token);
        console.log("From storage: " + sessionStorage.tokenKey);
        dispatch({ type: receiveSignIn, user });
    }
};