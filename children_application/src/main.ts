import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

let app: any = null;

function render(props: any = {}) {
  const { container } = props;
  console.log(container, '1111111111')
  app = createApp(App);
  app.use(router).mount(document.querySelector('#micro-app-container'));
  // app.use(router).mount(document.querySelector('#app'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('Vue micro app bootstraped');
}

export async function mount(props: any) {
  console.log('Vue micro app mount', props);
  render(props);
}

export async function unmount(props: any) {
  console.log('Vue micro app unmount');
  const { container } = props;
  console.log(container, '2222222222')
  app.unmount(container ? container.querySelector('#app') : document.querySelector('#micro-app-container'));
}