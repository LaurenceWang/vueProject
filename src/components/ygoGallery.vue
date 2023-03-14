<template>
<h2> Gallery</h2>
<div class="gallery">
  <ygoCard v-for="card in ygoData" v-bind:key="card.id" v-bind:name="card.name" v-bind:img="card.card_images[0].image_url"/>
<!-- <ygoCard v-bind:name="ygoData[0].name" v-bind:img="ygoData[0].card_images[0].image_url"/>
<ygoCard v-bind:name="ygoData[1].name" v-bind:img="ygoData[1].card_images[0].image_url" />
<ygoCard v-bind:name="ygoData[2].name" v-bind:img="ygoData[2].card_images[0].image_url"/>
<ygoCard v-bind:name="ygoData[3].name" v-bind:img="ygoData[3].card_images[0].image_url"/>
<ygoCard v-bind:name="ygoData[4].name" v-bind:img="ygoData[4].card_images[0].image_url"/> -->
<!-- <h1>{{ ygoData[0].card_images[0].image_url }}</h1>
<h2>{{ ygoData[0].type }}</h2>
{{ ygoData[0] }} -->
</div>
</template>
  
  <script>

import ygoCard from './ygoCard.vue'
import {getYGOData} from "../services/api/ygoAPI.js"

//console.log(getYGOData());

  export default {
	name: 'ygoGallery',
	components: {
    ygoCard,
  },
  data(){
    return{
      ygoData:[]
    }
  },
  created(){
    this.getData()
  },
  methods:{
    async getData(){
      this.ygoData = await getYGOData()
      //let data = getYGOData()
    }
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
  