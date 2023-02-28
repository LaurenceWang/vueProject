<template>
  <div class="card">
    <img src="https://images.ygoprodeck.com/images/cards/30983281.jpg">
    <h1>Accel Synchro Stardust Dragon</h1>
    <div class="card-text">
      <p><strong>atk : </strong>2000</p>
      <p><strong>def : </strong>2500</p>
      <p><strong>race : </strong>Dragon</p>
      <p>1 Tuner + 1+ non-Tuner monsters\r\nIf this card is Synchro Summoned: You can Special Summon 1 Level 2 or lower Tuner from your GY. </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ygoCard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card{
  /* display:flex;
  flex-direction: column;
  justify-content: center; */
  padding :  20px 30px;
  margin : 20px;
  max-width: 12vw;
  border : solid 1px;
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
