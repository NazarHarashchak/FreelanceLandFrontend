import { requests } from '../services/apiService';

const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';
const requestDeleteComment = 'REQUEST_DELETE_COMMENT';
const receiveDeleteComment = 'RECEIVE_DELETE_COMMENT';

export const actionCommentsCreators = {
    requestComments: (myId) => async (dispatch) => {
        dispatch({ type: requestCommentsListType });
        const comments = await requests.doGet('/comments/' + myId);

        dispatch({ type: receiveCommentsListType, comments });
    },

    requestDelete: (id) => async (dispatch) => {
        dispatch({ type: requestDeleteComment });
        const path = '/api/comments/DeleteComment';
        const response = await requests.doPost(path,
            JSON.stringify({
                Id: id
            }));

        const deleteCommentResponse = await response.json();
        console.log(deleteCommentResponse);

        dispatch({ type: receiveDeleteComment, deleteCommentResponse })

    }
};