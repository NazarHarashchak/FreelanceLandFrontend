const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';

const initialState = { comments: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestCommentsListType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveCommentsListType) {
        return {
            ...state,
            comments: action.comments,
            isLoading: false
        };
    }

    return state;
};