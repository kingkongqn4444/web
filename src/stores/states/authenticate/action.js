import Types from "./";
import Configs from "../../../config";
import md5 from "md5";
export function login(data) {
  return {
    type: Types.LOGIN,
    payload: {
      api: Configs.API + "login",
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
      api: Configs.API + "register",
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
      api: Configs.API + "outlet-product",
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
      api: Configs.API + "outlet-product",
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
      api: Configs.API + "customerAll",
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
      api: Configs.API + "customer/delete",
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
      api: Configs.API + "customerDetail",
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
      api: Configs.API + "customer",
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
      api: Configs.API + "productAll",
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
      api: Configs.API + "order/" + id,
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
      api: Configs.API + "orderAll",
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
      api: Configs.API + "order/" + id,
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

export function addUser(token, data) {
  return {
    type: Types.ADD_USER,
    payload: {
      token: token,
      api: Configs.API + "user/addUser",
      method: "POST",
      payload: {
        email: data.name,
        password: data.pass,
      },
    },
  };
}

export function updateUser(token, id, status) {
  return {
    type: Types.UPDATE_USER,
    token: token,
    payload: {
      token: token,
      api: Configs.API + "user/update",
      method: "PUT",
      payload: {
        is_active: status ? 1 : 0,
        id: parseInt(id),
      },
    },
  };
}

export function detailUser(token, id) {
  return {
    type: Types.DETAIL_USER,
    payload: {
      token: token,
      api: Configs.API + "user/find",
      method: "POST",
      payload: {
        id: parseInt(id),
      },
    },
  };
}

export function sendCodePassword(email) {
  return {
    type: Types.SEND_CODE,
    payload: {
      api: Configs.API + "sendCode",
      method: "POST",
      payload: {
        email,
      },
    },
  };
}

export function resetPassword(code, email, password) {
  return {
    type: Types.RESET_PASSWORD,
    payload: {
      api: Configs.API + "reset-password",
      method: "POST",
      payload: {
        code,
        email,
        password,
      },
    },
  };
}

export function detailAdmin(token) {
  return {
    type: Types.DETAIL_ADMIN,
    payload: {
      token: token,
      api: Configs.API + "user/detail",
      method: "GET",
      payload: {},
    },
  };
}

export function changePasswordAdmin(token, data) {
  return {
    type: Types.CHANGE_PASSWORD_ADMIN,
    payload: {
      token: token,
      api: Configs.API + "user/change-password",
      method: "PUT",
      payload: {
        password: data.pass,
        old_password: data.oldPassword,
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

export function setFlagLogin(bool = true) {
  return {
    type: Types.SET_FLAG_LOGIN,
    payload: bool,
  };
}

export function setFlagRegister(bool = true) {
  return {
    type: Types.SET_FLAG_REGISTER,
    payload: bool,
  };
}

export function setFlagSendCode(bool = true) {
  return {
    type: Types.SET_FLAG_SENDCODE,
    payload: bool,
  };
}

export function setFlagResetPass(bool = true) {
  return {
    type: Types.SET_FLAG_RESET_PASS,
    payload: bool,
  };
}

export function setFlagDeleteCustomer(bool = true) {
  return {
    type: Types.SET_FLAG_DELETE_CUSTOMER,
    payload: bool,
  };
}
