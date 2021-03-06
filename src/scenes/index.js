import React from 'react';
import {
    render
} from 'react-dom';

import {
    Provider
} from 'react-redux';
import {
    Route,
    Switch
} from 'react-router';

import {
    ConnectedRouter
} from 'react-router-redux';

// import registerServiceWorker from '../registerServiceWorker';

import Store, {
    history
} from '../stores';

import Launcher from './launcher';

import Dashboard from './dashboard';
import Login from './login';
import Account from './account';

import Product from './catalog/product';
import Category from './catalog/category';
import Attribute from './catalog/attribute';

import Delivery from './sales/delivery';
import Geolocation from './manage/geolocation';
// import Logs from './manage/logs';
import Monitor from './manage/monitor';
import Campaign from './operate/campaign';
import Report from './report';
import Search from './search';
import Stock from './sales/stock';
import Vendor from './sales/vendor';
import Widget from './operate/widget';
import PaymentMethod from './sales/payment_method';

import Configs from '../configs';

Configs.load('app');
Configs.load('navigation');

render(
    <Provider store={Store}>
        <ConnectedRouter history={history}>
            <Launcher>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/dang-nhap" component={Login} />
                    <Route path="/tai-khoan/:action/:id" component={Account} />
                    <Route path="/tai-khoan/:action" component={Account} />
                    <Route path="/sales/attribute/:action" component={Attribute} />
                    <Route path="/don-vi-van-chuyen/:action" component={Delivery} />
                    <Route path="/danh-muc/:action" component={Category} />
                    <Route path="/danh-muc" component={Category} />

                    <Route path="/san-pham/:action" component={Product} />
                    <Route path="/san-pham" component={Product} />

                    <Route path="/them-khach-hang/:action" component={Attribute} />
                    <Route path="/them-khach-hang" component={Attribute} />

                    <Route path="/manage/geolocation/:action" component={Geolocation} />
                    {/*<Route  path="/manage/logs/:action" component={Logs}/>*/}
                    {/*<Route path="/manage/monitor/:action" component={Monitor}/>*/}
                    <Route path="/phuong-thuc-thanh-toan/:action" component={PaymentMethod} />

                    <Route path="/van-hanh/chien-dich-khuyen-mai/:action/:id" component={Campaign} />
                    <Route path="/van-hanh/chien-dich-khuyen-mai/:action" component={Campaign} />
                    <Route path="/thong-ke/:action" component={Report} />
                    <Route path="/tra-cuu/:action/:id" component={Search} />
                    <Route path="/tra-cuu/:action" component={Search} />
                    <Route path="/sales/stock/:action" component={Stock} />
                    <Route path="/nha-cung-cap/:action" component={Vendor} />

                    <Route path="/noi-dung/:action" component={Widget} />
                    <Route path="/noi-dung" component={Widget} />
                </Switch>
            </Launcher>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();
