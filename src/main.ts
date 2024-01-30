import './assets/main.css'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from './services/firebase'
import { VueFire, VueFireAuth } from 'vuefire'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

app.use(router)

app.mount('#app')
