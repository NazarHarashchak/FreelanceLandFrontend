import { API_ROOT, ROOT } from './api-config';

<<<<<<< HEAD

    url = 'https://localhost:44332';
    async post(path, body) {
        const response = await fetch(this.url + path,
=======
export const requests = {
    doPost: async function (path, body) {
        const response = await fetch(ROOT + path,
>>>>>>> 2b4abb322550edc62ef6c6b79cec943b74cecb43
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.tokenKey
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
                    'Authorization': 'Bearer ' + localStorage.tokenKey
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
                    'Authorization': 'Bearer ' + localStorage.tokenKey
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
                    'Authorization': 'Bearer ' + localStorage.tokenKey
                }
            }
        )
        return response.json();
    }
}