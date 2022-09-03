import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-brands-svg-icons'

import SideBar from '@/components/SideBar'
import SubscribeCard from '@/components/CardItems/SubscribeCard'

const app = createApp(App)


app.component("font-awesome-icon",FontAwesomeIcon)

app.component("SideBar",SideBar)
app.component("SubscribeCard",SubscribeCard)


app.mount('#app')
