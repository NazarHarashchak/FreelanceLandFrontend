const receiveGetTopFiveType = 'RECEIVE_MAIN_PAGES';

export const actionCreators = {
    requestGetTopFive: () => async (dispatch) => {
        
        dispatch({ type: receiveGetTopFiveType, main });

    }
};