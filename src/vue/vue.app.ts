import Vue, { CreateElement } from 'vue'
import singleSpaVue from 'single-spa-vue'
import Hello from './main.vue'
import './assets/index.styl'
import 'normalize.css'
import 'reset.css'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
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
