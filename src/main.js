import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import router from "@/router/router"

import SideBar from '@/components/SideBar'
import SubscribeCard from '@/components/CardItems/SubscribeCard'
import axios from 'axios'
import store from './store/index.js'


library.add(fas,fab)

const app = createApp(App)

app.use(router)
app.use(store)
app.component("font-awesome-icon",FontAwesomeIcon)

app.component("SideBar",SideBar)
app.component("SubscribeCard",SubscribeCard)


app.config.globalProperties.$axios = axios




app.mount('#app')
