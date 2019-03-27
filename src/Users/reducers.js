const requestUsersListType = 'REQUEST_USERS_LIST';
const receiveUsersListType = 'RECEIVE_USERS_LIST';
const requestUserRolesList='RECEIVE_USERS_ROLES';
const searchTaskListType = 'SEARCH_TASKS_LIST';
const setFoundRolesListType = 'SET_FOUND_ROLES_LIST_TYPE';
const changeRoleStatusType = 'CHANGE_CHECKED_ROLE_TYPE';
const changeRolesOpenedStatusType = 'CHANGE_ROLES_OPENED_STATUS_TYPE';
const initialState = { newUsers: [],totalPages:"",filteredRolesList: [],searchText:"",isLoading: false, roles: [], foundRolesList: [], isRoleOpened: false };


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
                newUsers:action.newUsers,
                filteredRolesList: action.newUsers,
                foundRolesList:action.roles,
                totalPages:action.totalPages,
                
                isLoading: false
            };
        case requestUserRolesList:
            return{
                ...state,
                roles:action.roles
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
                filteredRolesList: filterUsers(newRoleList,state.newUsers)
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

function cleanChecked(categs) {
    const newList = categs.map(item => {
        return {
          ...item,
          isChecked: false
        };
      });
    return newList;
}

function switchCheckedStatus(roles,name) {
    
    const newList = roles.map(item =>
        (item.type === name)?
         {...item, isChecked: !item.isChecked}
        : item
    )
    return newList;
}

function totalItems(totalPages)
{
    
    return totalPages;
}
function filterUsers(roles, newUsers){
    let checkedRoles=roles.filter(typ =>typ.isChecked === true);
    if(checkedRoles.length !== 0){
        newUsers=newUsers.filter(item => {
            return(
                checkedRoles.some(typ => typ.id === item.userRoleId) ===true
            )
        })
    }
    console.log(newUsers);
    return newUsers;
}