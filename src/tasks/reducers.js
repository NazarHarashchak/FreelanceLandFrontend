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

const initialState = { tasks: [], priceToValidate:"", deleteTaskResponse: [], filteredTaskList: [], foundTasksList:[],filter: {categories:[], priceFrom:'', priceTo:''}, searchText:"", isLoading: false, isCategOpened:false };

export const reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case requestTasksListType:
            return {
                ...state,
                isLoading: true
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
                filteredTaskList: action.tasks,
                foundTasksList: action.tasks,
                isLoading: false
            }

        case receiveTasksListType:
            return {
                ...state,
                tasks: action.tasks,
                filteredTaskList: action.tasks,
                foundTasksList: action.tasks,
                filter: {
                    ...state.filter,
                    categories: createCategsList(action.tasks)
                },
                isLoading: false
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
            let newCategoriesList = switchCheckedStatus(state.filter.categories,action.name);
            return {
                ...state,
                filter: {
                    ...state.filter,
                    categories: newCategoriesList
                },
                filteredTaskList: filterTasks({...state.filter,categories:newCategoriesList},state.tasks)
            }

        case changeFromPriceType:
        return {
            ...state,
                filter: {
                    ...state.filter,
                    priceFrom: action.price
                },
                filteredTaskList: filterTasks({...state.filter,priceFrom:action.price},state.tasks)
        }

        case changeToPriceType:
        return {
            ...state,
                filter: {
                    ...state.filter,
                    priceTo: action.price
                },
                filteredTaskList: filterTasks({...state.filter,priceTo: action.price},state.tasks)
        }

        case cleanFilterType:
        return {
            ...state,
            filter: {
                ...state.filter,
                categories: cleanChecked(state.filter.categories),
                priceTo: '',
                priceFrom: ''
            },
            filteredTaskList:state.tasks
        }

        case setFoundTasksListType:
        return {
            ...state,
            foundTasksList: action.foundTasksList
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

function filterTasks(filter, tasks) {
    let checkedCategs = filter.categories.filter(categ => categ.isChecked === true);
    if (checkedCategs.length !== 0) {
        tasks = tasks.filter(item => {
            return (
                checkedCategs.some(categ => categ.type === item.taskCategoryName) === true
            );
        })
    }
    tasks = tasks.filter(item => {
        return (
            (filter.priceTo === 0||filter.priceTo === '') ? (filter.priceFrom <= item.price) :
             ((filter.priceFrom <= item.price) && (item.price <= filter.priceTo)) === true
        )
    })
    return tasks;
}
