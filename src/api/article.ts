import Axios from "@/utils/request";

export function getMainList() {
    return Axios.get({
        url:'contents',
        method:'get'
    })
}