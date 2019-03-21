const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';
const requestDeleteComment = 'REQUEST_DELETE_COMMENT';
const receiveDeleteComment = 'RECEIVE_DELETE_COMMENT';


const initialState = { comments: [], deleteCommentResponse: [], isLoading: false };

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

    if (action.type === requestDeleteComment) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveDeleteComment) {
        return {
            ...state,
            deleteCommentResponse: action.deleteCommentResponse,
            isLoading: false
        };
    }

    return state;
};