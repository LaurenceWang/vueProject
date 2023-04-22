<template>
  <h2>Cards gallery</h2>
  <galleryOptions v-model:search="effectiveSearch" v-model:cardsFilterType="cardsFilterType" v-model:cardsSortType="cardsSortType" v-model:showCards="showCards" @change="resetShowCards"></galleryOptions>
  
  <div class="gallery">
    <ygoCard v-for="card in cardsShownData" v-bind:key="card.id" v-bind:name="card.name"
      v-bind:img="card.card_images[0].image_url" />
  </div>
  <div class="spinner" v-if="!effectiveSearch" v-show="cardsOrganizedData.length == 0" ></div>
  <div class="noResult" v-if="effectiveSearch" v-show="cardsOrganizedData.length == 0">Aucun résultat trouvé</div>
  <div class="spinner" v-show="isVisible == true && !cardsOrganizedData.length == 0"></div>
</template>
  
<script>

import ygoCard from './ygoCard.vue'
import galleryOptions from './galleryOptions.vue'
import { getYGOData } from "../services/api/ygoAPI.js"


export default {
  name: 'ygoGallery',
  components: {
    ygoCard,
    galleryOptions,
  },

  computed: {
    cardsOrganizedData: function () {

      let cardsSortType = this.cardsSortType;
      let organizedData;

      organizedData = this.ygoData.filter(card => (card.type).toLowerCase().includes((this.cardsFilterType).toLowerCase()));

      organizedData = organizedData.filter(card => (card.name).toLowerCase().includes((this.effectiveSearch).toLowerCase()))

      organizedData.sort(function (a, b) { return b[cardsSortType] - a[cardsSortType] });

      return organizedData;

    },

    cardsShownData: function () {
      return this.cardsOrganizedData.slice(0, this.showCards);
    }

  },

  data() {
    return {
      ygoData: [],
      isVisible: false,
      effectiveSearch: "",
      cardsFilterType: "",
      cardsSortType: "atk",
      showCards: 25,

    }
  },
  created() {
    this.getData(),
      window.addEventListener('scroll', this.handleScroll);
  },

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    async getData() {
      this.ygoData = await getYGOData();

    },

    pushData() {

      if (this.showCards + 25 < 2 * this.cardsOrganizedData.length) {
        this.isVisible = true;
        setTimeout(() => {
          this.isVisible = false;
          this.showCards += 25;
          console.log("test " + this.showCards)
        }, 800)

      }

    },

    handleScroll() {
      let curPos = Math.ceil(window.scrollY);
      let totalPHeight = document.documentElement.scrollHeight;
      let wHeight = window.innerHeight;
      if (curPos >= totalPHeight - wHeight) {
        this.pushData();
      }
    },


    resetShowCards() {
      this.showCards = 25;
    },


  }
}



</script>
  
 
<style scoped>
.gallery {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.spinner {
  margin: 50px auto;
  margin-bottom: 75px;
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

.gallery-options {
  margin: 50px auto;
  display: flex;
  justify-content: center;
}

.noResult {
  margin: 50px;
}


/*@media screen and (max-width:400px) {
  .gallery{
    flex-direction: column;
  }
} */
</style>
  