import Types from './';
import createReducer from '../';

const INIT_STATE = ({
    login: '',
    token: "",
    listProduct: [],
    submitOrder: [],
    allProduct: [],
    allCustomer: [],
    listOrder: [],
    detailOrder: [],
    deleteCustomer: [],
    addCustomer: [],
    detailCustomer: [],
    editOrder: [],
    addOutlet: [],
    listOutlet: []
});

export default createReducer(INIT_STATE, {

    [Types.REQUEST_LOGOUT]: (state, action) => {
        return {
            ...state,
            socialInfo: {},
            userInfo: {},
        };
    },

    [Types.LOGIN_SUCCESS]: (state, action) => {
        return {
            ...state,
            login: action.response,
            token: action.response.access_token
        };
    },

    [Types.GET_LIST_PRODUCT_SUCCESS]: (state, action) => {

        return {
            ...state,
            listProduct: action.response,
        };
    },


    [Types.SUBMIT_ORDER]: (state, action) => {

        return {
            ...state,
            submitOrder: action.response
        };
    },

    [Types.SUBMIT_ORDER_SUCCESS]: (state, action) => {
        return {
            ...state,
            submitOrder: action.response
        };
    },

    [Types.GET_ALL_PRODUCT]: (state, action) => {
        return {
            ...state,
            allProduct: action.response
        };
    },

    [Types.GET_ALL_PRODUCT_SUCCESS]: (state, action) => {
        return {
            ...state,
            allProduct: action.response
        };
    },

    [Types.GET_ALL_CUSTOMER]: (state, action) => {
        return {
            ...state,
            allCustomer: action.response
        };
    },

    [Types.GET_ALL_CUSTOMER_SUCCESS]: (state, action) => {
        return {
            ...state,
            allCustomer: action.response
        };
    },

    [Types.GET_LIST_ORDER]: (state, action) => {
        return {
            ...state,
            listOrder: action.response
        };
    },

    [Types.GET_LIST_ORDER_SUCCESS]: (state, action) => {
        return {
            ...state,
            listOrder: action.response.data
        };
    },

    [Types.DETAIL_ORDER]: (state, action) => {
        return {
            ...state,
            detailOrder: action.response
        };
    },

    [Types.DETAIL_ORDER_SUCCESS]: (state, action) => {
        return {
            ...state,
            detailOrder: action.response
        };
    },

    [Types.DELETE_CUSTOMER]: (state, action) => {
        return {
            ...state,
            deleteCustomer: action.response
        };
    },

    [Types.DELETE_CUSTOMER_SUCCESS]: (state, action) => {
        return {
            ...state,
            deleteCustomer: action.response
        };
    },

    [Types.ADD_CUSTOMER_SUCCESS]: (state, action) => {
        return {
            ...state,
            addCustomer: action.response
        };
    },

    [Types.DETAIL_CUSTOMER]: (state, action) => {
        return {
            ...state,
            detailCustomer: action.response
        };
    },



    [Types.DETAIL_CUSTOMER_SUCCESS]: (state, action) => {
        return {
            ...state,
            detailCustomer: action.response
        };
    },

    [Types.EDIT_ORDER_SUCCESS]: (state, action) => {
        return {
            ...state,
            editOrder: action.response
        };
    },

    [Types.ADD_OUTLET_SUCCESS]: (state, action) => {
        return {
            ...state,
            addOutlet: action.response
        };
    },

    [Types.LIST_OUTLET_SUCCESS]: (state, action) => {
        console.log('asdasdasdasdasdashfsjfhsfsdfss', action)
        return {
            ...state,
            listOutlet: action.response.data
        };
    },




});