import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue',
  () => import('./src/vue/vue.app'),
  () => location.pathname === "/react" ? false : true
)

registerApplication(
  'react',
  () => import('./src/react/react.app'),
  () => location.pathname.startsWith('/vue')  ? false : true
)

start()
