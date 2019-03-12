const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';
const searchTaskListType = 'SEARCH_TASKS_LIST';
const initialState = { users: [],filteredTaskList: [],searchText:"",isLoading: false };

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
            filteredTaskList: action.users,
            isLoading: false
        };
    }
    if (action.type=== searchTaskListType)
            return {
                ...state,
                searchText:action.searchText
            };

    return state;
};