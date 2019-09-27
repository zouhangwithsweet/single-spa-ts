<template>
  <div class="hello">
      <h1>Hello from Vue</h1>
      <md-button type="primary" @click="increment">Click Me</md-button>
  </div>
</template>

<script>
import { Button, Toast, Skeleton } from "mand-mobile"
export default {
  name: "HelloWorld",
  components: {
    "md-button": Button,
    [Skeleton.name]: Skeleton,
  },
  methods: {
    increment() {
      Toast.info('6666')
    }
  }
}
</script>

<style lang="stylus" scoped>
.hello {
  text-align: center;
  padding: 20px;
  font-size: 32px;
  color: #666;
  line-height: 56px;
}

.hello h1 {
  color: #333;
  line-height: 1.15;
  font-size: 64px;
  margin-bottom: 32px;
}

.hello h1 span {
  position: relative;
}

.hello h1 span::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 8px;
  width: 100%;
  height: 20px;
  background: #ecf6ff;
}
</style>
  
</style>
