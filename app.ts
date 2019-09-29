import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue',
  () => import('./src/vue/vue.app'),
  () => !(location.pathname.startsWith('/react')),
)

registerApplication(
  'react',
  () => import('./src/react/react.app'),
  () => !(location.pathname.startsWith('/vue')),
)

start()
