import Types from './';
import createReducer from '../';

const INIT_STATE = ({
    submitOrder: [],
    addCustomer: [],
});

export default createReducer(INIT_STATE, {


    [Types.SUBMIT_ORDER_SUCCESS]: (state, action) => {
        return {
            ...state,
            submitOrder: action.response
        };
    },

    [Types.ADD_CUSTOMER_SUCCESS]: (state, action) => {
        console.log('ssssssssssssssssssssdasdasd11111', action)
        return {
            ...state,
            addCustomer: action.response
        };
    },
});