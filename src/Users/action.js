const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';
const requestUserRolesList = 'RECEIVE_USERS_ROLES';
const setFoundUserRole = 'SET_FOUND_TASKS_LIST';
const searchUserListType = 'SEARCH_TASKS_LIST';
const setFoundTasksListType = 'SET_FOUND_TASKS_LIST';


export const requestUsersList = () => async (dispatch) => {
    dispatch({ type: requestUsersListType });

    const url = `https://localhost:44331/api/users`;
    const response = await fetch(url);
    const users = await  response.json();

    dispatch({ type: receiveUsersListType, users });
}

export const requestUserRoles = () => async(dispatch) => {

    const url = `https://localhost:44331/api/UserRole`;
    const response = await fetch(url);
    const roles = await response.json();

    dispatch({ type: requestUserRolesList, roles });
}

export const SetFoundRolesList = (roles) => {
    return ({ type: setFoundUserRole, roles });
}
       

export const searchUsersList = (searchText) => {
    return ({ type: searchUserListType, searchText });
}   

export const setFoundTasksList = (foundTasksList) => {
    return ({ type: setFoundTasksListType, foundTasksList });
} 
