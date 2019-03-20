import { API_ROOT, ROOT } from './api-config';

export const requests = {
    doPost: async function (path, body) {
        const response = await fetch(ROOT + path,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.tokenKey
                },
                body: body
            }
        )
        return response.json();
    },

    doGet: async function (path) {
        const response = await fetch(API_ROOT + path,
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.tokenKey
                }
            }
        )
        return response.json();
    },

    doPut: async function (path, body) {
        const response = await fetch(API_ROOT + path,
            {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.tokenKey
                },
                body: body
            }
        )
        return response.json();
    },

    doDelete: async function (path) {
        const response = await fetch(API_ROOT + path,
            {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.tokenKey
                }
            }
        )
        return response.json();
    }
}