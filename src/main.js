import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
import ProductS from './views/ProductS.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)
app.use(router)
app.component('NavBar', NavBar)
app.component('FooterBar', FooterBar)
app.component('ProductS', ProductS)
app.mount('#app')