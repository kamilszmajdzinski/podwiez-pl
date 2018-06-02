const url = 'https://podwiez-pl.herokuapp.com/'

export const fetchInitialData = () => {
    return fetch(url + 'rides', {
        method: 'GET',
        mode: 'cors'
    })
}