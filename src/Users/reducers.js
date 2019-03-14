const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';
const requestUserRolesList='RECEIVE_USERS_ROLES';
const searchUserListType = 'SEARCH_TASKS_LIST';
const initialState = { users: [],filteredUserList: [],searchText:"",isLoading: false, roles: [] };

export const reducer = (state, action) => {
    state = state || initialState;
    if (action.type=== searchUserListType)
            return {
                ...state,
                searchText:action.searchText
            };
    switch(action.type){
        case requestUsersListType:
            return{
                ...state,
                isLoading: true
            };
        
        case receiveUsersListType:
            return{
                ...state,
                users:action.users,
                filteredUserList: action.users,

                isLoading: false
            };
        case requestUserRolesList:
            return{
                ...state,
                roles:action.roles
            }
       
            default:
                return state;
    }
    
};