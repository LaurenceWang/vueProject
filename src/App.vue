<template>

  <div class="header">
  </div>
  <ygoGallery/>
</template>

<script>

import ygoGallery from './components/ygoGallery.vue'

export default {
  name: 'App',
  components: {
    ygoGallery
  }
}
</script>

<style>

body{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  /* margin-top: 60px; */
}

.header{
  height: 80vh;
  background-color :#252129;
  background-image : url("https://cdn.dribbble.com/users/470545/screenshots/3210709/media/4db811f2a9517d7ba62df2a0e91d8227.jpg?compress=1&resize=800x600&vertical=top");
  background-repeat: no-repeat;
  margin-bottom: 50px;
}
</style>
