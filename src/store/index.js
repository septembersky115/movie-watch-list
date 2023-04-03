import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [
    {
      title: "9 to 5",
      director: "Colin Higgins",
      watched: false,
      imdb: "tt0080319"
    },
    {
      title: "Blade Runner",
      director: "Ridley Scott",
      watched: false,
      imdb: "tt0083658"
    },
    {
      title: "Blade Runner 2049",
      director: "Denis Villeneuve",
      watched: false,
      imdb: "tt1856101"
    },
    {
      title: "Beau is Afraid",
      director: "Ari Aster",
      watched: false,
      imdb: "tt13521006"
    },
    {
      title: "Munchausen",
      director: "Ari Aster",
      watched: false,
      imdb: "tt2460640"
    },
  ]},
  mutations: 
    { ADD_NEW_MOVIE(state, movie) {
    state.movies.push(movie);
  },
    FLIP_DONE(state, movie) {
    movie.watched = ! movie.watched;
  }
},
  actions: {},
  modules: {},
  // Strict should not be used in production code. It is used here as a
  // learning aid to warn you if state is modified without using a mutation.
  strict: true
});
