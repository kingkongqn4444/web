import Types from './';
import Configs from "../../../configs";



export function addProduct(name, price, uom) {
    return {
        type: Types.ADD_PRODUCT,
        payload: {
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