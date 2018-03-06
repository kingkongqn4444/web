import Types from './';
import Configs from "../../../configs";


export function requestList(filter, start = 0, limit = 20, token = "") {
    return {
        type: Types.REQUEST_LIST,
        payload: {
            api: Configs['app'].BACKEND_API + '/Widget/Search',
            method: 'POST',
            payload: {
                filter,
                start,
                limit
            },
            token
        },
    }
}

export function requestDetail(widgetId, token) {
    return {
        type: Types.REQUEST_DETAIL,
        payload: {
            api: Configs['app'].BACKEND_API + '/Widget/' + widgetId,
            method: 'GET',
            token
        }
    }
}

export function requestCreate(data, token) {
    return {
        type: Types.REQUEST_CREATE,
        payload: {
            api: Configs['app'].BACKEND_API + '/Widget',
            method: 'POST',
            payload: {
                title: data.title,
                slug: data.slug,
                description: data.description,
                type: data.type,
                component: data.component,
                data: data.data,
                publishFrom: data.publishFrom,
                publishTo: data.publishTo,
                isActive: data.isActive,
                isDelete: data.isDelete,
            },
            token
        }
    }
}

export function requestUpdate(data, token) {
    return {
        type: Types.REQUEST_UPDATE,
        payload: {
            api: Configs['app'].BACKEND_API + '/Widget/' + data.widgetId,
            method: 'PUT',
            payload: {
                title: data.title,
                slug: data.slug,
                description: data.description,
                type: data.type,
                component: data.component,
                data: data.data,
                publishFrom: data.publishFrom,
                publishTo: data.publishTo,
                isActive: data.isActive,
                // isDelete: data.isDelete,
            },
            token
        }
    }
}

export function requestDelete(widgetId, token) {
    return {
        type: Types.REQUEST_DELETE,
        payload: {
            api: Configs['app'].BACKEND_API + '/Widget/' + widgetId,
            method: 'DELETE',
            token
        }
    }
}