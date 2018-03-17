import Types from "./";

export function removeAccessToken() {
  return {
    type: Types.REMOVE_TOKEN,
    storage: {
      method: "remove",
      payload: "token",
    },
  };
}

export function getAccessToken() {
  return {
    type: Types.GET_TOKEN,
    storage: {
      method: "get",
      payload: "token",
    },
  };
}

export function setAccessToken(token) {
  return {
    type: Types.SET_TOKEN,
    storage: {
      method: "set",
      payload: {
        token,
      },
    },
  };
}

export function setListBill(data) {
  return {
    type: Types.SET_DATA,
    storage: {
      key: "SAVE_DATA",
      method: "setObject",
      payload: {
        data,
      },
    },
  };
}

export function getListBill() {
  return {
    type: Types.GET_DATA,
    storage: {
      key: "SAVE_DATA",
      method: "getObject",
      payload: "data",
    },
  };
}

export function clearListBill() {
  return {
    type: Types.REMOVE_LIST_DATA,
    storage: {
      method: "remove",
      payload: "data",
    },
  };
}

// list all product
export function setListProduct(data) {
  return {
    type: Types.SET_LIST_ALL_PRODUCT,
    storage: {
      key: "LIST_ALL_PRODUCT",
      method: "setArray",
      payload: {
        data,
      },
    },
  };
}

export function getListProduct() {
  return {
    type: Types.GET_LIST_ALL_PRODUCT,
    storage: {
      key: "LIST_ALL_PRODUCT",
      method: "getArray",
      payload: "data",
    },
  };
}
