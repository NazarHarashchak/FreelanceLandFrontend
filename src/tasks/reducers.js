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

const initialState = { tasks: [], priceToValidate:"", deleteTaskResponse: [], filteredTaskList: [], foundTasksList:[],filter: {categories:[], priceFrom:0, priceTo:0}, searchText:"", isLoading: true, tasksAreLoading: true, isCategOpened:false };

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
                filter: {
                    ...state.filter,
                    categories: createCategsList(action.tasks)
                },
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

        case changeFromPriceType:
        return {
            ...state,
                filter: {
                    ...state.filter,
                    priceFrom: parseInt(action.price,10)
                }
        }

        case changeToPriceType:
        return {
            ...state,
                filter: {
                    ...state.filter,
                    priceTo: parseInt(action.price,10)
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

        case setPriceToValidateType:
        return {
            ...state,
            priceToValidate: action.priceToValidate
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

function createCategsList(tasks) {
    const categsNameArray = [...new Set(tasks.map(task => task.taskCategoryName))];
    const categsList = categsNameArray.map(categ => {return {type:categ, isChecked:false}});
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