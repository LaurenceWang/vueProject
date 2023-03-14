<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="header">
  </div>
  <ygoGallery/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
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
  background-color :red;
  background-image : url("http://images.hellokids.com/_uploads/_tiny_galerie/20090625/red-yugioh-wallpaper-source_ui0.jpg");
  margin-bottom: 50px;
}
</style>
