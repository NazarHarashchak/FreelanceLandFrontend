import ApiService from '../apiService';

const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';
const requestSendComment = 'REQUEST_SEND';
const receiveSendComment = 'RECEIVE_SEND';

let apiService = new ApiService();

export const actionCreators = {
    requestTaskForecasts: (myId) => async (dispatch) => {
        dispatch({ type: requestTaskForecastsType });
        const url = `/api/taskinfo/` + myId;
        const response = await apiService.get(url)
        const forecasts = await response.json();

        dispatch({ type: receiveTaskForecastsType, forecasts });
    }
}

export const actionCommentsCreators = {
    requestComments: (myId) => async (dispatch) => {
        dispatch({ type: requestCommentsListType });
        const url = `/api/comments/` + myId;
        const response = await apiService.get(url)
        const comments = await response.json();

        dispatch({ type: receiveCommentsListType, comments });
    }
}

export const actionCommentsPostCreators = {
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
}