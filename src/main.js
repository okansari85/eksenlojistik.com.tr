import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import store from './store'
//
import BootstrapVue3 from 'bootstrap-vue-3'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Import Swiper styles
import 'animate.css';
import '@/assets/css/style.css';

const app = createApp(App);
app.use(BootstrapVue3)
app.use(VueAwesomeSwiper)
app.use(router)
app.mount('#app')
// createApp(App).use(store).use(router).mount('#app')

