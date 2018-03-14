import Types from './';
import createReducer from '../';

const INIT_STATE = ({
    addProduct: []
});

export default createReducer(INIT_STATE, {

    [Types.ADD_PRODUCT]: (state, action) => {
        return {
            ...state,
            addProduct: action.response
        };
    },

    [Types.ADD_PRODUCT_SUCCESS]: (state, action) => {
        console.log('asdadkasdjkasdjkadasdasdasdas', action)
        return {
            ...state,
            addProduct: action.response
        };
    },
});