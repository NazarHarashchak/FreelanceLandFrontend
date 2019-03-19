import ApiService from '../services/apiService';

const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';

let apiService = new ApiService();

export const actionCreators = {
    requestTaskForecasts: (myId) => async (dispatch) => {
        dispatch({ type: requestTaskForecastsType });
        const forecasts = await apiService.get('/taskinfo/' + myId);

        dispatch({ type: receiveTaskForecastsType, forecasts });
    }
};