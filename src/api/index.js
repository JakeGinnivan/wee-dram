function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

export const searchWhiskys = (search) => {
    return fetch(`http://localhost:3001/whiskys?q=${encodeURIComponent(search)}`)
        .then(checkStatus)
        .then(parseJSON)
}
export const checkin = (whiskyId, details) => {
    return fetch(`http://localhost:3001/checkins`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ whiskyId, ...details })
    }).then(checkStatus)
}

export const getCheckins = () => {
    return fetch(`http://localhost:3001/checkins`)
        .then(checkStatus)
        .then(parseJSON)
}