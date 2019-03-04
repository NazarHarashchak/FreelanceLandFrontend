const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';
const initialState = { users: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestUsersListType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveUsersListType) {
        return {
            ...state,
            users: action.users,
            isLoading: false
        };
    }

    return state;
};