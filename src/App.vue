<template>
  <div id="app">
    <exercise />
  </div>
</template>

<script>
import Exercise from '@/components/Exercise1-07.vue';
export default {
  name: 'App',
  components: {
    Exercise
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
