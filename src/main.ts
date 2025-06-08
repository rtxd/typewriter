import './assets/main.css'
import './assets/typewriter-theme.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .component('p-button', Button)
  .component('p-textarea', Textarea)

app.mount('#app')
