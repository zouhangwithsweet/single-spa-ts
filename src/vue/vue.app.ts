import './assets/index.styl'
import 'normalize.css'
import 'reset.css'

import Vue, { CreateElement } from 'vue'
import singleSpaVue from 'single-spa-vue'
import Hello from './main.vue'
import router from './router'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    router,
    render: (r:CreateElement) => r(Hello)
  } 
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
