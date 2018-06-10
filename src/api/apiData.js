const url = 'https://podwiez-pl.herokuapp.com/'

export const fetchInitialData = (credentials) => {
    
    return fetch(url + 'rides/myRides', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + credentials, 
          }), 
        mode: 'cors'
    })
}


export const fetchUserData = (credentials) => {
    return fetch(url + 'accounts/myAccount', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + credentials,
          }), 
        mode: 'cors'
    })
}

export const addRide = (credentials, body) => {
    console.log('wysyłam coś takiego: ' + body)
    return fetch(url + 'rides', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization': 'Basic ' + credentials,
          }),
        mode: 'cors' 
    })
}