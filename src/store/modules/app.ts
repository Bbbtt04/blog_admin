import {defineStore} from "pinia";

export const useAppStore = defineStore('app', {
    state() {
        return {
            collapse: false
        }
    },
    actions: {
        ChangeCollapse() {
            this.collapse = !this.collapse
        }
    }
})