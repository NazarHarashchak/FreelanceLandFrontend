
const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';

const initialState = { forecasts: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestTaskForecastsType) {
        console.log(1);
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveTaskForecastsType) {
        console.log(2);

        return {
            ...state,
            forecasts: action.forecasts,
            isLoading: false
        };
    }

    return state;
};