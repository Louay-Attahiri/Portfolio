import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Typewriter from 'vue-typewrite';
 
const app = createApp(App);
app.use(Typewriter);
app.use(router);
app.mount('#app');
