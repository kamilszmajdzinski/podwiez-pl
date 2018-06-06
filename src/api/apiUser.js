const url = 'https://podwiez-pl.herokuapp.com/'


export const loginUser = encoded => {
    return fetch(url + 'rides/', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + encoded, 
          }), 
         mode: 'cors',
        
    })
}

export const registerUser = body => {
   return fetch(url + 'accounts', {
        method: 'POST',
        body: JSON.stringify(body),
        mode: 'cors'
    })
}

