import { createApp } from 'vue';
import { loadAllPlugins } from '@/plugins';
import App from './App.vue';
const app = createApp(App);
app.use(loadAllPlugins);
app.mount('#app');
