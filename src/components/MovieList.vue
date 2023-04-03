<template>
  <div class="movie-container">
    <movie-card 
    v-for="movie in this.$store.state.movies"
    :key="movie.imdb"
    :movie="movie"
    />
    
  </div>

</template>


<script>
import MovieCard from "./MovieCard"

export default {
    name: 'movie-list',
    components: {
      MovieCard
    },
    computed: {

      

    
    }
};

</script>

<style>
.movie-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>