import { call, put, takeLatest, all } from 'redux-saga/effects'

import Types from './';
import API from "../../../utils/api";

function* addProduct(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.ADD_PRODUCT_SUCCESS, response });
}

function* listSup(action) {
    let response = yield call(API.request, action.payload);
    yield put({ ...action, type: Types.LIST_ALL_SUP_SUCCESS, response });
}



export default function* saga() {
    yield all([
        yield takeLatest(Types.ADD_PRODUCT, addProduct),
        yield takeLatest(Types.LIST_ALL_SUP, listSup)
    ])

}