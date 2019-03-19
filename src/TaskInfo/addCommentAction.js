import { requests } from '../services/apiService';

const requestSendComment = 'REQUEST_SEND';
const receiveSendComment = 'RECEIVE_SEND';

export const actionCommentsCreators = {
    sendComment: (my_content, my_userId, my_taskId) => async (dispatch) => {
        dispatch({ type: requestSendComment });

        const url = `/comments`;
        const response = await requests.doPost(url ,
            JSON.stringify({
                content: my_content,
                userId: my_userId,
                taskId: my_taskId
        }));
        const comment = await response;
        dispatch ({ type: receiveSendComment, comment });
    }
};