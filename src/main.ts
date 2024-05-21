import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { registerMicroApps, start } from 'qiankun';

const app = createApp(App);

registerMicroApps([
  {
    name: 'microApp1',
    entry: '//10.10.25.163:4567/app1',
    // entry: '//localhost:8999',
    container: '#micro-app-container',
    activeRule: '/partent/app1',
  },
]);

app.use(router).mount('#app');

start();
