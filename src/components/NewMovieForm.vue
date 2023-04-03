<template>
  <form class="new-book-form" v-show="showForm" v-on:submit.prevent="addNewBook">
    <div class="new-book-form">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="newBook.title" class="title-input" />
    </div>
    <div class="new-book-form">
      <label for="author">Author:</label>
      <input type="text" id="author" v-model="newBook.author" class="author-input" />
    </div>
    <div class="new-book-form">
      <label for="isbn">ISBN:</label>
      <input type="text" id="isbn" v-model="newBook.isbn" class="isbn-input" />
    <input type="submit" value="Save"/>
    <input type="button" value="Cancel" @click="resetForm"/>
  </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      showForm: true,
      newBook: {
        read:false
      },
    };
  },
  methods:{
    addNewBook(){
      this.$store.state.books.push(this.newBook);
      this.resetForm();
    },
    resetForm(){
      this.newBook={};
    }
  },
  name: "new-book-form",
};
</script>
<style>
</style>