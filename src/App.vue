<template>
  <div id="app">
    <HeaderNav />
    <router-view/>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
export default {
  name: 'app',
  components: {
    HeaderNav,
  },
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
