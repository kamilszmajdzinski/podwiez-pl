const url = 'https://podwiez-pl.herokuapp.com/'


export const loginUser = encoded => {
   
    return fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + encoded, 
          }), 
        credentials: 'include',
        
        
    })
}

export const registerUser = body => {
   return fetch(url + 'acounts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
}

