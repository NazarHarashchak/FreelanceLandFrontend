const requestExcecutor = 'REQUEST_EXCECUTOR';
const receiveExcecutor = 'RECEIVE_EXCECUTOR';

const initialState = { user: [], isLoading: false};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestExcecutor) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveExcecutor) {
        return {
            ...state,
            user: action.user,
            isLoading: false
        };
    }

    return state;
};