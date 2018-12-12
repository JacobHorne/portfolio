<template>
	<div class="background">
      <!--<div :style="{ 'background-image' : url('../img/rectangle.svg') }"></div>-->
      <div class="clearfix">
        <!--<p>MENU</p>-->
      </div>
      <header></header>
      <section class="main wrapper">
        <section class="content" >
           <div class="display-block">
            <router-link to="/Fadoc">
            <a href=""><h2>Find Assistance (2018)</h2>
            <img src="../img/fa.jpg" alt="picture of a the CCS Cable website on an Ipad and Iphone"></a>
            </router-link>
          </div>
           <div class="display-block">
            <router-link to="/Zverse">
            <a href=""><h2>Zverse 3D (2016-2017)</h2>
            <img src="../img/statue.jpg" alt="picture of a the Mr. Freebooks website on an Ipad and Iphone"></a>
            </router-link>
          </div>
          <div class="display-block">
            <a href='http://jacobhorne.github.io/grok.html'><h2>Greenville Grok(2015) </h2>
            <img src="../img/grok-block.jpg" alt="picture of a the grok website on an Ipad and Iphone"></a>
          </div>
          <div class="display-block">
            <a href="http://jacobhorne.github.io/ccs.html"><h2>CCS Cable(2015)</h2>
            <img src="../img/ccs-block.jpg" alt="picture of a the CCS Cable website on an Ipad and Iphone"></a>
          </div>
         
         
          <!--<div class="display-block">
            <a href="index.html"><h2></h2>
            <img src="../img/blank-block.jpg" alt="Coming Soon"></a>
          </div>-->
          <router-view></router-view>
        </section>
        <a href="https://wizardly-hypatia-c77f23.netlify.com" style="color:white;">Book</a>
        <a href="https://wizardly-hypatia-c77f23.netlify.com" style="color:white;">Studio</a>
      </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  .background{
    background-image:url('../img/Rectangle.svg');
    background-repeat:no-repeat;
    background-size:cover;
  }
</style>
