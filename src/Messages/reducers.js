const receiveMessages = 'RECEIVE_MESSAGES';
const requestMessages = 'REQUEST_MESSAGES';
const recieveChatRooms = 'RECEIVE_CHAT_ROOMS_LIST';
const requestChatRooms = 'REQUEST_CHAT_ROOMS_LIST';
const receiveChatRoomInfo = 'RECEIVE_CHAT_ROOM_INFO';
const requestChatRoomInfo = 'REQUEST_CHAT_ROOM_INFO';

const initialState = { isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestChatRooms) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === recieveChatRooms) {

        return {
            ...state,
            chatRooms: action.chatRooms,
            isLoading: false
        };
    }

    if (action.type === requestMessages) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveMessages) {
        return {
            ...state,
            messages: action.messages,
            isLoading: false
        };
    }

    if (action.type === requestChatRoomInfo) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveChatRoomInfo) {
        return {
            ...state,
            chatRoomInfo: action.chatRoomInfo,
            isLoading: false
        };
    }

    return state;
};