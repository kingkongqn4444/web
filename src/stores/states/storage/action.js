import Types from './';


export function removeAccessToken() {
    return {
        type: Types.REMOVE_TOKEN,
        storage: {
            method: "remove",
            payload: 'token',
        }
    }
}

export function setAccessToken(token) {
    return {
        type: Types.SET_TOKEN,
        storage: {
            method: "set",
            payload: {
                token,
            }
        }
    }
}


export function setListProduct(data) {
    return {
        type: Types.SET_DATA,
        storage: {
            method: "setArray",
            payload: {
                // token,
            }
        }
    }
}


export function getAccessToken() {
    return {
        type: Types.GET_TOKEN,
        storage: {
            method: "get",
            payload: "token"
        }
    }
}