import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import 'element-plus/dist/index.css'
import '@/styles/reset.scss'
import * as Icons from '@element-plus/icons'


const app = createApp(App)
setupStore(app)
setupRouter(app)
app.mount('#app')


// 注册Icons 全局组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})