import Axios from "@/utils/request/index";

export function login(data) {
    return Axios.request({
        url: '/auth/login',
        method: 'Post',
        data,
        showLoading: true
    })
}

export function register(data) {
    return Axios.request({
        url: '/users/register',
        method: 'Post',
        data,
        showLoading: true
    })
}