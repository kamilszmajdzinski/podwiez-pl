const url = 'https://podwiez-pl.herokuapp.com/'


export const loginUser = encoded => {
   console.log(encoded);
   
    return fetch(url + 'rides/', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + encoded, 
          }), 
        mode: 'cors'
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

