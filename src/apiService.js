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
                    'Authorization': 'Bearer ' + sessionStorage.tokenKey
                }
            }
        )
        return await response.json();
    }
}