import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import 'element-plus/dist/index.css'
import '@/styles/reset.scss'
import * as Icons from '@element-plus/icons'

// v-md-editor
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App)
setupStore(app)

setupRouter(app)

app.use(VMdEditor);

app.mount('#app')


// 注册Icons 全局组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
