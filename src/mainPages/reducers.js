const receiveTop = 'RECEIVE_TOP';
const requestTop = 'REQUEST_TOP';

const initialState = { users: [] }

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestTop) {
        
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveTop) {
         console.log(action.users);
        return {
            ...state,
            users: action.users,
            isLoading: false
        };
    }
    
    return state;
};