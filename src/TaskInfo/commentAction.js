const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';

export const actionCommentsCreators = {
    requestComments: (myId) => async (dispatch) => {
        dispatch({ type: requestCommentsListType });
        const url = `https://localhost:44331/api/comments/` + myId;
        const response = await fetch(url);
        const comments = await response.json();

        dispatch({ type: receiveCommentsListType, comments });
    }
};