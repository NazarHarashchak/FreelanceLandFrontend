const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';
const requestNotifCount = 'REQUEST_NOTIFICATION_COUNT';
const receiveNotifCount = 'RECEIVE_NOTIFICATION_COUNT';

const initialState = { user: [], isLoading: false, count: 0};

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

    if (action.type === requestNotifCount) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveNotifCount) {
        return {
            ...state,
            count: action.count,
            isLoading: false
        };
    }

    return state;
};