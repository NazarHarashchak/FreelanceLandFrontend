const requestProfilePageType = 'REQUEST_PROFILE_PAGE_TYPE';
const receiveProfilePageType = 'RECEIVE_PROFILE_PAGE_TYPE';

const initialState = { User: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestProfilePageType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveProfilePageType) {
        return {
            ...state,
            User: action.User,
            isLoading: false
        };
    }

    return state;
};