import { requests } from '../services/apiService';

const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const requestCommentsListType = 'REQUEST_COMMENTS';
const receiveCommentsListType = 'RECEIVE_COMMENTS';
const requestSendComment = 'REQUEST_SEND';
const receiveSendComment = 'RECEIVE_SEND';
const requestExcecutor = 'REQUEST_EXCECUTOR';
const receiveExcecutor = 'RECEIVE_EXCECUTOR';
const requestDeleteComment = 'REQUEST_DELETE_COMMENT';
const receiveDeleteComment = 'RECEIVE_DELETE_COMMENT';
const requestCategoriesTask = 'REQUEST_CATEGORIES_TASK';
const receiveCategoriesTask = 'RECEIVE_CATEGORIES_TASK';
const requestTask = 'REQUEST_TASK';
const receiveTask = 'RECEIVE_TASK';
const receiveImage = 'RECEIVE_IMAGE';

export const  requestTaskForecasts = (myId) => async (dispatch) => {
        dispatch({ type: requestTaskForecastsType });
        const forecasts = await requests.doGet('/taskinfo/' + myId);
        dispatch({ type: receiveTaskForecastsType, forecasts });
    }

export const getTaskInformation = {
        editMyTask: (task_id, my_title, my_description, my_price, my_category) => 
        async (dispatch) => {

            dispatch({ type: requestTask });

            const url = `/api/taskinfo/edittask`;
            const response = await requests.doPost(url ,
            JSON.stringify({
                id: task_id,
                title: my_title,
                description: my_description,
                price: my_price,
                taskCategory: my_category
            })
            );

            const newTask = await response;

            dispatch ({ type: receiveTask, newTask });
        },

        getCategories: () => async (dispatch) => {
            dispatch({ type: requestCategoriesTask });
    
            const url = `/taskinfo/getcategories`;
            const response = await requests.doGet(url);
    
            const categories = await response;
    
            dispatch ({ type: receiveCategoriesTask, categories });
        },

        getTasks: (myId) => async (dispatch) => {
            dispatch({ type: requestTaskForecastsType });

            const forecasts = await requests.doGet('/taskinfo/' + myId);

            dispatch({ type: receiveTaskForecastsType, forecasts });
        }
}

export const   closeMyTask = (taskId) => async (dispatch) => {
        dispatch({type: requestTaskForecastsType });
        const forecasts = await requests.doPost(`/api/taskinfo/closetask/` + taskId,JSON.stringify({
            id: taskId
    }));

        dispatch({ type: receiveTaskForecastsType, forecasts });
    }

    export const finishTask = (taskId) => async (dispatch) => {
        dispatch({type: requestTaskForecastsType });
        const forecasts = await requests.doPost(`/api/taskinfo/closetask/` + taskId,JSON.stringify({
            id: taskId
    }));

        dispatch({ type: receiveTaskForecastsType, forecasts });
    }


export const actionCommentsCreators = {
    requestComments: (myId) => async (dispatch) => {
        dispatch({ type: requestCommentsListType });

        const url = `/comments/` + myId;
        const comments = await requests.doGet(url);

        dispatch({ type: receiveCommentsListType, comments });
    } ,

    getImage: (id) => async (dispatch) => {

        const ImgData = await requests.doGet('/users/GetImage/' + id);

        dispatch({ type: receiveImage, ImgData });
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
    },

    deleteComment: (id) => async (dispatch) => {
        dispatch({ type: requestDeleteComment });

        const url = `/api/comments/DeleteComment`;
        const response = await requests.doPost(url,
            JSON.stringify({
                Id: id
            }));
        const deleteCommentResponse = await response;
        dispatch({ type: receiveDeleteComment, deleteCommentResponse });
    }
}