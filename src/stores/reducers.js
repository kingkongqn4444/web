import {
    combineReducers
} from 'redux';

import {
    routerReducer
} from 'react-router-redux'

import app from './states/app/reducer';
import authenticate from './states/authenticate/reducer';
import product from './states/product/reducer';
import widget from './states/widget/reducer';
import vendor from './states/vendor/reducer';
import storage from './states/storage/reducer';

export default combineReducers({
    app,
    authenticate,
    product,
    widget,
    vendor,
    storage,    
    router: routerReducer
});