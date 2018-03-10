import Types from './';
import Configs from '../../../configs';
import md5 from 'md5';


export function login(data) {
    return {
        type: Types.LOGIN,
        payload: {
            api: 'http://medicine-api.herokuapp.com/api/v1/login',
            method: 'POST',
            payload: {
                email: data.phone,
                password: data.password
            }
        }
    }
}

export function register(data) {
    return {
        type: Types.REGISTER,
        payload: {
            api: 'http://medicine-api.herokuapp.com/api/v1/register',
            method: 'POST',
            payload: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        }
    }
}


export function addOutlet(token, data) {
    return {
        type: Types.ADD_OUTLET,
        payload: {
            token: token,
            api: 'http://medicine-api.herokuapp.com/api/v1/outlet-product',
            method: 'POST',
            payload: {
                name: data.name,
                stock_balance: data.soluong,
                description: data.mota,
                uom: data.oum
            }
        }
    }
}

export function listOutler(token) {
    return {
        type: Types.LIST_OUTLET,
        payload: {
            token: token,
            api: 'http://medicine-api.herokuapp.com/api/v1/outlet-product',
            method: 'GET',
            payload: {
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
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbWVkaWNpbmUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNTE4MTY5NDU0LCJleHAiOjIxNzUxODE2OTQ1NCwibmJmIjoxNTE4MTY5NDU0LCJqdGkiOiJHcnptd3FMZkFKcFVRdXRpIiwic3ViIjo2LCJwcnYiOiJhOTU5Njc4ZWI3M2Q3Njg2MGFlZWFmOTg5ZDU1NjFlMDczZTFlNzhlIn0.vaLUliu6qz0F8SAzFDMp15gB7_Ds5DzzyOPlmaA0jIA',
            payload: {
            }
        }
    }
}

export function getAllCustomer(token) {
    return {
        type: Types.GET_ALL_CUSTOMER,
        payload: {
            token: token,
            api: 'http://medicine-api.herokuapp.com/api/v1/customerAll',
            method: 'GET',
            payload: {
            }
        }
    }
}

export function deleteCustomer(token, id) {
    return {
        type: Types.DELETE_CUSTOMER,
        payload: {
            token: token,
            api: 'http://medicine-api.herokuapp.com/api/v1/customer/delete',
            method: 'DELETE',
            payload: {
                id: id
            }
        }
    }
}

export function detailCustomer(token, id) {
    return {
        type: Types.DETAIL_CUSTOMER,
        payload: {
            token: token,
            api: 'http://medicine-api.herokuapp.com/api/v1/customerDetail',
            method: 'POST',
            payload: {
                id: id
            }
        }
    }
}

export function addCustomer(token, name, address, email, phone, note) {
    return {
        type: Types.ADD_CUSTOMER,
        payload: {
            token: token,
            api: 'http://medicine-api.herokuapp.com/api/v1/customer',
            method: 'POST',
            payload: {
                name: name,
                address: address,
                email: email,
                phone: phone,
                note: note
            }
        }
    }
}

export function getAllProduct(token) {
    return {
        type: Types.GET_ALL_PRODUCT,
        payload: {
            token: token,
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
            token: token,
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
            token: token,
            api: 'http://medicine-api.herokuapp.com/api/v1/orderAll',
            method: 'GET',
            payload: {
            }
        }
    }
}


export function editOrder(token, id, name, address, phone, note, po_product) {
    return {
        type: Types.EDIT_ORDER,
        payload: {
            token: token,
            api: 'http://medicine-api.herokuapp.com/api/v1/order/' + id,
            method: 'PUT',
            payload: {
                name: name,
                address: address,
                phone: phone,
                note: note,
                po_product: JSON.stringify(po_product)
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
            token: token,
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
