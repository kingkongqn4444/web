import Types from './';
import Configs from "../../../configs";


export function requestList(filter, start = 0, limit = 20,token) {
    return {
        type: Types.REQUEST_LIST,
        payload: {
            api: Configs['app'].BACKEND_API + '/Vendor/Search',
            method: 'POST',
            payload: {
                filter,
                start,
                limit
            },token
        }
    }
}

export function requestDetail(vendorId,token) {
    return {
        type: Types.REQUEST_DETAIL,
        payload: {
            api: Configs['app'].BACKEND_API + '/Vendor/' + vendorId,
            method: 'GET'
        },
        token
    }
}

export function requestCreate(data,token) {
    return {
        type: Types.REQUEST_CREATE,
        payload: {
            api: Configs['app'].BACKEND_API + '/Vendor/',
            method: 'POST',
            payload: {
                title: data.title,
                slug: data.slug,
                address:data.address,
                geoLocation:data.geoLocation,
                logo: data.logo,
                description: data.description,
                phoneContact: data.phoneContact,
                emailContact: data.emailContact,
                metadata: data.metadata,
                delivery: data.delivery,
                paymentMethod: data.paymentMethod,
                status: data.status,
                isActive: data.isActive,
                isDelete:false
            },token
        }
    }
}

export function requestUpdate(data,token) {
    return {
        type: Types.REQUEST_UPDATE,
        payload: {
            api: Configs['app'].BACKEND_API + '/Vendor/' + data.vendorId,
            method: 'PUT',
            payload: {
                title: data.title,
                slug: data.slug,
                address:data.address,
                geoLocation:data.geoLocation,
                logo: data.logo,
                description: data.description,
                phoneContact: data.phoneContact,
                emailContact: data.emailContact,
                metadata: data.metadata,
                delivery: data.delivery,
                paymentMethod: data.paymentMethod,
                status: data.status,
                isActive: data.isActive,
                isDelete:false
            },token
        }
    }
}

export function requestDelete(vendorId,token) {
    return {
        type: Types.REQUEST_DELETE,
        payload: {
            api: Configs['app'].BACKEND_API + '/Vendor/' + vendorId,
            method: 'DELETE'
        }
    }
}