<template>
  <div class="card">
    <img :src=img>
    <h3>{{ name }}</h3>
  </div>
</template>

<script>


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
  overflow-wrap: break-word;
  -webkit-box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.20); 
  box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.20);
}

.card:hover{
  -webkit-box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.45); 
  box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.45);
  transform:scale(1.02);
  transition: transform .3s ease;
}

.card img{
  width : 90%;
  margin : auto;
}

h3{
  font-size : 1rem;
}

p{
  font-size : 0.8rem;
  text-align: left;
  margin : 10px;
} 

@media screen and (max-width:1200px) {
  h3{
  font-size : 0.9rem;
  }

  .card{
    max-width: 15vw;
    margin: 20px 10px;
  }
} 

@media screen and (max-width:992px) {
  
  .card{
    max-width: 18vw;
    margin: 20px 10px;
  }
} 

@media screen and (max-width:700px) {
  .card{
    max-width: 20vw;
  }
} 

@media screen and (max-width:600px) {
  .card{
    max-width: 26vw;
    padding :  10px 10px;
    margin : 10px;
  }

  h3{
  font-size : 0.8rem;
  }
} 


@media screen and (max-width:400px) {

  .card{
   
    margin: 5px;
  }

  h3{
  font-size : 0.7rem;
  margin : 10px auto;
  }

} 

/*@media screen and (max-width:400px) {
  .card{
    max-width: 50vw;
  }
} */


</style>
