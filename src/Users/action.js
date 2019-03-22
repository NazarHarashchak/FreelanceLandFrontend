import { requests } from '../services/apiService';

const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';
const requestUserRolesList = 'RECEIVE_USERS_ROLES';
const searchUserListType = 'SEARCH_TASKS_LIST';
const setFoundTasksListType = 'SET_FOUND_TASKS_LIST';
const searchTaskListType = 'SEARCH_TASKS_LIST';
const setFoundRolesListType = 'SET_FOUND_ROLES_LIST_TYPE';
const changeRoleStatusType = 'CHANGE_CHECKED_ROLE_TYPE';
const changeRolesOpenedStatusType = 'CHANGE_ROLES_OPENED_STATUS_TYPE';

export const
    requestUsersList = () => async (dispatch) => {
        dispatch({ type: requestUsersListType });

        const users = await  requests.doGet('/users');

        dispatch({ type: receiveUsersListType, users });
    }

export const requestUserRoles = () => async (dispatch) => {
        const roles = await requests.doGet('/users/getRoles');
        
        dispatch({ type: requestUserRolesList, roles });
    }

export const SetFoundRolesList = (roles) => {
        return ({ type: setFoundRolesListType, roles });
    }

export const changeRolesOpenedStatus = () => async (dispatch) => {
        dispatch({ type: changeRolesOpenedStatusType });
    }

export const changeCheckedStatus = (name) => {
        return ({ type: changeRoleStatusType, name });
    }  
export const setFoundRolesList = (foundRolesList) => {
        return ({ type: setFoundRolesListType, foundRolesList });
    } 

export const searchUsersList = (searchText) => {
        return ({ type: searchUserListType, searchText });
    }   

export const setFoundTasksList = (foundTasksList) => {
        return ({ type: setFoundTasksListType, foundTasksList });
    }