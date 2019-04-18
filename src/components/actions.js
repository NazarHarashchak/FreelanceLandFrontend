import { requests } from '../services/apiService';

const requestGetNotif = 'REQUEST_GET_NOTIF';
const receiveGetNotif = 'RECEIVE_GET_NOTIF';
const requestHideNotif = 'REQUEST_HIDE_NOTIF';
const receiveHideNotif = 'RECEIVE_HIDE_NOTIF';
const requestDeleteNotif = 'REQUEST_DELETE_NOTIF';
const receiveDeleteNotif = 'RECEIVE_DELETE_NOTIF';

export const actionCreators = {
    requestGetNotifications: (id) => async (dispatch) => {
        dispatch({ type: requestGetNotif});

        const url = '/notification/getNotifications';
        const response = await requests.doPost(url ,
            JSON.stringify({
                Id: id
        }));
        
        const notif = await response;

        dispatch({ type: receiveGetNotif, notif });        
    },

    requestHide: (id) => async (dispatch) => {
        dispatch({ type: requestHideNotif });

        const url = '/notification/deleteNotifications';
        const response = await requests.doPost(url,
            JSON.stringify({
                Id: id
            }));

        const deleteNotif = await response;

        dispatch({ type: receiveHideNotif, deleteNotif });
    },

    requestDelete: (id) => async (dispatch) => {
        dispatch({ type: requestDeleteNotif });

        const url = '/notification/deleteNotification';
        const response = await requests.doPost(url,
            JSON.stringify({
                Id: id
            }));

        dispatch({ type: receiveDeleteNotif, response });
    }
};