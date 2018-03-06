import Types from './';
import createReducer from '../';

const INIT_STATE = ({
    list: [],
    total: 0,
    detail: {},
    status: 0
});

export default createReducer(INIT_STATE, {

    [Types.REQUEST_LIST]: (state, action) => {
        return {
            ...state,
        };
    },

    [Types.REQUEST_LIST_SUCCESS]: (state, action) => {
        console.log(action);
        return {
            ...state,
            list: action.response.items,
            total: action.response.totalRows,
        };
    },

    [Types.REQUEST_DETAIL_SUCCESS]: (state, action) => {
        return {
            ...state,
            detail: action.response
        };
    },

    [Types.REQUEST_CREATE]: (state, action) => {
        return {
            ...state,
            status: 0
        };
    },

    [Types.REQUEST_CREATE_SUCCESS]: (state, action) => {
        return {
            ...state,
            status: 1
        };
    },

    [Types.REQUEST_UPDATE]: (state, action) => {
        return {
            ...state,
            status: 0
        };
    },

    [Types.REQUEST_UPDATE_SUCCESS]: (state, action) => {
        return {
            ...state,
            status: 5
        };
    },

    [Types.REQUEST_DELETE]: (state, action) => {
        return {
            ...state,
            status: 0
        };
    },

    [Types.REQUEST_DELETE_SUCCESS]: (state, action) => {
        return {
            ...state,
            status: 10
        };
    },
});