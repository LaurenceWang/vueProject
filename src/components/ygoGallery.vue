<template>
  <h2>Cards gallery</h2>
  <galleryOptions v-model:search="effectiveSearch" v-model:cardsFilterType="cardsFilterType" v-model:cardsSortType="cardsSortType" v-model:showCards="showCards" @change="resetShowCards"></galleryOptions>
  
  <!-- <div class="gallery-options">

    <div>
      <input type="text" class="search-bar" v-model="search" @keydown.enter="searchFilter"
        placeholder="Chercher une carte" list='listid'>
      <datalist id="listid">
        <option>{{ this.storageSearch }}</option>
      </datalist>
      <span class="search-icon"><img src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></span>
    </div>
    <button class="emptyBtn" v-if="effectiveSearch" v-on:click="emptySearch">empty</button>

    <div class="select">
      <label for="card-sort">Type :</label>
      <select v-model="cardsFilterType" @change="resetShowCards" id="card-sort">
        <option value="">All</option>
        <option value="Monster">Monster</option>
        <option value="Spell">Spell</option>
        <option value="Trap">Trap</option>
      </select>
    </div>



    <div class="select">
      <label for="card-sort">Sort :</label>
      <select v-model="cardsSortType" @change="resetShowCards" id="card-sort">
        <option value=atk>atk</option>
        <option value=def>def</option>
        <option value=level>level</option>
      </select>
    </div>

  </div> -->


  <div class="gallery">
    <ygoCard v-for="card in cardsShownData" v-bind:key="card.id" v-bind:name="card.name"
      v-bind:img="card.card_images[0].image_url" />
  </div>
  <div class="spinner" v-if="!effectiveSearch" v-show="cardsOrganizedData.length == 0" ></div>
  <!-- <div class="noResult" v-show="cardsOrganizedData.length == 0 && ygoData.length != 0">Aucun résultat trouvé</div> -->
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

  watch: {
    storageSearch: function (newSearch) {
      localStorage.setItem("search", newSearch);
    }
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
      search: "",
      //isSearching: false,
      cardsFilterType: "",
      cardsSortType: "atk",
      showCards: 25,
      storageSearch: localStorage.getItem("search") || ""

    }
  },
  created() {
    this.getData(),
      //this.pushData(),
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

      }else{
        //this.isVisible = false;
      }


    },

    handleScroll() {
      let curPos = Math.ceil(window.scrollY);
      let totalPHeight = document.documentElement.scrollHeight;
      let wHeight = window.innerHeight;
      if (curPos >= totalPHeight - wHeight) {

        this.pushData();
        console.log("this show cards : " + this.showCards);

      }
    },

    searchFilter() {
      if (this.search.length >= 3) {
        //this.isSearching = true;
        //this.isVisible = false;
        this.effectiveSearch = this.search;
        localStorage.setItem("search", this.search);
        this.storageSearch = this.search;
        console.log("localsearch :" + localStorage.getItem("search"))
      } else {
        //this.isSearching = false;
      }
    },

    resetShowCards() {
      this.showCards = 25;
      //this.isVisible = false;
      console.log("reset : " + this.showCards)
    },

    emptySearch() {
      this.search = "";
      this.effectiveSearch = "";
      this.showCards = 25;
      
    }
  }
}



</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
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

.search-container {
  max-width: 490px;
  display: block;
  margin: 0 auto;
}

.search-bar {
  /* //width:100%; */
  max-width: 100%;
  margin: 0 auto;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;
  border-radius: 10px;
  position: relative;
}

.search-bar:focus {
  border: 1px solid #008ABF;
  transition: 0.35s ease;
  color: #008ABF;
}

.search-bar:focus::placeholder {
  transition: opacity 0.45s ease;
  opacity: 30%;
}

.search-icon {
  position: relative;

}

.search-icon img {
  top: -26px;
  left: -60px;
  position: absolute;
  width: 70px;
  height: 70px;
}

.select {
  margin: 0px 20px;
  width: 350px;
  display: flex;
  align-items: center;
}

.select label {
  width: 60px;
  margin: 0px 20px;
}

select {
  position: relative;
  width: 80%;
  border-radius: 10px;
  padding: 10px 20px;
  border: 1px solid #D0CFCE;
  font-size: 1rem;
  color: #666;
  cursor: pointer;
  transition: all .3s;
  z-index: 0;
}


select:focus {
  border: 1px solid #008ABF;
  transition: 0.35s ease;
}

.emptyBtn {
  background-color: white;
  border: 1px solid #008ABF;
  font-size: 1rem;
  color: #008ABF;
  border-radius: 5px;
  padding: 0px 10px;
  margin-left: 15px;
}

.emptyBtn:hover {
  background-color: #008ABF;
  color: white;
  transition: 0.35s ease;
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
  