import {call, put, takeLatest} from 'redux-saga/effects'

import Types from './';
import API from "../../../utils/api";

function* requestList(action) {
    let response = yield call(API.request, action.payload);
    if (response.code === 2410) {
        yield put({
            ...action,
            type: Types.REQUEST_LIST_SUCCESS,
            response: response.data
        });
    } else {
        yield put({
            ...action,
            type: Types.REQUEST_LIST_FAIL,
            response
        });
    }
}
function* requestDetail(action) {
    let response = yield call(API.request, action.payload);
    if (response.code === 2420) {
        yield put({
            ...action,
            type: Types.REQUEST_DETAIL_SUCCESS,
            response: response.data
        });
    } else {
        yield put({
            ...action,
            type: Types.REQUEST_DETAIL_FAIL,
            response
        });
    }
}
function* requestCreate(action) {
    let response = yield call(API.request, action.payload);
    if (response.code === 2430) {
        yield put({
            ...action,
            type: Types.REQUEST_CREATE_SUCCESS,
            response: response.data
        });
    } else {
        yield put({
            ...action,
            type: Types.REQUEST_CREATE_FAIL,
            response
        });
    }
}
function* requestUpdate(action) {
    let response = yield call(API.request, action.payload);
    if (response.code === 2440) {
        yield put({
            ...action,
            type: Types.REQUEST_UPDATE_SUCCESS,
            response: response.data
        });
    } else {
        yield put({
            ...action,
            type: Types.REQUEST_UPDATE_FAIL,
            response
        });
    }
}
function* requestDelete(action) {
    let response = yield call(API.request, action.payload);
    if (response.code === 2450) {
        yield put({
            ...action,
            type: Types.REQUEST_DELETE_SUCCESS,
            response: response.data
        });
    } else {
        yield put({
            ...action,
            type: Types.REQUEST_DELETE_FAIL,
            response
        });
    }
}
export default function* saga() {
    yield takeLatest(Types.REQUEST_LIST, requestList);
    yield takeLatest(Types.REQUEST_DETAIL, requestDetail);
    yield takeLatest(Types.REQUEST_CREATE, requestCreate);
    yield takeLatest(Types.REQUEST_UPDATE, requestUpdate);
    yield takeLatest(Types.REQUEST_DELETE, requestDelete);
}