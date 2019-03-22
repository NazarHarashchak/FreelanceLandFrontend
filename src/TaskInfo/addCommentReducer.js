const requestSendComment = 'REQUEST_SEND';
const receiveSendComment = 'RECEIVE_SEND';
const initialState = { comment: [], isLoading: false};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestSendComment) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveSendComment) {
        return {
            ...state,
            comment: action.comment,
            isLoading: false
        };
    }

    return state;
};