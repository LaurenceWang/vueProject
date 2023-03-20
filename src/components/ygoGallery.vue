<template>
  <h2> Gallery</h2>

  <div class="gallery">
    <ygoCard v-for="card in displayedData" v-bind:key="card.id" v-bind:name="card.name"
      v-bind:img="card.card_images[0].image_url" />
  </div>
  <div class="spinner" v-show="isVisible == true"></div>
</template>
  
<script>

import ygoCard from './ygoCard.vue'
import { getYGOData } from "../services/api/ygoAPI.js"

//console.log(getYGOData());

export default {
  name: 'ygoGallery',
  components: {
    ygoCard,
  },
  data() {
    return {
      ygoData: [],
      displayedData: [],
      counter: 2,
      isVisible: false
    }
  },
  created() {
    this.getData(),
      this.pushData(),
      window.addEventListener('scroll', this.handleScroll);
  },

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    async getData() {
      this.ygoData = await getYGOData();
      this.displayedData = this.ygoData.slice(0, 25);
    },

    pushData() {
      let nextCards = this.counter * 25
  
      
      if(nextCards < 2* this.ygoData.length){
        
        this.isVisible = true;
        setTimeout(() => {
          this.isVisible = false;
          console.log("nextcards = " + nextCards)
          this.displayedData = this.ygoData.slice(0, nextCards);
          this.counter++;
          
        }, 800)
        
      }
  
        
    },

    handleScroll() {
      let curPos = Math.ceil(window.scrollY);
      let totalPHeight = document.documentElement.scrollHeight;
      let wHeight = window.innerHeight;
      if (curPos >= totalPHeight - wHeight) {
       
        this.pushData();
        console.log(this.counter);
        
      }
    }
  }
}


</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.spinner {
  /* margin: 1em; */
  margin: 20px auto;
  width: 2.5em;
  height: 2.5em;
  border: 0.5em solid #f0f0f0;
  border-top: 0.5em solid #007bff;
  border-radius: 2em;
  animation: spinner-rotate 0.66s linear infinite;
}

@keyframes spinner-rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
  