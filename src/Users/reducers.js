
const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';
const requestUserRolesList='RECEIVE_USERS_ROLES';
const searchTaskListType = 'SEARCH_TASKS_LIST';
const setFoundRolesListType = 'SET_FOUND_ROLES_LIST_TYPE';
const changeRoleStatusType = 'CHANGE_CHECKED_ROLE_TYPE';
const changeRolesOpenedStatusType = 'CHANGE_ROLES_OPENED_STATUS_TYPE';
const initialState = { newUsers: [],totalPages:1,currentPage:1,filteredRolesList: [],searchText:"",isLoading: true,categLoading:true, roles: [], foundRolesList: [], isRoleOpened: false };

export const reducer = (state, action) => {
    state = state || initialState;
    switch(action.type){
        case requestUsersListType:
            return{
                ...state,
                isLoading: true
            };
        
        case receiveUsersListType:
            return{
                ...state,
                newUsers:action.users.newUsers,
                filteredRolesList: action.users.newUsers,
                totalPages:action.users.totalPages,
                currentPage: action.users.currentPage,
                isLoading: false
            };
        case requestUserRolesList:
            return{
                ...state,
                roles:action.roles.map(item=>{return{...item, isChecked:false}})

            }
        case searchTaskListType:
            return{
                ...state,
                searchText:action.searchText
            }

        case setFoundRolesListType:
            return {
                ...state,
                foundRolesList: action.foundRolesList
            }
         
        case changeRoleStatusType:
            let newRoleList = switchCheckedStatus(state.roles,action.name);
            return {
                ...state,
                roles: newRoleList,
                categLoading:false
            }
            case changeRolesOpenedStatusType:
            return {
                ...state,
                isRoleOpened: !state.isRoleOpened
            };
            default:
                return state;
    }
    
};

function switchCheckedStatus(roles,name) {
    
    const newList = roles.map(item =>
        (item.type === name)?
         {...item, isChecked: !item.isChecked}
        : item
    )
    return newList;
}

