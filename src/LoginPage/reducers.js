const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';

const initialState = { user: [], isLoading: false};

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

    return state;
};