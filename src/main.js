import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
import ProductS from './views/ProductS.vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)
app.use(router)
router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
})
app.component('NavBar', NavBar)
app.component('FooterBar', FooterBar)
app.component('ProductS', ProductS)
app.component('v-select', vSelect)
app.mount('#app')