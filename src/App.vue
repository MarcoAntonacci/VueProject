<template>

    <the-header></the-header>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>


  <main>
    <!-- // -->
  </main>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';


export default {
  components:{
    TheHeader
  }
 
}
</script>



<style>
@import './assets/base.css';
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

h3,h4,h5,h6{
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

body {
    background-color: #fefefe;
}
</style>
