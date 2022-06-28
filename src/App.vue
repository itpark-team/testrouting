<template>
  <h1>app component</h1>
  <div>
    <router-link to="/">Компонент 1</router-link> |
    <router-link to="/comp2">Компонент 2</router-link> |
    <router-link to="/comp3/14/1123">Компонент 3</router-link>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
