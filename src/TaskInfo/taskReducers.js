const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const requestDeleteTask = 'REQUEST_DELETE_TASK';
const receiveDeleteTask = 'RECEIVE_DELETE_TASK';

const initialState = { forecasts: [], deleteTaskResponse: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestTaskForecastsType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveTaskForecastsType) {
        return {
            ...state,
            forecasts: action.forecasts,
            isLoading: false
        };
    }

    if (action.type === requestDeleteTask) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveDeleteTask) {
        return {
            ...state,
            deleteTaskResponse: action.deleteTaskResponse,
            isLoading: false
        };
    }

    return state;
};