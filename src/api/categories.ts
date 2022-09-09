import Axios from "@/utils/request";

export function createCategoy(data) {
    return Axios.request({
        url: `/category`,
        method: 'Post',
        data,
        showLoading: true,
    })
}

export function getCategory() {
    return Axios.request({
        url: `/category`,
        method: 'Get',
        showLoading: true,
    })
}

export function editCategory(id, data) {
    return Axios.request({
        url: `/category/${id}`,
        method: 'Get',
        showLoading: true,
        data
    })
}

export function removeCategory(id) {
    return Axios.request({
        url: `/category/${id}`,
        method: 'Delete',
        showLoading: true,
    })
}