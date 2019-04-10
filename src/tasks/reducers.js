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

const initialState = { tasks: [], deleteTaskResponse: [], filteredTaskList: [], foundTasksList:[],filter: {categories:[], priceFrom:0, priceTo:0}, searchText:"", isLoading: true, tasksAreLoading: true, categsAreLoading: true, isCategOpened:false };

export const reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case requestTasksListType:
            return {
                ...state,
                tasksAreLoading: true
            };

        case requestTasksListForUserType:
            return{
                ...state,
                isLoading: true
            };
        
        case requestCategoriesListType:
            return{
                ...state,
                categsAreLoading: true
            };
        
        case receiveCategoriesListType:
            return{
                ...state,
                filter: {
                    ...state.filter,
                    categories: createCategsList(action.categories)
                }
            };

        case receiveTasksListForUserType:
            return{
                ...state,
                tasks: action.tasks,
                isLoading: false
            }

        case receiveTasksListType:
            return {
                ...state,
                tasks: action.tasks,
                tasksAreLoading: false
            };

        case requestDeleteTask:
            return {
                ...state,
                isLoading: true
            };

        case receiveDeleteTask:
            return {
                ...state,
                deleteTaskResponse: action.deleteTaskResponse,
                isLoading: false
            };

        case changeCategOpenedStatusType:
            return {
                ...state,
                isCategOpened: !state.isCategOpened
            };

        case searchTaskListType:
            return {
                ...state,
                searchText:action.searchText
            };

        case changeCheckedStatusType:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    categories: switchCheckedStatus(state.filter.categories, action.name)
                }
            }

        case changePriceType:
        return {
            ...state,
            filter: {
                ...state.filter,
                priceTo: action.payload.toValue,
                priceFrom: action.payload.fromValue
            }
        }

        case cleanFilterType:
        return {
            ...state,
            filter: {
                ...state.filter,
                categories: cleanChecked(state.filter.categories),
                priceTo: 0,
                priceFrom: 0
            }
        }

        default:
            return state;
    }
}


function cleanChecked(categs) {
    const newList = categs.map(item => {
        return {
          ...item,
          isChecked: false
        };
      });
    return newList;
}

function createCategsList(categories) {
    const categsList = categories.map(categ => {return {type:categ.type, isChecked:false}});
    return categsList;
}


function switchCheckedStatus(categs,name) {
    const newList = categs.map(item =>
        (item.type === name)?
         {...item, isChecked: !item.isChecked}
        : item
    )
    return newList;
}