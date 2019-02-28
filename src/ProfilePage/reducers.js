const requestProfilePage = 'REQUEST_PROFILE_PAGE';
const receiveProfilePage = 'RECEIVE_PROFILE_PAGE';

const initialState = { User: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestProfilePage) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveProfilePage) {
        return {
            ...state,
            User: action.User,
            isLoading: false
        };
    }

    return state;
};