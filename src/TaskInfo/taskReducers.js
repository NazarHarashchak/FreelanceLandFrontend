
const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const requestDeleteComment = 'REQUEST_DELETE_COMMENT';
const receiveDeleteComment = 'RECEIVE_DELETE_COMMENT';

const initialState = { forecasts: [], deleteCommentResponse: [], isLoading: false };

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

    if (action.type === requestDeleteComment) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveDeleteComment) {
        return {
            ...state,
            deleteCommentResponse: action.deleteCommentResponse,
            isLoading: false
        };
    }

    return state;
};