const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';
const searchUserListType = 'SEARCH_TASKS_LIST';
const setFoundTasksListType = 'SET_FOUND_TASKS_LIST';


export const actionCreators = {
    requestUsersList: () => async (dispatch) => {
        dispatch({ type: requestUsersListType });

        const url = `https://localhost:44331/api/users`;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: receiveUsersListType, users });
    }
    
};

export const searchUsersList = (searchText) => {
    return ({ type: searchUserListType, searchText });
}   

export const setFoundTasksList = (foundTasksList) => {
    return ({ type: setFoundTasksListType, foundTasksList });
} 