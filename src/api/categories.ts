import Axios from "@/utils/request";

export function createCategoy(data) {
    return Axios.request({
        url: `/categories`,
        method: 'Post',
        data,
        showLoading: true,
    })
}

export function getCategory() {
    return Axios.request({
        url: `/categories`,
        method: 'Get',
        showLoading: true,
    })
}

export function editCategory(id, data) {
    return Axios.request({
        url: `/categories/${id}`,
        method: 'Get',
        showLoading: true,
        data
    })
}

export function removeCategory(id) {
    return Axios.request({
        url: `/categories/${id}`,
        method: 'Delete',
        showLoading: true,
    })
}