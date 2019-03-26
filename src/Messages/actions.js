import { requests } from '../services/apiService';

const recieveChatRooms = 'RECEIVE_CHAT_ROOMS_LIST';
const requestChatRooms = 'REQUEST_CHAT_ROOMS_LIST';
const receiveMessages = 'RECEIVE_MESSAGES';
const requestMessages = 'REQUEST_MESSAGES';
const receiveChatRoomInfo = 'RECEIVE_CHAT_ROOM_INFO';
const requestChatRoomInfo = 'REQUEST_CHAT_ROOM_INFO';

export const actionCreators = {
    requestChatRoomsList: (id) => async (dispatch) => {
        dispatch({ type: requestChatRooms });

        const chatRooms = await  requests.doGet('/ChatRoom/GetChatRoomsList/'+id);
        dispatch({ type: recieveChatRooms, chatRooms });
    },
    requestMessages: (id) => async (dispatch) => {
        dispatch({ type: requestMessages });

        const messages = await  requests.doGet('/Message/GetMessages/'+id);
        
        dispatch({ type: receiveMessages, messages });
    },
    requestChatRoomInfo: (id) => async (dispatch) => {
        dispatch({ type: requestChatRoomInfo });

        const chatRoomInfo = await  requests.doGet('/ChatRoom/GetChatRooms/'+id);
        
        dispatch({ type: receiveChatRoomInfo, chatRoomInfo });
    }
};

