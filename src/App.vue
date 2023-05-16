<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>

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
}

@media screen and (min-width:1400px) {
  .container {
    width: 1320px;
  }
}
</style>
