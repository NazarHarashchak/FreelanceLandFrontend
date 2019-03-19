import {API_ROOT, ROOT} from './api-config';

export default class ApiService {

    async post(path, body) {
        const response = await fetch(ROOT + path,
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
        return await response.json();
    }

    async get(path) {
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
        return await response.json();
    }

    async put(path,body) {
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
        return await response.json();
    }

    async delete(path) {
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
        return await response.json();
    }
}