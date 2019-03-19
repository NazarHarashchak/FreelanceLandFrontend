import { requests } from '../services/apiService';

const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const requestDeleteTask = 'REQUEST_DELETE_TASK';
const receiveDeleteTask = 'RECEIVE_DELETE_TASK';

export const actionCreators = {
    requestTaskForecasts: (myId) => async (dispatch) => {
        dispatch({ type: requestTaskForecastsType });
        const forecasts = await requests.doGet('/taskinfo/' + myId);

        dispatch({ type: receiveTaskForecastsType, forecasts });
    },

    requestDelete: (Id) => async (dispatch) => {
        dispatch({ type: requestDeleteTask });
        const path = '/taskinfo/DeleteTask';
        const response = await requests.doPost(path,
            JSON.stringify({
                id: Id
            }));

        const deleteTaskResponse = await response.json();
        console.log(deleteTaskResponse);

        dispatch({ type: receiveDeleteTask, deleteTaskResponse })

    }
};