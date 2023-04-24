<template>
   <!-- <navigationBar /> -->

  <!-- <header class="header">
  </header>  -->
  
  <router-view></router-view>
  <!-- <ygoGallery /> -->
</template>

<script>

//import ygoGallery from './components/ygoGallery.vue'
//import navigationBar from './components/navigationBar.vue'

export default {
  name: 'App',
  components: {
    //ygoGallery,
    //navigationBar,
  }
}
</script>

<style>
/*@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css);*/
@import url(https://cdn.jsdelivr.net/npm/bootstrap-v4-grid-only@1.0.0/dist/bootstrap-grid.min.css);
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);

body {
  margin: 0;
}

#app {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;

  /* margin-top: 60px; */
}

/* .header {
  height: 80vh;
  background-color: #252129;
  background-image: url("https://cdn.dribbble.com/users/470545/screenshots/3210709/media/4db811f2a9517d7ba62df2a0e91d8227.jpg?compress=1&resize=800x600&vertical=top");
  background-repeat: no-repeat;
  margin-bottom: 50px;
  background-size:auto;
}


@media screen and (max-width:992px) {
   .header{
    background-position:center;
    
   }
} */

@media screen and (min-width:1400px) {
  .container {
    width: 1320px;
  }
}
</style>
