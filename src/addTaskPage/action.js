import { requests } from '../services/apiService';

const requestTask = 'REQUEST_TASK';
const receiveTask = 'RECEIVE_TASK';

export const actionTaskPost = {
    createNewTask: (my_title, my_description, my_userId, my_price,
                        my_deadline, my_category) => async (dispatch) => {
        dispatch({ type: requestTask });

        const url = `/api/taskinfo/addnewtask`;
        const response = await requests.doPost(url ,
            JSON.stringify({
                title: my_title,
                customerId: my_userId,
                description: my_description,
                price: my_price,
                deadline: my_deadline,
                taskCategory: my_category
        }));

        const newTask = await response;

        dispatch ({ type: receiveTask, newTask });
    }
}