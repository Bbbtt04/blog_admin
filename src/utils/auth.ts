import {router} from '@/router'

export function auth() {
    router.replace({
        path: '/login',
        query: {...router.currentRoute.value.query, redirect: router.currentRoute.value.path},
    })
}
