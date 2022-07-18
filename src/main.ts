import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './components/main.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')


const app2 = createApp(App);

app2.mount('#app2');