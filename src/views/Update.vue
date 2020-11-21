<template>
  <div class="update-page">
    <h1>Update</h1>
    <form>
      <input type="text" v-model="post.title" placeholder="Title" required />
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
      <button class="update-button" type="button" v-on:click="updatePost">
        Update post
      </button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Update",
  props: {
    post: Object
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
    updatePost() {
      postRef.doc(this.post.id).set({
        title: this.post.title,
        description: this.post.description,
        image: this.post.image
      });
      this.$router.push("/");
    }
  }
};
</script>

<style>
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
