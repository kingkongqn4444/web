import { call, put, takeLatest } from 'redux-saga/effects'

import Types from './';
import API from "../../../utils/api";

function* submitOrder(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.SUBMIT_ORDER_SUCCESS, response });
}

function* addCustomer(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.ADD_CUSTOMER_SUCCESS, response });
}

export default function* saga() {
    yield takeLatest(Types.SUBMIT_ORDER, submitOrder);
    yield takeLatest(Types.ADD_CUSTOMER, addCustomer);
}