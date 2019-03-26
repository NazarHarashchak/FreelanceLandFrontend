const requestImage = 'REQUEST_IMAGE';
const receiveImage = 'RECEIVE_IMAGE';
const refreshImage = 'REFRESH_IMAGE';

const requestProfilePageType = 'REQUEST_PROFILE_PAGE_TYPE';
const receiveProfilePageType = 'RECEIVE_PROFILE_PAGE_TYPE';
const changeEditStatusType ='CHANGE_EDIT_STATUS_TYPE';

const receiveCreateChatRoom = 'RECEIVE_CREATE_CHAT_ROOM';
const requestCreateChatRoom = 'RECEIVE_CREATE_CHAT_ROOM';

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

        case requestImage:
        return {
            ...state,
            isLoading: true
        };

        case receiveImage:
        return {
            ...state,
            image: action.ImgData,
            isLoading: false
        };

        case refreshImage:
        return {
            ...state,
            isLoading: action.refresh
        };

        case requestCreateChatRoom:
        return {
            ...state,
            isLoading: true
        };

        case receiveCreateChatRoom:
        return {
            ...state,
            isLoading: false
        };
        default: return state;
    }
}