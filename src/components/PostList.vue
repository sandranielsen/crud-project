<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" alt="" />
      <h3>{{ post.description }}</h3>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button>Update</button>
      </router-link>
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
  grid-template-columns: 33.33% 33.33% 33.33%;
}

.grid-container article {
  text-align: center;
  padding: 3%;
}

.grid-container img {
  width: 100%;
}

.grid-container h3 {
  font-size: 1em;
  font-weight: 100;
}

button.delete {
  background-color: #2c3e50;
  color: white;
}
</style>