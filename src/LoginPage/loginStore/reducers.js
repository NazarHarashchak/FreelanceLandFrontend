const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';
const initialState = { user: [], isLoading: false, registrResponse: [] };
const requestRegistration = 'REQUEST_REGISTRATION';
const receiveRegistration = 'RECEIVE_REGISTRATION';

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestSignIn) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveSignIn) {
        return {
            ...state,
            user: action.user,
            isLoading: false
        };
    }

    if (action.type === requestRegistration) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveRegistration) {
        return {
            ...state,
            registrResponse: action.registrResponse,
            isLoading: false
        };
    }

    return state;
};