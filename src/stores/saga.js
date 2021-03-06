import { call, put, takeLatest, all } from "redux-saga/effects";
import app from "./states/app/saga";
import authenticate from "./states/authenticate/saga";
import product from "./states/product/saga";
export default function* sagaRoot() {
  yield all([app(), authenticate(), product()]);
}
