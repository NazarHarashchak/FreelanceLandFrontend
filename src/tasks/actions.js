import { requests } from '../services/apiService';

const requestTasksListType = 'REQUEST_TASKS_LIST';
const receiveTasksListType = 'RECEIVE_TASKS_LIST';
const searchTaskListType = 'SEARCH_TASKS_LIST';
const changeCategOpenedStatusType = 'CHANGE_CATEG_OPENED_STATUS';
const changeCheckedStatusType = 'CHANGE_CHECKED_STATUS';
const changeFromPriceType = 'CHANGE_FROM_PRICE';
const changeToPriceType = 'CHANGE_TO_PRICE';
const cleanFilterType = 'CLEAN_FILTER';
const setFoundTasksListType = 'SET_FOUND_TASKS_LIST';
const setPriceToValidateType = 'SET_PRICE_TO_VALIDATE';
const requestDeleteTask = 'REQUEST_DELETE_TASK';
const receiveDeleteTask = 'RECEIVE_DELETE_TASK';
const requestTasksListForUserType = 'REQUEST-TASKS-LIST-FOR-USER-TYPE';
const receiveTasksListForUserType = 'RECEIVE-TASKS-LIST-FOR-USER-TYPE'

export const requestTasksList = (pageNumber) => async (dispatch) => {
    dispatch({ type: requestTasksListType });

    const allTasks = await requests.doGet('/tasks/pageNumber/'+pageNumber);
    const tasks=allTasks.list;
    dispatch({ type: receiveTasksListType, tasks });
}

export const deleteTask = {
    requestDelete: (id) => async (dispatch) => {
        dispatch({ type: requestDeleteTask });

        const url = '/api/tasks/DeleteTask';
        const response = await requests.doPost(url,
            JSON.stringify({
                Id: id
            }));
        const deleteTaskResponse = await response;
        dispatch({ type: receiveDeleteTask, deleteTaskResponse });
    }
}

export const requestTasksListForUser = () => async (dispatch) =>{
    dispatch({ type: requestTasksListForUserType });

    const url=`/tasks/history/`+sessionStorage.getItem('id');
    const tasks = await requests.doGet(url);
    dispatch({ type: receiveTasksListForUserType, tasks});
}

export const requestActiveTasksListForUser = () => async (dispatch) =>{
    dispatch({ type: requestTasksListForUserType });

    const url=`/tasks/Active/`+sessionStorage.getItem('id');
    const tasks = await requests.doGet(url);
    dispatch({ type: receiveTasksListForUserType, tasks});
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
