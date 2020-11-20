<template>
  <div class="create">
    <h1>Create New Post Page</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type a description here"
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose image
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button class="create-post" type="button" v-on:click="createPost">
        Create post
      </button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Create",
  data() {
    return {
      post: {
        description: "",
        image: null,
      },
    };
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    previewImage() {
      const imageFile = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        this.post.image = event.target.result;
      };
      fileReader.readAsDataURL(imageFile);
    },
    createPost() {
      postRef.add(this.post);
      this.$router.push("/");
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50vw;
}

input {
  padding: 3%;
  display: block;
  margin: 4% 0;
}

input[type="file"] {
  display: none;
}

button {
  padding: 3%;
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1em;
}

.image-preview {
  width: 100%;
  max-width: 50vw;
  margin: 2% 0;
}

.choose-image {
  background-color: #2c3e50;
}

.create-post {
  background-color: #42b983;
}
</style>