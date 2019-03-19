import ApiService from '../services/apiService';

const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';

let apiService = new ApiService();

export const actionCommentsCreators = {
    requestComments: (myId) => async (dispatch) => {
        dispatch({ type: requestCommentsListType });
        const comments = await apiService.get('/comments/' + myId);

        dispatch({ type: receiveCommentsListType, comments });
    }
};