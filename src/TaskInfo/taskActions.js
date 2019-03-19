import ApiService from '../apiService';

const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const requestDeleteTask = 'REQUEST_DELETE_TASK';
const receiveDeleteTask = 'RECEIVE_DELETE_TASK';

let apiService = new ApiService();

export const actionCreators = {
    requestTaskForecasts: (myId) => async (dispatch) => {
        dispatch({ type: requestTaskForecastsType });
        const url = `https://localhost:44332/api/taskinfo/` + myId;
        const response = await fetch(url);
        const forecasts = await response.json();

        dispatch({ type: receiveTaskForecastsType, forecasts });
    },

    requestDelete: (Id) => async (dispatch) => {
        dispatch({ type: requestDeleteTask });
        const path = '/api/taskinfo/DeleteTask';
        const response = await apiService.post(path,
            JSON.stringify({
                id: Id
            }));

        const deleteTaskResponse = await response.json();
        console.log(deleteTaskResponse);

        dispatch({ type: receiveDeleteTask, deleteTaskResponse })

    }
};