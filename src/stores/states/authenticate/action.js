import Types from "./";
import Configs from "../../../configs";
import md5 from "md5";

export function login(data) {
  return {
    type: Types.LOGIN,
    payload: {
      api: "http://medicine-api.herokuapp.com/api/v1/login",
      method: "POST",
      payload: {
        email: data.phone,
        password: data.password,
      },
    },
  };
}

export function register(data) {
  return {
    type: Types.REGISTER,
    payload: {
      api: "http://medicine-api.herokuapp.com/api/v1/register",
      method: "POST",
      payload: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    },
  };
}

export function addOutlet(token, data) {
  return {
    type: Types.ADD_OUTLET,
    payload: {
      token: token,
      api: "http://medicine-api.herokuapp.com/api/v1/outlet-product",
      method: "POST",
      payload: {
        name: data.name,
        stock_balance: data.soluong,
        description: data.mota,
        uom: data.oum,
      },
    },
  };
}

export function listOutler(token) {
  return {
    type: Types.LIST_OUTLET,
    payload: {
      token: token,
      api: "http://medicine-api.herokuapp.com/api/v1/outlet-product",
      method: "GET",
      payload: {},
    },
  };
}

export function getAllCustomer(token) {
  return {
    type: Types.GET_ALL_CUSTOMER,
    payload: {
      token: token,
      api: "http://medicine-api.herokuapp.com/api/v1/customerAll",
      method: "GET",
      payload: {},
    },
  };
}

export function deleteCustomer(token, id) {
  
  return {
    type: Types.DELETE_CUSTOMER,
    payload: {
      token: token,
      api: "http://medicine-api.herokuapp.com/api/v1/customer/delete",
      method: "DELETE",
      payload: {
        id: id,
      },
    },
  };
}

export function detailCustomer(token, id) {
  return {
    type: Types.DETAIL_CUSTOMER,
    payload: {
      token: token,
      api: "http://medicine-api.herokuapp.com/api/v1/customerDetail",
      method: "POST",
      payload: {
        id: id,
      },
    },
  };
}

export function addCustomer(token, name, address, email, phone, note) {
  return {
    type: Types.ADD_CUSTOMER,
    payload: {
      token: token,
      api: "http://medicine-api.herokuapp.com/api/v1/customer",
      method: "POST",
      payload: {
        name: name,
        address: address,
        email: email,
        phone: phone,
        note: note,
      },
    },
  };
}

export function getAllProduct() {
  return {
    type: Types.GET_ALL_PRODUCT,
    payload: {
      api: "http://medicine-api.herokuapp.com/api/v1/productAll",
      method: "GET",
      payload: {},
    },
  };
}

export function getDetailOrder(token, id) {
  return {
    type: Types.DETAIL_ORDER,
    payload: {
      token: token,
      api: "http://medicine-api.herokuapp.com/api/v1/order/" + id,
      method: "GET",
      payload: {},
    },
  };
}

export function getListOrder(token) {
  return {
    type: Types.GET_LIST_ORDER,
    payload: {
      token: token,
      api: "http://medicine-api.herokuapp.com/api/v1/orderAll",
      method: "GET",
      payload: {},
    },
  };
}

export function editOrder(token, id, name, address, phone, note, po_product) {
  return {
    type: Types.EDIT_ORDER,
    payload: {
      token: token,
      api: "http://medicine-api.herokuapp.com/api/v1/order/" + id,
      method: "PUT",
      payload: {
        name: name,
        address: address,
        phone: phone,
        note: note,
        po_product: JSON.stringify(po_product),
      },
    },
  };
}

export function setFlagSetListProduct(bool = true) {
  return {
    type: Types.SET_FLAG_SET_LIST_PRODUCT,
    payload: bool,
  };
}
