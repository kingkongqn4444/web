import Types from './';
import createReducer from '../';

const INIT_STATE = ({
    token: "-",
    dataProduct: []
});

export default createReducer(INIT_STATE, {

    [Types.REMOVE_TOKEN]: (state, action) => {
        return {
            ...state,
            token: action.storage.payload.token,
        };
    },


    [Types.SET_TOKEN]: (state, action) => {
        return {
            ...state,
            token: action.storage.payload.token
        };
    },

    [Types.SET_DATA]: (state, action) => {
        return {
            ...state,
            dataProduct: action.storage.payload
        };
    },

    [Types.GET_TOKEN]: (state, action) => {
        return {
            ...state,
            token: action.response
        };
    },
});