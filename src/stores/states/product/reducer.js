import Types from "./";
import createReducer from "../";

const INIT_STATE = {
  addProduct: [],
  listSup: [],
};

export default createReducer(INIT_STATE, {
  [Types.ADD_PRODUCT]: (state, action) => {
    return {
      ...state,
      addProduct: action.response,
    };
  },

  [Types.ADD_PRODUCT_SUCCESS]: (state, action) => {
    return {
      ...state,
      addProduct: action.response,
    };
  },

  [Types.LIST_ALL_SUP]: (state, action) => {
    return {
      ...state,
      listSup: action.response,
    };
  },

  [Types.LIST_ALL_SUP_SUCCESS]: (state, action) => {
    return {
      ...state,
      listSup: action.response,
    };
  },
});
