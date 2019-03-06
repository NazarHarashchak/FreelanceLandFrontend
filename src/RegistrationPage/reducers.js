const requestRegistration = 'REQUEST_REGISTRATION';
const receiveRegistration = 'RECEIVE_REGISTRATION';
const initialState = { registrResponse: [], isLoading: false, };

export const reducer = (state, action) => {
    state = state || initialState;

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