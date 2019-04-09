import { requests } from '../services/apiService';
const receiveImage = 'RECEIVE_IMAGE';
const refreshImage = 'REFRESH_IMAGE';
const requestProfilePageType = 'REQUEST_PROFILE_PAGE_TYPE';
const receiveProfilePageType = 'RECEIVE_PROFILE_PAGE_TYPE';
const changeEditStatusType = 'CHANGE_EDIT_STATUS_TYPE';
const receiveCreateChatRoom = 'RECEIVE_CREATE_CHAT_ROOM';
const requestCreateChatRoom = 'RECEIVE_CREATE_CHAT_ROOM';

export const actionCreators = {
    requestProfilePage: (id) => async (dispatch) => {
        dispatch({ type: requestProfilePageType });
        const User = await requests.doGet('/users/' + id);

        dispatch({ type: receiveProfilePageType, User });
    },

    changeEditStatus: () => async (dispatch) => {
        dispatch({ type: changeEditStatusType });
    },

    createChatRoomAndSendMessage: (creatorId, secondUserId, message) => async (dispatch) => {
        dispatch({ type: requestCreateChatRoom });

        const response = await requests.doPost('/api/ChatRoom/CreateChatRoomWithFirstMessage',
            JSON.stringify({
                creatorId: creatorId,
                secondUserId: secondUserId,
                message: message
            })
        );

        dispatch({ type: receiveCreateChatRoom });
    }
}
export const addImage = async (image) => {

    const response = await requests.doPost('/api/users/CreateImage',image);
}

export const actionCreators1 = {
    getImage: (id) => async (dispatch) => {

        const ImgData = await requests.doGet('/users/GetImage/' + id);

        dispatch({ type: receiveImage, ImgData });
    },
    addImage: (image) => async (dispatch) => {
        const response = await requests.doPost('/api/users/CreateImage',image);

        const refresh = true;
        dispatch({ type: refreshImage, refresh });
    }
}
