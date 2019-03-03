const requestTasksListType = 'REQUEST_TASKS_LIST';
const receiveTasksListType = 'RECEIVE_TASKS_LIST';
const initialState = { tasks: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestTasksListType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveTasksListType) {
        return {
            ...state,
            tasks: action.tasks,
            isLoading: false
        };
    }

    return state;
};