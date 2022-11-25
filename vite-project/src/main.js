import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import YoutubeIframe from '@techassi/vue-youtube-iframe';
createApp(App).use(YoutubeIframe).mount('#app');