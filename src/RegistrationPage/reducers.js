const requestRegistration = 'REQUEST_REGISTRATION';
const receiveRegistration = 'RECEIVE_REGISTRATION';
const initialState = { user: [], isLoading: false, };

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
            user: action.user,
            isLoading: false
        };
    }

    return state;
};