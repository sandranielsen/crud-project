<template>
  <div class="create">
    <h1>Create a New Post</h1>
    <form>
      <input type="text" v-model="post.title" placeholder="Title" required />
      <input
        type="text"
        v-model="post.description"
        placeholder="Description"
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose Image
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button class="create-post" type="button" v-on:click="createPost">
        Create Post
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
        title: "",
        description: "",
        image: null
      }
    };
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    previewImage() {
      const imageFile = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = event => {
        this.post.image = event.target.result;
      };
      fileReader.readAsDataURL(imageFile);
    },
    createPost() {
      postRef.add(this.post);
      this.$router.push("/");
    }
  }
};
</script>

<style>
h1 {
  margin-top: 2%;
  color: black;
}

form {
  display: flex;
  flex-direction: column;
  margin: 2% auto;
  width: 40vw;
}

input {
  padding: 3%;
  display: block;
  margin: 2% 0;
  background-color: #dadada;
  border: none;
  color: white;
}

::placeholder {
  color: white;
}

input:focus {
  outline: none;
}

input[type="file"] {
  display: none;
}

button {
  padding: 3%;
  background-color: white;
  color: black;
  border: 1px solid black;
  cursor: pointer;
  font-size: 1em;
}

button:hover {
  background-color: black;
  color: white;
}

.image-preview {
  width: 100%;
  max-width: 50vw;
  margin: 2% 0;
}

.choose-image {
  margin-top: 3%;
}
</style>
