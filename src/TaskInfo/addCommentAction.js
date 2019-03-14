import ApiService from '../apiService';

const requestSendComment = 'REQUEST_SEND';
const receiveSendComment = 'RECEIVE_SEND';

let apiService = new ApiService();

export const actionCommentsCreators = {
    sendComment: (my_content, my_userId, my_taskId) => async (dispatch) => {
        dispatch({ type: requestSendComment });

        const url = `/api/comments`;
        const response = await apiService.post(url ,
            JSON.stringify({
                content: my_content,
                userId: my_userId,
                taskId: my_taskId
        }));
        const comment = await response;
        dispatch ({ type: receiveSendComment, comment });
    }
};