<template>

    <user-items></user-items>
    <optional-items></optional-items>
</template>

<script>
import UserItems from './components/UserItems.vue'
import OptionalItems from './components/OptionalItems.vue';

export default {
  name: 'App',
  components: {
    UserItems,
    OptionalItems,
  },
}
</script>

<style lang="scss">
@import './assets/style.scss';

#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
