import apiService from '../apiService';
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
const requestTasksListForUserType = 'REQUEST-TASKS-LIST-FOR-USER-TYPE';
const receiveTasksListForUserType = 'RECEIVE-TASKS-LIST-FOR-USER-TYPE'

export const requestTasksList = () => async (dispatch) => {
    dispatch({ type: requestTasksListType });

    const url = `/api/tasks`;
    const response = await apiService.get(url);
    const tasks = await response;

    dispatch({ type: receiveTasksListType, tasks });
}

export const requestTasksListForUser = () => async (dispatch) =>{
    dispatch({ type: requestTasksListForUserType });

    const url=`/api/tasks/`+localStorage.getItem('id');
    const response = await apiService.get(url);
    const tasks= await response;

    dispatch({ type: receiveTasksListForUserType, tasks});
}
export const changeCategOpenedStatus = () => async (dispatch) => {
    dispatch({ type: changeCategOpenedStatusType });
}

export const requestCategoriesList = () => async (dispatch) => {

    const url = `/api/TaskCategories`;
    const response = await apiService.get(url);
    const categories = await response;
    console.log(categories);

    dispatch({ type: requestCategoriesListType, categories });
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
