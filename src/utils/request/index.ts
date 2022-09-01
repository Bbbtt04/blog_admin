import Request from "./request";
import localCache from "../cache";

const Axios = new Request({
    baseURL: '/api',
    timeout: 10000,
    interceptors: {
        requestInterceptor: (config) => {
            // 携带token的拦截
            const token = localCache.getCache('token')
            if (token) {
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${token}`
                }
            }
            return config
        },
        requestInterceptorCatch: (err) => {
            return err
        },
        responseInterceptor: (res) => {
            return res
        },
        responseInterceptorCatch: (err) => {
            return err
        }
    }
})

export default Axios
