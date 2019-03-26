import { requests } from '../services/apiService';

const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';
const requestSendComment = 'REQUEST_SEND';
const receiveSendComment = 'RECEIVE_SEND';
const requestExcecutor = 'REQUEST_EXCECUTOR';
const receiveExcecutor = 'RECEIVE_EXCECUTOR';


export const actionCreators = {
    requestTaskForecasts: (myId) => async (dispatch) => {
        dispatch({ type: requestTaskForecastsType });
        const forecasts = await requests.doGet('/taskinfo/' + myId);

        dispatch({ type: receiveTaskForecastsType, forecasts });
    }
}

export const actionCommentsCreators = {
    requestComments: (myId) => async (dispatch) => {
        dispatch({ type: requestCommentsListType });

        const url = `/comments/` + myId;
        const comments = await requests.doGet(url);

        dispatch({ type: receiveCommentsListType, comments });
    }
}

export const actionCommentsPostCreators = {
    sendComment: (my_content, my_userId, my_taskId) => async (dispatch) => {
        dispatch({ type: requestSendComment });

        const url = `/api/comments`;
        const response = await requests.doPost(url ,
            JSON.stringify({
                content: my_content,
                userId: my_userId,
                taskId: my_taskId
        }));

        const comment = await response;

        dispatch ({ type: receiveSendComment, comment });
    }
}

export const addExcecutor = {
    addAnExcecutor: (id, myTaskId) => async (dispatch) => {
        dispatch({type: requestExcecutor});

        const url = `/api/taskinfo/addexcecutor`;
        const response = await requests.doPost(url ,
            JSON.stringify({
                excecutorId: id,
                taskId: myTaskId
        }));
        const user = await response;
        dispatch ({ type: receiveExcecutor, user });
    }
}