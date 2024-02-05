import './assets/main.css'
import 'vue-toast-notification/dist/theme-bootstrap.css'

import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from './services/firebase'
import { VueFire, VueFireAuth } from 'vuefire'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})
app.use(router)
app.use(plugin, defaultConfig(config))
app.use(ToastPlugin)

app.mount('#app')
