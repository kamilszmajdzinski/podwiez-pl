const url = 'https://podwiez-pl.herokuapp.com/'

export const fetchInitialData = () => {
    


    return fetch(url + 'rides/myRides', {
        method: 'GET',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        mode: 'cors'
    })
}