const url = 'https://podwiez-pl.herokuapp.com/'


export const loginUser = body => {
    fetch(url + 'login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
}

export const registerUser = body => {
    fetch(url + 'acounts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
}