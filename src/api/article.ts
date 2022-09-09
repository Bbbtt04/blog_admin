import Axios from "@/utils/request";

export function getMainList(page) {
    return Axios.request({
        url:`contents?page=${page}`,
        method:'Get'
    })
}
export function createArticle(data){
    return Axios.request({
        url:'/contents',
        method:'Post',
        showLoading:true,
        data
    })
}
export function getList(){
    return Axios.request({
        url:'/contents',
        method:'Get',
        showLoading:true
    })
}
export function getContent(id) {
    return Axios.request({
        url:`/contents/${id}`,
        method:'Get',
        showLoading:true
    })
}
export function editContent(id,data) {
    return Axios.request({
        url:`/contents/${id}`,
        method:'Patch',
        showLoading:true,
        data
    })
}
export function removeContent(id) {
    return Axios.request({
        url:`/contents/${id}`,
        method:'Delete',
        showLoading:true
    })
}
export function getArchive() {
    return Axios.request({
        url:`/contents/getArchive`,
        method:'Get',
        showLoading:true
    })
}