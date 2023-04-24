import { createApp } from 'vue'
//import * as VueRouter from 'vue-router'
import router from'./router.js'
import App from './App.vue'
// import Gallery from "./pages/pageGallery.vue"


// const routes = [
//   { path: '/', component: Gallery, name:"" },
//   { path: '/Gallery', component: Gallery, name:"Gallery" },
// ]

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes
// })

const app = createApp(App)
app.use(router)
app.mount('#app')
//createApp(App).mount('#app')
