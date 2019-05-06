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
const requestTasksListForUserType = 'REQUEST-TASKS-LIST-FOR-USER-TYPE';
const receiveTasksListForUserType = 'RECEIVE-TASKS-LIST-FOR-USER-TYPE'
const requestCreatedTasksListForUserType = 'REQUEST-CREATED-TASKS-LIST-FOR-USER-TYPE';
const receiveCreatedTasksListForUserType = 'RECEIVE-CREATED-TASKS-LIST-FOR-USER-TYPE';
const requestGetActiveTasks = 'REQUEST_GET_ACTIVE_TASKS';
const receiveGetActiveTasks = 'RECEIVE_GET_ACTIVE_TASKS';
const receiveTopActiveUserTask = 'RECEIVE_TOP_ACTIVE_USER_TASK';
const receiveTopHistoryUserTask = 'RECEIVE_TOP_HISTORY_USER_TASK';


const initialState = { tasks: [], createdTasks: [], activeTasks: [], doneTask:[], curPage: 1, totalPages: 1, deleteTaskResponse: [], filteredTaskList: [], foundTasksList: [], filter: { categories: [], priceFrom: 0, priceTo: 0 }, search: "", isLoading: true, tasksAreLoading: true, categsAreLoading: true, isCategOpened: false };

export const reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case requestTasksListType:
            return {
                ...state,
                tasksAreLoading: true
            };

        case requestTasksListForUserType:
            return {
                ...state,
                isLoading: true
            };

        case requestCategoriesListType:
            return {
                ...state,
                categsAreLoading: true
            };

        case receiveCategoriesListType:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    categories: createCategsList(action.categories),
                    priceFrom: 0,
                    priceTo: 0
                },
                search: ""
            };

        case receiveTasksListForUserType:
            return {
                ...state,
                tasks: action.tasks,
                isLoading: false
            }

        case receiveTasksListType:
            return {
                ...state,
                tasks: action.payload.tasks,
                totalPages: action.payload.totalPages,
                tasksAreLoading: false
            };

        case requestDeleteTask:
            return {
                ...state,
                isLoading: true
            };
        case receiveTopActiveUserTask:
            return{
                ...state,
                activeTasks:action.tasks
            }
        case receiveTopHistoryUserTask:
        return{
            ...state,
            doneTask:action.tasks
        }
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
                search: action.search
            };

        case changeCurrentPageType:
            return {
                ...state,
                curPage: action.curPage
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
                    priceFrom: 0,
                    search: ""
                }
            }

        case requestCreatedTasksListForUserType:
            return {
                ...state,

                tasksAreLoading: true
            }

        case receiveCreatedTasksListForUserType:
            return {
                ...state,
                createdTasks: action.tasks,
                tasksAreLoading: false
            }

        case requestGetActiveTasks:
            return {
                ...state,
                tasksAreLoading: true
            }

        case receiveGetActiveTasks:
            return {
                ...state,
                activeTasks: action.tasks,
                tasksAreLoading: false
            }

        case requestCreatedTasksListForUserType:
        return {
            ...state,
            
            tasksAreLoading: true
        }

        case receiveCreatedTasksListForUserType:
        return {
            ...state,
            createdTasks: action.tasks,
            tasksAreLoading: false
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
    const categsList = categories.map(categ => { return { type: categ.type, isChecked: false } });
    return categsList;
}


function switchCheckedStatus(categs, name) {
    const newList = categs.map(item =>
        (item.type === name) ?
            { ...item, isChecked: !item.isChecked }
            : item
    )
    return newList;
}