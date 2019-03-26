const requestTask = 'REQUEST_TASK';
const receiveTask = 'RECEIVE_TASK';
const requestCategoriesTask = 'REQUEST_CATEGORIES_TASK';
const receiveCategoriesTask = 'RECEIVE_CATEGORIES_TASK';

const initialState = { newTask: [], categories: [], isLoading: false};

export const reducer = (state, action) => {
    state = state || initialState;

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

    return state;
};