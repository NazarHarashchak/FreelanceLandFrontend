const requestProfilePageType = 'REQUEST_PROFILE_PAGE_TYPE';
const receiveProfilePageType = 'RECEIVE_PROFILE_PAGE_TYPE';
const changeEditStatusType ='CHANGE_EDIT_STATUS_TYPE';
const initialState = { User: [], isLoading: false, isEditOpen: 'readonly' };

export const reducer = (state, action) => {
    state = state || initialState;
    switch(action.type){
        case requestProfilePageType:
            return {
                ...state,
                isLoading: true
            };
        
        case receiveProfilePageType:
            return {
                ...state,
                User: action.User,
                isLoading: false
            };
        
        case changeEditStatusType:
            return {
                ...state,
                isEditOpen: !state.isEditOpen
            };

        default: return state;
    }
}