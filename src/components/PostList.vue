<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" alt="" />
      <h1>{{ post.title }}</h1>
      <h3>{{ post.description }}</h3>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button class="update">Update</button>
      </router-link>
      <button class="delete" v-on:click="deletePost(post.id)">Delete</button>
    </article>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    deletePost(id) {
      postRef.doc(id).delete();
    },
  },
  firestore: {
    posts: postRef,
  },
};
</script>

<style>
.grid-container {
  grid-template-columns: 100%;
  display: grid;
}

@media only screen and (min-width: 768px) {
  .grid-container {
    grid-template-columns: 33% 33% 33%;
  }

  .grid-container article {
    text-align: center;
    padding: 3%;
  }

  .grid-container img {
    width: 100%;
    height: 50vh;
  }

  .grid-container h1 {
    font-size: 1.5em;
  }

  .grid-container h3 {
    font-size: 1em;
    font-weight: 100;
  }

  .delete {
    background-color: white;
    color: black;
    padding: 3%;
    margin: 2%;
    width: 12vw;
    border: 1px solid black;
  }

  .update {
    background-color: white;
    color: black;
    padding: 3%;
    margin: 2%;
    width: 12vw;
    border: 1px solid black;
  }
}
</style>