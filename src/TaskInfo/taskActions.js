import { requests } from '../services/apiService';

const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';

export const actionCreators = {
    requestTaskForecasts: (myId) => async (dispatch) => {
        dispatch({ type: requestTaskForecastsType });
        const forecasts = await requests.doGet('/taskinfo/' + myId);

        dispatch({ type: receiveTaskForecastsType, forecasts });
    }
};