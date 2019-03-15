const url = 'https://localhost:44331';

    const  post = async (path, body) =>
    {
        const response = await fetch(url + path,
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

    const get = async (path) =>
    {
        const response = await fetch(url + path,
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
    export default {get, post}
