const requestTasksListType = 'REQUEST_TASKS_LIST';
const receiveTasksListType = 'RECEIVE_TASKS_LIST';

export const actionCreators = {
    requestTasksList: () => async (dispatch) => {
        dispatch({ type: requestTasksListType });

        const url = `https://localhost:44331/api/tasks`;
        const response = await fetch(url);
        const tasks = await response.json();

        dispatch({ type: receiveTasksListType, tasks });
    }
};