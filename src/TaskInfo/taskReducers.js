const requestTaskForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveTaskForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const requestDeleteComment = 'REQUEST_DELETE_COMMENT';
const receiveDeleteComment = 'RECEIVE_DELETE_COMMENT';
const requestCategoriesTask = 'REQUEST_CATEGORIES_TASK';
const receiveCategoriesTask = 'RECEIVE_CATEGORIES_TASK';
const requestTask = 'REQUEST_TASK';
const receiveTask = 'RECEIVE_TASK';

const initialState = { forecasts: [], deleteCommentResponse: [], categories: [], newTask: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;
    // get all task information
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
    // delete comment
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
    // edit task get category
    if (action.type === requestCategoriesTask) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveCategoriesTask) {
        return {
            ...state,
            categories: action.categories,
            isLoading: false
        };
    }
    // edit task save
    if (action.type === requestTask) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveTask) {
        return {
            ...state,
            newTask: action.newTask,
            isLoading: false
        };
    }

    return state;
};