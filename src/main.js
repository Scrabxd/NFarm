import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import router from './router'

createApp(App).use(router).mount('#app')
Vue.use(VueRouter)
