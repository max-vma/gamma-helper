import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia()

createApp(App).use(router).use(ElementPlus).use(pinia).mount('#app')
