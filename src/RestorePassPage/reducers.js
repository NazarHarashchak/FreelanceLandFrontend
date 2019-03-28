const requestValidateEmail = 'REQUEST_VALIDATE_EMAIL';
const receiveValidateEmail = 'RECEIVE_VALIDATE_EMAIL';
const requestSendCode = 'REQUEST_SEND_CODE';
const receiveSendCode = 'RECEIVE_SEND_CODE';
const requestChangePass = 'REQUEST_CHANGE_PASS';
const receiveChangePass = 'RECEIVE_CHANGE_PASS';

const initialState = { user: [], code: [], updatedUser: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestValidateEmail) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveValidateEmail) {
        return {
            ...state,
            user: action.user,
            isLoading: false
        };
    }

    if (action.type === requestSendCode) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveSendCode) {
        return {
            ...state,
            code: action.code,
            isLoading: false
        };
    }

    if (action.type === requestChangePass) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveChangePass) {
        return {
            ...state,
            updatedUser: action.updatedUser,
            isLoading: false
        };
    }

    return state;
};