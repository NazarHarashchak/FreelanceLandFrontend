const requestProfilePage = 'REQUEST_PROFILE_PAGE';
const receiveProfilePage = 'RECEIVE_PROFILE_PAGE';
const requestImage = 'REQUEST_IMAGE';
const receiveImage = 'RECEIVE_IMAGE';

const initialState = { User: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestProfilePage) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveProfilePage) {
        return {
            ...state,
            User: action.User,
            isLoading: false
        };
    }

    if (action.type === requestImage) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveImage) {
        return {
            ...state,
            image: action.ImgData,
            isLoading: false
        };
    }

    return state;
};