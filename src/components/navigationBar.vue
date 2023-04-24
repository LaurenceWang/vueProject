<template>
  <div class="navbar" id="navbar">

      <nav class="nav container">
        <a href="#home" class="">Home</a>
        <router-link :to="{ name: 'cards' }">Gallery</router-link> 
        <a href="#contact">Popular</a>
        <a href="#about">Stats</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </nav>

  </div>
</template>
  
<script>


export default {
  name: 'navigationBar',

  created() {

    window.addEventListener('scroll', this.stickyBar);
  },

  unmounted() {
    window.removeEventListener('scroll', this.stickyBar);
  },

  methods: {
    stickyBar() {
      let navbar = document.getElementById("navbar");
      let sticky = navbar.offsetTop;

      

       if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
    }
  }


}

</script>
  
  
  
<style scoped>
.sticky {
  position: fixed;
  z-index: 5;
}

.navbar {
  -webkit-box-shadow: 0px 5px 8px rgba(0,0,0,0.03);
  box-shadow: 0px 5px 8px rgba(0,0,0,0.03);
  background-color: white;
  width:100%;
  z-index: 5;

}

.nav {
  height: 9vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

}

.nav a {

  color: #252129;
  text-align: center;
  padding: 0 2vw;
  text-decoration: none;
  font-weight: 500;

}

.nav a:hover {
  color: #dd325d;
  transition: transform .5s ease;
}

a,
a>span {
  position: relative;
  color: inherit;
  text-decoration: none;
}

a:before,
a:after,
a>span:before,
a>span:after {
  content: '';
  position: absolute;
  transition: transform .5s ease;
}

.nav a:before {
  left: 0;
  bottom: 0;

  margin: -3px 2vw;
  width: 50%;
  height: 2px;
  background: #dd325d;
  transform: scaleX(0);
}

.nav a:hover:before {
  transform: scaleX(1);

}

.nav a.active {
  background-color: #04AA6D;
  color: white;
}

.nav .icon {
  display: none;
}
</style>
  