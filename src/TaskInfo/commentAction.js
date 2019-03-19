import ApiService from '../apiService';

const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';
const requestDeleteComment = 'REQUEST_DELETE_COMMENT';
const receiveDeleteComment = 'RECEIVE_DELETE_COMMENT';

let apiService = new ApiService();

export const actionCommentsCreators = {
    requestComments: (myId) => async (dispatch) => {
        dispatch({ type: requestCommentsListType });
        const url = `https://localhost:44331/api/comments/` + myId;
        const response = await fetch(url);
        const comments = await response.json();

        dispatch({ type: receiveCommentsListType, comments });
    },

    requestDelete: (Id) => async (dispatch) => {
        dispatch({ type: requestDeleteComment });
        const path = '/api/taskinfo/DeleteTask';
        const response = await apiService.post(path,
            JSON.stringify({
                id: Id
            }));

        const deleteCommentResponse = await response.json();
        console.log(deleteCommentResponse);

        dispatch({ type: receiveDeleteComment, deleteCommentResponse })

    }
};