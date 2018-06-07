const url = 'https://podwiez-pl.herokuapp.com/'

export const fetchInitialData = () => {
    


    return fetch(url + 'rides/myRides', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors'
    })
}