import { requests } from '../services/apiService';

const requestTasksListType = 'REQUEST_TASKS_LIST';
const receiveTasksListType = 'RECEIVE_TASKS_LIST';
const searchTaskListType = 'SEARCH_TASKS_LIST';
const changeCategOpenedStatusType = 'CHANGE_CATEG_OPENED_STATUS';
const changeCheckedStatusType = 'CHANGE_CHECKED_STATUS';
const changePriceType = 'CHANGE_PRICE';
const cleanFilterType = 'CLEAN_FILTER';
const requestCategoriesListType = 'REQUEST_CATEGORIES_LIST';
const receiveCategoriesListType = 'RECEIVE_CATEGORIES_LIST';
const requestDeleteTask = 'REQUEST_DELETE_TASK';
const receiveDeleteTask = 'RECEIVE_DELETE_TASK';
const requestTasksListForUserType = 'REQUEST-TASKS-LIST-FOR-USER-TYPE';
const receiveTasksListForUserType = 'RECEIVE-TASKS-LIST-FOR-USER-TYPE'

export const requestTasksList = (pageNumber, filter, searchText) => async (dispatch) => {
    dispatch({ type: requestTasksListType });

    let url = '/tasks/all?page='+pageNumber+'&search='+searchText+'&priceTo='+filter.priceTo+'&priceFrom='+filter.priceFrom+'&';
    console.log(url);
    
    filter.categories.filter(categ => categ.isChecked===true).map 
        (categ => {url+='categ='+categ.type+'&'});
    
    console.log(url);
    url = url.substring(0, url.length - 1);
    console.log(url);
    const tasks = await requests.doGet(url);
    //const allTasks = await requests.doPost('/api/tasks/all',
    //JSON.stringify(
       // {
        //    pageNumber: 1,
        //    filter:filter,
        //    searchText:searchText
      //  }
   // ));
    //const tasks=allTasks.list;
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

export const requestCategoriesList = () => async (dispatch) =>{
    dispatch({ type: requestCategoriesListType });

    const categories = await requests.doGet("/taskinfo/getCategories");
    dispatch({ type: receiveCategoriesListType, categories});
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

export const changePrice = (payload) => {
    return ({ type: changePriceType, payload});
}

export const cleanFilter = () => {
    return ({ type: cleanFilterType });
} 
