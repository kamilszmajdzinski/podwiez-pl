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