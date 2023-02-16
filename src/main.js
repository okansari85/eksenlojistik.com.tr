import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/css/style.css';
import i18n from './i18n'

const app = createApp(App);
app.config.productionTip = false
app.use(BootstrapVue3)
app.use(VueAwesomeSwiper)
app.use(i18n)
app.use(router)
app.mount('#app')



