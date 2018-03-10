import querystring from 'querystring';
import dateformat from 'dateformat';

import { smallBox, bigBox, SmartMessageBox } from "../components/common/message_actions";

const LINK = {
    LOGIN: "dang-nhap",
    ACCOUNT: "tai-khoan",
    PRODUCT: "san-pham",
    ADD_CUSTOMER: 'them-khach-hang',
    SAVE_BILL: 'don-hang-dang-luu',
    DASHBOARD: "dashboard",
    CATEGORY: "danh-muc",
    CAMPAIGN: "chien-dich-khuyen-mai",
    WIDGET: "widget",
    INVOICE: "don-hang",
    VENDOR: "nha-cung-cap",
    DELIVERY: "don-vi-van-chuyen",
    PAYMENT_METHOD: "phuong-thuc-thanh-toan"
};

const BIGBOX = {
    SUCESS: {
        color: "#739E73",
        icon: "fa fa-check"
    },
    WARNING: {
        color: "#C79121",
        icon: "fa fa-shield fadeInLeft animated",
    },
    ERROR: {
        color: "#C46A69",
        icon: "fa fa-warning shake animated",
    },
    INFO: {
        color: "#3276B1",
        icon: "fa fa-bell swing animated",
    }
}

export {
    LINK,
    BIGBOX
}

export default class {

    static link(type, slug = "", query = null) {
        let prefix = "";
        let suffix = "";
        switch (type) {
            case "dang-nhap":
                prefix = '/dang-nhap/';
                break;
            case "san-pham":
                prefix = '/san-pham/';
                if (query) {
                    let qs = {};
                    let page = query.page;
                    if (page) {
                        qs['p'] = page;
                    }
                    let title = query.title;
                    if (title) {
                        qs['t'] = title;
                    }
                    let productId = query.id;
                    if (productId) {
                        qs['id'] = productId;
                    }
                    let limit = query.limit;
                    if (limit) {
                        qs['l'] = limit;
                    }
                    suffix += "?" + querystring.stringify(qs);
                }
                break;
            case "them-khach-hang":
                prefix = '/them-khach-hang/';
                if (query) {
                    let qs = {};
                    let page = query.page;
                    if (page) {
                        qs['p'] = page;
                    }
                    let title = query.title;
                    if (title) {
                        qs['t'] = title;
                    }
                    let productId = query.id;
                    if (productId) {
                        qs['id'] = productId;
                    }
                    let limit = query.limit;
                    if (limit) {
                        qs['l'] = limit;
                    }
                    suffix += "?" + querystring.stringify(qs);
                }
                break;
            case "don-hang-dang-luu":
                prefix = '/don-hang-dang-luu/';
                if (query) {
                    let qs = {};
                    let page = query.page;
                    if (page) {
                        qs['p'] = page;
                    }
                    let title = query.title;
                    if (title) {
                        qs['t'] = title;
                    }
                    let productId = query.id;
                    if (productId) {
                        qs['id'] = productId;
                    }
                    let limit = query.limit;
                    if (limit) {
                        qs['l'] = limit;
                    }
                    suffix += "?" + querystring.stringify(qs);
                }
                break;
            case "tai-khoan":
                prefix = '/tai-khoan/';
                if (query) {
                    let qs = {};
                    let page = query.page;
                    if (page) {
                        qs['p'] = page;
                    }
                    suffix += "?" + querystring.stringify(qs);
                }
                break;
            case "danh-muc":
                prefix = '/danh-muc/';
                break;
            case "chien-dich-khuyen-mai":
                prefix = '/van-hanh/van-hanh/chien-dich-khuyen-mai/';
                if (query) {
                    let qs = {};
                    let page = query.page;
                    if (page) {
                        qs['p'] = page;
                    }
                    let title = query.title;
                    if (title) {
                        qs['t'] = title;
                    }

                    let limit = query.limit;
                    if (limit) {
                        qs['l'] = limit;
                    }
                    suffix += "?" + querystring.stringify(qs);
                }
                break;
            case "widget":
                prefix = '/noi-dung/';
                if (query) {
                    let qs = {};
                    let page = query.page;
                    if (page) {
                        qs['p'] = page;
                    }
                    let title = query.title;
                    if (title) {
                        qs['t'] = title;
                    }

                    let limit = query.limit;
                    if (limit) {
                        qs['l'] = limit;
                    }
                    suffix += "?" + querystring.stringify(qs);
                }
                break;
            case "don-hang":
                prefix = '/tra-cuu/don-hang/';
                break;
            case "nha-cung-cap":
                prefix = '/nha-cung-cap/';
                if (query) {
                    let qs = {};
                    let page = query.page;
                    if (page) {
                        qs['p'] = page;
                    }
                    // let title = query.title;
                    // if (title) {
                    //     qs['t'] = title;
                    // }
                    let isActive = query.isActive;
                    qs['isActive'] = isActive;

                    let limit = query.limit;
                    if (limit) {
                        qs['l'] = limit;
                    }
                    suffix += "?" + querystring.stringify(qs);
                }
                break;
            case "don-vi-van-chuyen":
                prefix = '/don-vi-van-chuyen/';
                if (query) {
                    let qs = {};
                    let page = query.page;
                    if (page) {
                        qs['p'] = page;
                    }
                    // let title = query.title;
                    // if (title) {
                    //     qs['t'] = title;
                    // }
                    let title = query.title;
                    qs['title'] = title;

                    let limit = query.limit;
                    if (limit) {
                        qs['l'] = limit;
                    }
                    suffix += "?" + querystring.stringify(qs);
                }
                break;
            case "phuong-thuc-thanh-toan":
                prefix = '/phuong-thuc-thanh-toan/';
                if (query) {
                    let qs = {};
                    let page = query.page;
                    if (page) {
                        qs['p'] = page;
                    }
                    // let title = query.title;
                    // if (title) {
                    //     qs['t'] = title;
                    // }
                    let title = query.title;
                    qs['title'] = title;

                    let limit = query.limit;
                    if (limit) {
                        qs['l'] = limit;
                    }
                    suffix += "?" + querystring.stringify(qs);
                }
                break;

            case "dashboard":
                prefix = '/';
                break;
        }

        return prefix + slug + suffix;
    }

    static formatDate(date, type = "full") {
        // console.log(date);
        switch (type) {
            case 'full':
                return dateformat(date, 'dd/mm/yyyy HH:MM:ss');
            case 'date':
                return dateformat(date, 'dd/mm/yyyy');
            case 'time':
                return dateformat(date, 'HH:MM');
        }
    }


    static formatPrice(price) {
        return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }

    static fullName(user) {
        return user.firstName !== "" && user.lastName !== "" ? user.lastName + " " + user.firstName : user.phone;
    }

    static fullAddress(address, geoLocationList) {
        let geoLocations = [];
        if (address && geoLocationList[address.geoLocationId]) {
            geoLocationList[address.geoLocationId].parents.map(geo => {
                geoLocations.push(geoLocationList[geo.geoLocationId].title);
            });
            geoLocations.push(geoLocationList[address.geoLocationId].title);
            geoLocations.reverse();
        }

        return geoLocations.join(' ,');
    }

    static image(images, size = null) {
        let image = images[0].url;

        for (let i in images) {
            let ii = images[i];
            if (ii.isDefault) {
                image = ii.url;
                break;
            }
        }

        let imageParse = image.split('.');
        let ext = imageParse.slice(-1);
        let thumb = imageParse.slice(0, -1).join(".") + (size ? "_" + size + "x0." : ".") + ext;

        thumb = "http://abc.9link.mobi/v1/file/" + thumb;
        return thumb;
    }

    static buildDate(now) {
        let day = now.getDate();
        day = day < 10 ? "0" + day : day;
        let month = now.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        return day + "/" + month + "/" + now.getFullYear();
    }

    static urlToAttribute(searchQuery, raw = false) {
        let attributes = [];
        if (searchQuery !== "") {
            searchQuery = searchQuery.slice(1);
            let query = querystring.parse(searchQuery);
            let a = query.a;
            if (a) {
                a = a.split("||");
                attributes = a.map(i => {
                    let s = i.split(":");
                    let t = s[0].split("|");
                    let r = s[1].split("|");
                    r = r.length === 1 ? { value: r[0] } : { from: parseInt(r[0]), to: parseInt(r[1]) };

                    return !raw ? {
                        code: t[0],
                        type: t[1],
                        filter: r
                    } : {
                            [s[0]]: r
                        }
                });
            }
        }
        return attributes;
    }

    static urlToOrder(searchQuery) {
        let order = {
            updated: "DESC"
        };
        if (searchQuery) {
            searchQuery = searchQuery.slice(1);
            let query = querystring.parse(searchQuery);
            let o = query.o;
            if (o) {
                order = {};
                o = o.split('|');
                o.map(e => {
                    let s = e.split(":");
                    order[s[0]] = s[1];
                })
            }
        }
        return order;
    }

    static parseQuery(query) {
        if (query[0] === "?") {
            query = query.slice(1);
        }
        return querystring.parse(query);

    }

    static confirmBox(title, content, callbackOK, callbackCancel) {
        SmartMessageBox({
            title,
            content,
            buttons: '[Không][Có]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Có") {
                callbackOK && callbackOK();

            }
            if (ButtonPressed === "Không") {
                callbackCancel && callbackCancel();
            }
        });
    }

    static smallBox(title, content, type, timeout = 2000) {
        smallBox({
            title,
            content: "<i class='fa fa-clock-o'></i> <i>" + content + "</i>",
            color: type.color,
            iconSmall: type.icon,
            timeout: timeout
        });
    }

    static bigBox(title, content, type, timeout = 5000) {
        bigBox({
            title,
            content,
            color: type.color,
            //timeout: 6000,
            icon: type.icon,
            // number: "1",
            timeout
        });
    }

}