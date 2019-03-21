import { requests } from '../services/apiService';

const requestTasksListType = 'REQUEST_TASKS_LIST';
const receiveTasksListType = 'RECEIVE_TASKS_LIST';
const searchTaskListType = 'SEARCH_TASKS_LIST';
const changeCategOpenedStatusType = 'CHANGE_CATEG_OPENED_STATUS';
const requestCategoriesListType = 'REQUEST_CATEGORIES_LIST';
const changeCheckedStatusType = 'CHANGE_CHECKED_STATUS';
const changeFromPriceType = 'CHANGE_FROM_PRICE';
const changeToPriceType = 'CHANGE_TO_PRICE';
const cleanFilterType = 'CLEAN_FILTER';
const setFoundTasksListType = 'SET_FOUND_TASKS_LIST';
const setPriceToValidateType = 'SET_PRICE_TO_VALIDATE';

export const requestTasksList = () => async (dispatch) => {
    dispatch({ type: requestTasksListType });

    const tasks = await requests.doGet('/tasks');

    dispatch({ type: receiveTasksListType, tasks });
}

export const changeCategOpenedStatus = () => async (dispatch) => {
    dispatch({ type: changeCategOpenedStatusType });
}

export const searchTasksList = (searchText) => {
    return ({ type: searchTaskListType, searchText });
}   

export const changeCheckedStatus = (name) => {
    return ({ type: changeCheckedStatusType, name });
}   

export const changeFromPrice = (price) => {
    return ({ type: changeFromPriceType, price });
}   

export const changeToPrice = (price) => {
    return ({ type: changeToPriceType, price });
}   

export const cleanFilter = () => {
    return ({ type: cleanFilterType });
} 

export const setFoundTasksList = (foundTasksList) => {
    return ({ type: setFoundTasksListType, foundTasksList });
} 

export const setPriceToValidate = (priceToValidate) => {
    return ({ type: setPriceToValidateType, priceToValidate });
}
