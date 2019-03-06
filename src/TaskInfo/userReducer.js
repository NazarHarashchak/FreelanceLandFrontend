const requestUserForecastsType = 'REQUEST_USER_FORECASTS';
const receiveUserForecastsType = 'RECEIVE_USER_FORECASTS';

const initialState = { users: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestUserForecastsType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveUserForecastsType) {
        return {
            ...state,
            users: action.users,
            isLoading: false
        };
    }

    return state;
};