import Axios from "@/utils/request";

export function createTag(data) {
    return Axios.request({
        url:`/tags`,
        method:'Post',
        data,
        showLoading:true,
    })
}
export function getTags() {
    return Axios.request({
        url:`/tags`,
        method:'Get',
        showLoading:true,
    })
}
export function editTag(id,data) {
    return Axios.request({
        url:`/tags/${id}`,
        method:'Get',
        showLoading:true,
        data
    })
}
export function removeTag(id) {
    return Axios.request({
        url:`/tags/${id}`,
        method:'Delete',
        showLoading:true,
    })
}
export function getRelation() {
    return Axios.request({
        url:'/tags/relation',
        method:'Get',
        showLoading:true
    })
}