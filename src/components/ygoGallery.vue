<template>
<div class="gallery">
<ygoCard />
<ygoCard />
<ygoCard />
<ygoCard />
<ygoCard />
</div>
</template>
  
  <script>

import ygoCard from './ygoCard.vue'


  export default {
	name: 'ygoGallery',
	components: {
    ygoCard,
  
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .gallery {
    display : flex;
    justify-content: center;
    flex-wrap : wrap;
  }

  
 
  </style>
  