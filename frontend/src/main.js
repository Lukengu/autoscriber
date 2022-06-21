import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store'
import axios from 'axios'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


loadFonts()

createApp(App).use(store)
  .use(vuetify)
  .mount('#app')
