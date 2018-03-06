import Types from './';
import Configs from '../../../configs';
import md5 from 'md5';


export function login(email, password) {
    return {
        type: Types.LOGIN,
        payload: {
            api: 'http://medicine-api.herokuapp.com/api/v1/login',
            method: 'POST',
            payload: {
                email: email,
                password: password
            }
        }
    }
}

export function getListProduct() {
    return {
        type: Types.GET_LIST_PRODUCT,
        payload: {
            api: 'https://medicine-api.herokuapp.com/api/v1/products',
            method: 'GET',
            token :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbWVkaWNpbmUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNTE4MTY5NDU0LCJleHAiOjIxNzUxODE2OTQ1NCwibmJmIjoxNTE4MTY5NDU0LCJqdGkiOiJHcnptd3FMZkFKcFVRdXRpIiwic3ViIjo2LCJwcnYiOiJhOTU5Njc4ZWI3M2Q3Njg2MGFlZWFmOTg5ZDU1NjFlMDczZTFlNzhlIn0.vaLUliu6qz0F8SAzFDMp15gB7_Ds5DzzyOPlmaA0jIA',
            payload: {
            }
        }
    }
}

export function getAllCustomer(token) {
    return {
        type: Types.GET_ALL_CUSTOMER,
        payload: {
            token :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbWVkaWNpbmUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNTE4MTY5NDU0LCJleHAiOjIxNzUxODE2OTQ1NCwibmJmIjoxNTE4MTY5NDU0LCJqdGkiOiJHcnptd3FMZkFKcFVRdXRpIiwic3ViIjo2LCJwcnYiOiJhOTU5Njc4ZWI3M2Q3Njg2MGFlZWFmOTg5ZDU1NjFlMDczZTFlNzhlIn0.vaLUliu6qz0F8SAzFDMp15gB7_Ds5DzzyOPlmaA0jIA',
            api: 'http://medicine-api.herokuapp.com/api/v1/customerAll',
            method: 'GET',
            payload: {
            }
        }
    }
}

export function getAllProduct(token) {
    return {
        type: Types.GET_ALL_PRODUCT,
        payload: {
            token :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbWVkaWNpbmUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNTE4MTY5NDU0LCJleHAiOjIxNzUxODE2OTQ1NCwibmJmIjoxNTE4MTY5NDU0LCJqdGkiOiJHcnptd3FMZkFKcFVRdXRpIiwic3ViIjo2LCJwcnYiOiJhOTU5Njc4ZWI3M2Q3Njg2MGFlZWFmOTg5ZDU1NjFlMDczZTFlNzhlIn0.vaLUliu6qz0F8SAzFDMp15gB7_Ds5DzzyOPlmaA0jIA',
            api: 'http://medicine-api.herokuapp.com/api/v1/productAll',
            method: 'GET',
            payload: {
            }
        }
    }
}

export function getDetailOrder(token, id) {
    return {
        type: Types.DETAIL_ORDER,
        payload: {
            token :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbWVkaWNpbmUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNTE4MTY5NDU0LCJleHAiOjIxNzUxODE2OTQ1NCwibmJmIjoxNTE4MTY5NDU0LCJqdGkiOiJHcnptd3FMZkFKcFVRdXRpIiwic3ViIjo2LCJwcnYiOiJhOTU5Njc4ZWI3M2Q3Njg2MGFlZWFmOTg5ZDU1NjFlMDczZTFlNzhlIn0.vaLUliu6qz0F8SAzFDMp15gB7_Ds5DzzyOPlmaA0jIA',
            api: 'http://medicine-api.herokuapp.com/api/v1/order/' + id,
            method: 'GET',
            payload: {
            }
        }
    }
}


export function getListOrder(token) {
    return {
        type: Types.GET_LIST_ORDER,
        payload: {
            token :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbWVkaWNpbmUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNTE4MTY5NDU0LCJleHAiOjIxNzUxODE2OTQ1NCwibmJmIjoxNTE4MTY5NDU0LCJqdGkiOiJHcnptd3FMZkFKcFVRdXRpIiwic3ViIjo2LCJwcnYiOiJhOTU5Njc4ZWI3M2Q3Njg2MGFlZWFmOTg5ZDU1NjFlMDczZTFlNzhlIn0.vaLUliu6qz0F8SAzFDMp15gB7_Ds5DzzyOPlmaA0jIA',
            api: 'http://medicine-api.herokuapp.com/api/v1/orderAll',
            method: 'GET',
            payload: {
            }
        }
    }
}

export function submitOrder(token, customer_id = 0, name, address, phone, delivery_date, note, po_product) {
    return {
        type: Types.SUBMIT_ORDER,
        payload: {
            api: 'https://medicine-api.herokuapp.com/api/v1/order',
            method: 'POST',
            token :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbWVkaWNpbmUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNTE4MTY5NDU0LCJleHAiOjIxNzUxODE2OTQ1NCwibmJmIjoxNTE4MTY5NDU0LCJqdGkiOiJHcnptd3FMZkFKcFVRdXRpIiwic3ViIjo2LCJwcnYiOiJhOTU5Njc4ZWI3M2Q3Njg2MGFlZWFmOTg5ZDU1NjFlMDczZTFlNzhlIn0.vaLUliu6qz0F8SAzFDMp15gB7_Ds5DzzyOPlmaA0jIA',
            payload: {
                customer_id: customer_id,
                name: name,
                address: address,
                phone: phone,
                delivery_date: delivery_date,
                note: note,
                po_product: JSON.stringify(po_product)
            }
        }
    }
}