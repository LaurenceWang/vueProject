<template>
  <div class="card">
    <!-- <img src="https://images.ygoprodeck.com/images/cards/30983281.jpg"> -->
    <img :src=img>
    <h1>{{ name }}</h1>
    <!-- <div class="card-text">
      <p><strong>atk : </strong>2000</p>
      <p><strong>def : </strong>2500</p>
      <p><strong>race : </strong>Dragon</p>
      <p>1 Tuner + 1+ non-Tuner monsters\r\nIf this card is Synchro Summoned: You can Special Summon 1 Level 2 or lower Tuner from your GY. </p>
    </div> -->
  </div>
</template>

<script>

//import {getYGOData} from "../services/api/ygoAPI.js"

/*let data = getYGOData();
console.log(data)*/
//getYGOData();

export default {
  name: 'ygoCard',
  
  props: {
    name: String,
    img : {type: String, default:"https://images.ygoprodeck.com/images/cards/30983281.jpg"}
  }
}
</script>



<style scoped>

.card{
  /* display:flex;
  flex-direction: column;
  justify-content: center; */
  padding :  20px 20px;
  margin : 20px;
  max-width: 12vw;
  /*border : solid 1px;*/
  border-radius: 5%;
  -webkit-box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.20); 
  box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.20);
}

.card:hover{
  -webkit-box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.45); 
  box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.45);
}

.card img{
  width : 90%;
  margin : auto;
}

 h1{
  font-size : 1rem;
}

p{
  font-size : 0.8rem;
  text-align: left;
  margin : 10px;
} 

</style>
