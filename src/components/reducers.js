const requestGetNotif = 'REQUEST_GET_NOTIF';
const receiveGetNotif = 'RECEIVE_GET_NOTIF';
const requestHideNotif = 'REQUEST_HIDE_NOTIF';
const receiveHideNotif = 'RECEIVE_HIDE_NOTIF';
const requestDeleteNotif = 'REQUEST_DELETE_NOTIF';
const receiveDeleteNotif = 'RECEIVE_DELETE_NOTIF';

const initialState = { notif: [], isLoading: false, deleteNotif: []};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestGetNotif) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveGetNotif) {
        return {
            ...state,
            notif: action.notif,
            isLoading: false
        };
    }

    if (action.type === requestHideNotif) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveHideNotif) {
        return {
            ...state,
            deleteNotif: action.deleteNotif,
            isLoading: false
        };
    }

    if (action.type === requestDeleteNotif) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveDeleteNotif) {
        return {
            ...state,
            notif: action.response,
            isLoading: false
        };
    }

    return state;
};