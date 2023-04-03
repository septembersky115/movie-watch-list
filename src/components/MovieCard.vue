<template>
<body>
  <div class="card" :class= "{watched: movie.watched}" :key="movie.imdb">
    <h2 class= "movie-title"> {{movie.title}} </h2>
    <h3 class= "movie-director"> {{movie.director}} </h3>
      <button
              :class="{'mark-watched' : !movie.watched, 'mark-watched' : movie.watched}"
              @click="toggleWatchedStatus()">
              {{ movie.watched ? 'Mark Unwatched' : 'Mark Watched'}}
            </button>
    </div>
</body>
</template>

<script>

export default {
    name: 'movie-card', 
    props: ["movie"],
methods: {
    toggleWatchedStatus() {
        this.$store.commit ('FLIP_DONE', this.movie)
    }
}
  }

</script>

<style>

* {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

button {
    background-color: #947FF0;
}
h3{
    color: #229580;
}
body {
    background-color: #F8FFE5;
}

.card {
    border: 3px solid #3083DC;
    color: #F8FFE5;
    background-color: #4E4187;
    border-radius: 10px;
    width: 250px;
    height: 200px;
    margin: 20px;
    position: relative;
}

.card.watched {
    background-color: #7DDE92;
}

.card .movie-title {
    font-size: 1.5rem;
}

.card .movie-director {
    font-size: 1rem;
}

.mark-watched, .mark-unwatched {
    display: block;
    position: absolute;
    bottom: 40px;
    width: 80%;
    left: 10%;
    font-size: 1rem;
}
</style>