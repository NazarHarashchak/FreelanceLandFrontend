import { requests } from '../services/apiService';

const requestTasksListType = 'REQUEST_TASKS_LIST';
const receiveTasksListType = 'RECEIVE_TASKS_LIST';
const searchTaskListType = 'SEARCH_TASKS_LIST';
const changeCategOpenedStatusType = 'CHANGE_CATEG_OPENED_STATUS';
const changeCheckedStatusType = 'CHANGE_CHECKED_STATUS';
const changePriceType = 'CHANGE_PRICE';
const changeCurrentPageType = 'CHANGE_CURRENT_PAGE';
const cleanFilterType = 'CLEAN_FILTER';
const requestCategoriesListType = 'REQUEST_CATEGORIES_LIST';
const receiveCategoriesListType = 'RECEIVE_CATEGORIES_LIST';
const requestDeleteTask = 'REQUEST_DELETE_TASK';
const receiveDeleteTask = 'RECEIVE_DELETE_TASK';
const requestCreatedTasksListForUserType = 'REQUEST-CREATED-TASKS-LIST-FOR-USER-TYPE';
const receiveCreatedTasksListForUserType = 'RECEIVE-CREATED-TASKS-LIST-FOR-USER-TYPE';

export const requestTasksList = (pageNumber, filter, searchText, control) => async (dispatch) => {
    dispatch({ type: requestTasksListType });

    let url = '/tasks/'+  control + 'page='+pageNumber+'&search='+searchText+'&priceFrom='+filter.priceFrom+'&priceTo='+filter.priceTo+'&';
    
    filter.categories.filter(categ => categ.isChecked===true)
    .map(categ => {url+='categ='+categ.type+'&'});
    
    url = url.substring(0, url.length - 1);
    const tasks = await requests.doGet(url);

    dispatch({ type: receiveTasksListType, payload:{tasks:tasks.list,totalPages:tasks.totalPages} });
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

export const requestCategoriesList = () => async (dispatch) =>{
    dispatch({ type: requestCategoriesListType });

    const categories = await requests.doGet("/taskinfo/getCategories");
    dispatch({ type: receiveCategoriesListType, categories});

}

export const requestCreatedTasksListForUser = () => async (dispatch) => {
    dispatch({ type: requestCreatedTasksListForUserType });

    const url=`/tasks/Created/`+sessionStorage.getItem('id');
    const tasks = await requests.doGet(url);
    dispatch({ type: receiveCreatedTasksListForUserType, tasks});
}

export const changeCategOpenedStatus = () => async (dispatch) => {
    dispatch({ type: changeCategOpenedStatusType });
}

export const searchTasksList = (search) => {
    return ({ type: searchTaskListType, search });
}   

export const changeCheckedStatus = (name) => {
    return ({ type: changeCheckedStatusType, name });
}   

export const changePrice = (payload) => {
    return ({ type: changePriceType, payload});
}

export const changeCurrentPage = (curPage) => {
    return ({ type: changeCurrentPageType, curPage});
}

export const cleanFilter = () => {
    return ({ type: cleanFilterType });
} 
