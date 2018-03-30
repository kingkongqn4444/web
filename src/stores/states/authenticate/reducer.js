import Types from "./";
import createReducer from "../";

const INIT_STATE = {
  login: "",
  token: "",
  listProduct: [],
  allProduct: [],
  allCustomer: [],
  listOrder: [],
  detailOrder: [],
  deleteCustomer: [],
  addCustomer: [],
  detailCustomer: [],
  editOrder: [],
  addOutlet: [],
  listOutlet: [],
  register: [],

  addUser: [],
  detailAdmin: [],
  updateUser: [],
  detailUser: [],
  changePassword: [],

  sendCode: [],
  resetPass: [],
  error: "",
  success: "",

  flagLogin: true,
  flagRegister: true,
  flagListProduct: true,
  flagDeleteCustomer: true,
  flagSendCode: true,
  flagResetPass: true,
};

export default createReducer(INIT_STATE, {
  [Types.REQUEST_LOGOUT]: (state, action) => {
    return {
      ...state,
      socialInfo: {},
      userInfo: {},
    };
  },

  [Types.LOGIN]: (state, action) => {
    return {
      ...state,
      login: action.response,
      flagLogin: false,
    };
  },

  [Types.LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      login: action.response,
      token: action.response.access_token,
      error: action.response.error,
    };
  },

  [Types.REGISTER_SUCCESS]: (state, action) => {
    return {
      ...state,
      register: action.response,
      error: action.response.message,
      success: action.response.message,
      flagRegister: false,
    };
  },

  [Types.GET_ALL_PRODUCT]: (state, action) => {
    console.log("asdkjasdkljasdasjdlkasdasda", action);
    return {
      ...state,
      allProduct: action.response,
      flagListProduct: false,
    };
  },

  [Types.GET_ALL_PRODUCT_SUCCESS]: (state, action) => {
    return {
      ...state,
      allProduct: action.response,
    };
  },

  [Types.GET_ALL_CUSTOMER]: (state, action) => {
    return {
      ...state,
      allCustomer: action.response,
    };
  },

  [Types.GET_ALL_CUSTOMER_SUCCESS]: (state, action) => {
    return {
      ...state,
      allCustomer: action.response,
    };
  },

  [Types.GET_LIST_ORDER]: (state, action) => {
    return {
      ...state,
      listOrder: action.response,
    };
  },

  [Types.GET_LIST_ORDER_SUCCESS]: (state, action) => {
    return {
      ...state,
      listOrder: action.response,
    };
  },

  [Types.DETAIL_ORDER]: (state, action) => {
    return {
      ...state,
      detailOrder: action.response,
    };
  },

  [Types.DETAIL_ORDER_SUCCESS]: (state, action) => {
    return {
      ...state,
      detailOrder: action.response,
    };
  },

  [Types.DELETE_CUSTOMER]: (state, action) => {
    return {
      ...state,
      deleteCustomer: action.response,
    };
  },

  [Types.DELETE_CUSTOMER_SUCCESS]: (state, action) => {
    return {
      ...state,
      deleteCustomer: action.response,
      flagDeleteCustomer: false,
    };
  },

  [Types.ADD_CUSTOMER_SUCCESS]: (state, action) => {
    return {
      ...state,
      addCustomer: action.response,
    };
  },

  [Types.DETAIL_CUSTOMER]: (state, action) => {
    return {
      ...state,
      detailCustomer: action.response,
    };
  },

  [Types.DETAIL_CUSTOMER_SUCCESS]: (state, action) => {
    return {
      ...state,
      detailCustomer: action.response,
    };
  },

  [Types.EDIT_ORDER_SUCCESS]: (state, action) => {
    return {
      ...state,
      editOrder: action.response,
    };
  },

  [Types.ADD_OUTLET_SUCCESS]: (state, action) => {
    return {
      ...state,
      addOutlet: action.response,
    };
  },

  [Types.LIST_OUTLET_SUCCESS]: (state, action) => {
    return {
      ...state,
      listOutlet: action.response,
    };
  },

  [Types.ADD_USER_SUCCESS]: (state, action) => {
    return {
      ...state,
      addUser: action.response,
    };
  },

  [Types.DETAIL_ADMIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      detailAdmin: action.response,
    };
  },

  [Types.UPDATE_USER_SUCCESS]: (state, action) => {
    return {
      ...state,
      updateUser: action.response,
    };
  },

  [Types.DETAIL_USER_SUCCESS]: (state, action) => {
    return {
      ...state,
      detailUser: action.response,
    };
  },

  [Types.SEND_CODE_SUCCESS]: (state, action) => {
    return {
      ...state,
      sendCode: action.response,
      success: action.response.message,
      error: action.response.message,
      flagSendCode: false,
    };
  },

  [Types.RESET_PASSWORD_SUCCESS]: (state, action) => {
    return {
      ...state,
      resetPass: action.response,
      success: action.response.message,
      error: action.response.message,
      flagResetPass: false,
    };
  },

  [Types.CHANGE_PASSWORD_ADMIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      changePassword: action.response,
      error: action.response.message,
      success: action.response.message,
    };
  },

  // Flag

  [Types.SET_FLAG_SET_LIST_PRODUCT]: (state, action) => {
    return {
      ...state,
      flagListProduct: action.payload,
    };
  },

  [Types.SET_FLAG_DELETE_CUSTOMER]: (state, action) => {
    return {
      ...state,
      flagDeleteCustomer: action.payload,
    };
  },

  [Types.SET_FLAG_LOGIN]: (state, action) => {
    return {
      ...state,
      flagLogin: action.payload,
    };
  },

  [Types.SET_FLAG_REGISTER]: (state, action) => {
    return {
      ...state,
      flagRegister: action.payload,
    };
  },

  [Types.SET_FLAG_SENDCODE]: (state, action) => {
    return {
      ...state,
      flagSendCode: action.payload,
    };
  },

  [Types.SET_FLAG_RESET_PASS]: (state, action) => {
    return {
      ...state,
      flagResetPass: action.payload,
    };
  },
});
