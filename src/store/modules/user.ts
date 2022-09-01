import {defineStore} from "pinia";
import {getUserInfo, login, register} from "@/api/user";
import lStorage from "@/utils/cache";
import {router} from "@/router";


interface UserInfo {
    userId?: string;
    name?: string;
    avator?: string;
    role?: string;
}

export const useUserStore = defineStore('user', {
    state() {
        let UserInfo;
        return {
            token: localStorage.getItem('token'),
            userInfo: UserInfo
        }
    },
    getters: {
        getToken() {
            return this.token
        },
        role() {
            return this.userInfo?.role || []
        }
    },
    actions: {
        setToken(token) {
            this.token = token
        },
        async handleLogin(userInfo) {
            let res = await login(userInfo)
            console.log(res)
            return res
        },
        async handleRisgter(userInfo) {
            let res = await register(userInfo)
            return res
        },
        async getUserInfo() {
            await getUserInfo().then(data => {
                // @ts-ignore
                this.userInfo = data.data
            })
        },
        logout() {
            lStorage.deleteCache('token')
            this.userInfo = {}
            router.push({name:'login'})
        }
    }
})
