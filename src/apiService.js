export default class ApiService {
   
    
    url = 'https://localhost:44332';
    async post (path, body) 
    {
        const response = await fetch(this.url + path,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body 
            }
        )
        return await response.json();
    }

    async get (path)
    {
        const response = await fetch(this.url + path,
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

    async put (path, body)
    {
        const response = await fetch(this.url + path,
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

    async delete (path, body)
    {
        const response = await fetch(this.url + path,
            {
                method: 'DELETE',
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
}