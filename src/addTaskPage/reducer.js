const requestTask = 'REQUEST_TASK';
const receiveTask = 'RECEIVE_TASK';

const initialState = { newTask: [], isLoading: false};

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

    return state;
};