import { call, put, takeLatest } from 'redux-saga/effects'

import Types from './';
import API from '../../../utils/api';


function* login(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.LOGIN_SUCCESS, response });
}

function* listProduct(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.GET_LIST_PRODUCT_SUCCESS, response });
}


function* submit(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.SUBMIT_ORDER_SUCCESS, response });
}

function* allProduct(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.GET_ALL_PRODUCT_SUCCESS, response });
}

function* allCustomer(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.GET_ALL_CUSTOMER_SUCCESS, response });
}

function* listOrder(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.GET_LIST_ORDER_SUCCESS, response });
}


function* detailOrder(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.DETAIL_ORDER_SUCCESS, response });
}

function* deleteCustomer(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.DELETE_CUSTOMER_SUCCESS, response });
}

function* addCustomer(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.ADD_CUSTOMER_SUCCESS, response });
}

function* detailCustomer(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.DETAIL_CUSTOMER_SUCCESS, response });
}

function* editOrder(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.EDIT_ORDER_SUCCESS, response });
}

function* addOutlet(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.ADD_OUTLET_SUCCESS, response });
}

function* listOutlet(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.LIST_OUTLET_SUCCESS, response });
}

function* register(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.REGISTER_SUCCESS, response });
}

export default function* saga() {
    yield takeLatest(Types.REGISTER, register);
    yield takeLatest(Types.LIST_OUTLET, listOutlet);
    yield takeLatest(Types.ADD_OUTLET, addOutlet);
    yield takeLatest(Types.EDIT_ORDER, editOrder);
    yield takeLatest(Types.DETAIL_CUSTOMER, detailCustomer);
    yield takeLatest(Types.ADD_CUSTOMER, addCustomer);
    yield takeLatest(Types.DELETE_CUSTOMER, deleteCustomer);
    yield takeLatest(Types.DETAIL_ORDER, detailOrder);
    yield takeLatest(Types.GET_LIST_ORDER, listOrder);
    yield takeLatest(Types.GET_ALL_CUSTOMER, allCustomer);
    yield takeLatest(Types.GET_ALL_PRODUCT, allProduct);
    yield takeLatest(Types.SUBMIT_ORDER, submit);
    yield takeLatest(Types.LOGIN, login);
    yield takeLatest(Types.GET_LIST_PRODUCT, listProduct);
}