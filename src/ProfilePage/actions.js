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
        dispatch({type: requestCreateChatRoom});

        const url = 'https://localhost:44332/api/ChatRoom/CreateChatRoomWithFirstMessage';
        await fetch(url,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    creatorId: creatorId,
                    secondUserId: secondUserId,
                    message: message
                }) 
            }
        )

        dispatch({type: receiveCreateChatRoom});
    }
}
export const addImage = async (image)  => {
    await fetch('https://localhost:44332/api/users/CreateImage',
        { 
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.tokenKey
            },
            method: 'POST',
            body: image
        })
}

export const actionCreators1 = {
    getImage: (id) => async (dispatch) => {
    const url = 'https://localhost:44332/api/users/GetImage/'+id;
    const response = await fetch(url,
    { 
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.tokenKey
        }
    })
    const ImgData = await response.json();
    dispatch({ type: receiveImage, ImgData });
},
    addImage: (image) => async (dispatch)  => {
    await fetch('https://localhost:44332/api/users/CreateImage',
        { 
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.tokenKey
            },
            method: 'POST',
            body: image
        })
        const refresh = true;
        dispatch({ type: refreshImage, refresh });
    }
}
