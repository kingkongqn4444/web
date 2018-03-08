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
});