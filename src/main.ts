import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'
import './firebase'

const app = createApp(App)

app.use(createPinia()).use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.component('p-button', Button)
app.component('p-textarea', Textarea)
app.mount('#app')
