import { requests } from '../services/apiService';

const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';

export const actionCommentsCreators = {
    requestComments: (myId) => async (dispatch) => {
        dispatch({ type: requestCommentsListType });
        const comments = await requests.doGet('/comments/' + myId);

        dispatch({ type: receiveCommentsListType, comments });
    }
};