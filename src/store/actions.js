const requestWeatherForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveWeatherForecastsType = 'RECEIVE_WEATHER_FORECASTS';

export const actionCreators = {
    requestWeatherForecasts: () => async (dispatch) => {
        dispatch({ type: requestWeatherForecastsType });

        const url = `https://localhost:44331/api/values`;
        const response = await fetch(url);
        const forecasts = await response.json();
        dispatch({ type: receiveWeatherForecastsType, forecasts });
    }
};