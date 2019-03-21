import ApiService from '../services/apiService';

const requestProfilePage = 'REQUEST_PROFILE_PAGE';
const receiveProfilePage = 'RECEIVE_PROFILE_PAGE';
const requestImage = 'REQUEST_IMAGE';
const receiveImage = 'RECEIVE_IMAGE';
const refreshImage = 'REFRESH_IMAGE';

let apiService = new ApiService();

export const actionCreators = {
    requestProfilePage: (id) => async (dispatch) => {
        dispatch({ type: requestProfilePage });
        const url = 'https://localhost:44332/api/users/'+id;
        const response = await fetch(url);
        const User = await response.json();

        dispatch({ type: receiveProfilePage, User });
    }
}
export const addImage = async (image)  => {
    await fetch('https://localhost:44332/api/users/CreateImage',
        { 
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.tokenKey
            },
            method: 'POST',
            body: image
        })
}

export const actionCreators1 = {
    getImage: (id) => async (dispatch) => {
    const url = 'https://localhost:44332/api/users/GetImage/'+id;
    const response = await fetch(url,
    { 
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.tokenKey
        }
    })
    const ImgData = await response.json();
    dispatch({ type: receiveImage, ImgData });
},
    addImage: (image) => async (dispatch)  => {
    await fetch('https://localhost:44332/api/users/CreateImage',
        { 
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.tokenKey
            },
            method: 'POST',
            body: image
        })
        const refresh = true;
        dispatch({ type: refreshImage, refresh });
    }
}
