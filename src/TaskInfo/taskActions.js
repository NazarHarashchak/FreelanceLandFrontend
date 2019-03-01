const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';

export const actionCreators = {
    requestTaskForecasts: () => async (dispatch) => {
        dispatch({ type: requestTaskForecastsType });

        const url = `https://localhost:44331/api/taskinfo`;
        const response = await fetch(url);
        const forecasts = await response.json();

        dispatch({ type: receiveTaskForecastsType, forecasts });
    }
};