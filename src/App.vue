<template>
  <div id="app">
    <h1>"Movies to Watch" List</h1>
    <movie-list />
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue';

export default {
  name: 'app',
  components: {
    MovieList
  }
}
</script>

<style>

h1 {
  color: #3083DC;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 60px;
}
</style>
