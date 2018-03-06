import Types from './';
import Configs from "../../../configs";





export function submitOrder(token, customer_id = 0, name, address, phone, delivery_date, note, po_product) {
    return {
        type: Types.SUBMIT_ORDER,
        payload: {
            api: 'https://medicine-api.herokuapp.com/api/v1/order',
            method: 'POST',
            payload: {
                customer_id: customer_id,
                name: name,
                address: address,
                phone: phone,
                delivery_date: delivery_date,
                note: note,
                po_product: po_product
            }
        },
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbWVkaWNpbmUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNTE4MTY5NDU0LCJleHAiOjIxNzUxODE2OTQ1NCwibmJmIjoxNTE4MTY5NDU0LCJqdGkiOiJHcnptd3FMZkFKcFVRdXRpIiwic3ViIjo2LCJwcnYiOiJhOTU5Njc4ZWI3M2Q3Njg2MGFlZWFmOTg5ZDU1NjFlMDczZTFlNzhlIn0.vaLUliu6qz0F8SAzFDMp15gB7_Ds5DzzyOPlmaA0jIA',
    }
}

export function addCustomer(name, phone, email, address, note) {
    return {
        type: Types.ADD_CUSTOMER,
        payload: {
            api: 'https://medicine-api.herokuapp.com/api/v1/customer',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbWVkaWNpbmUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNTE4MTY5NDU0LCJleHAiOjIxNzUxODE2OTQ1NCwibmJmIjoxNTE4MTY5NDU0LCJqdGkiOiJHcnptd3FMZkFKcFVRdXRpIiwic3ViIjo2LCJwcnYiOiJhOTU5Njc4ZWI3M2Q3Njg2MGFlZWFmOTg5ZDU1NjFlMDczZTFlNzhlIn0.vaLUliu6qz0F8SAzFDMp15gB7_Ds5DzzyOPlmaA0jIA',
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
