import Types from './';
import Configs from "../../../configs";



export function addProduct(token, name, price, uom) {
    return {
        type: Types.ADD_PRODUCT,
        payload: {
            token: token,
            api: 'http://medicine-api.herokuapp.com/api/v1/product',
            method: 'POST',
            payload: {
                "name": name,
                "price": price,
                "uom": uom
            }
        }
    }
}