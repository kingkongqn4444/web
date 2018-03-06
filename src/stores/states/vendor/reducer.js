import Types from './';
import createReducer from '../';

const INIT_STATE = ({
    list: [],
    total: 0,
    offset: 0,
    message:""
});

export default createReducer(INIT_STATE, {

    [Types.REQUEST_LIST]: (state, action) => {
        // console.log(action)
        return {
            ...state,
            list: [],
            total: 0,
        };
    },

    [Types.REQUEST_LIST_SUCCESS]: (state, action) => {
        return {
            ...state,
            list: action.response.items,
            total: action.response.totalRows,
            // offset: action.payload.payload.start
        };
    },

    [Types.REQUEST_DETAIL_SUCCESS]: (state, action) => {
        return {
            ...state,
            detail: action.response
            // list: action.response.items,
            // total: action.response.totalRows,
            // offset: action.payload.payload.start
        };
    },
    [Types.REQUEST_CREATE_SUCCESS]: (state, action) => {
        return {
            ...state,
            message: action.response
            // list: action.response.items,
            // total: action.response.totalRows,
            // offset: action.payload.payload.start
        };
    },
    [Types.REQUEST_CREATE_FAIL]: (state, action) => {
        return {
            ...state,
            message: action.response
            // list: action.response.items,
            // total: action.response.totalRows,
            // offset: action.payload.payload.start
        };
    },
    [Types.REQUEST_UPDATE_SUCCESS]: (state, action) => {
        return {
            ...state,
            message: action.response
            // list: action.response.items,
            // total: action.response.totalRows,
            // offset: action.payload.payload.start
        };
    },
    [Types.REQUEST_DELETE_SUCCESS]: (state, action) => {
        return {
            ...state,
            message: action.response
            // list: action.response.items,
            // total: action.response.totalRows,
            // offset: action.payload.payload.start
        };
    },
});