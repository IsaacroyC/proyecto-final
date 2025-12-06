console.log('Main.js ejecutándose...')

// Plugins
import { registerPlugins } from '@/plugins'
// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'
// Styles
import 'unfonts.css'

const app = createApp(App)
console.log('App creada:', app)

registerPlugins(app)
console.log('Plugins registrados')

app.mount('#app')
console.log('App montada')