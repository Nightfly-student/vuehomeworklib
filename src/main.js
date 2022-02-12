import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
const app = Vue.createApp({})
app.use(router);
app.mount('#app')