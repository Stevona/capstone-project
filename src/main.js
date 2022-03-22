import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'
import NavBar from './components/NavBar.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)
app.use(router)
app.component('NavBar', NavBar)
app.mount('#app')