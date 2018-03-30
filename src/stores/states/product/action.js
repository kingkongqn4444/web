import Types from "./";
import Configs from "../../../config";

export function addProduct(name, price, uom) {
  return {
    type: Types.ADD_PRODUCT,
    payload: {
      api: Configs.API + "product",
      method: "POST",
      payload: {
        name: name,
        price: price,
        uom: uom,
      },
    },
  };
}

export function listSup(token) {
  return {
    type: Types.LIST_ALL_SUP,
    payload: {
      token: token,
      api: Configs.API + "supplierAll",
      method: "GET",
      payload: {},
    },
  };
}

export function sortListBill(token, customer_id = 0, start_day, end_day) {
  return {
    type: Types.SORT_LIST_BILL,
    payload: {
      token: token,
      api: Configs.API + "order/byDate",
      method: "POST",
      payload: {
        start: start_day,
        end: end_day,
        customer_id: customer_id,
      },
    },
  };
}

export function setFlagShortBill(bool = true) {
  return {
    type: Types.SET_FLAG_SHORT_BILL,
    payload: bool,
  };
}
