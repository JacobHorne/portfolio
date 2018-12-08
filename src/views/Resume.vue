<template>
	<div>
      <div class="clearfix">
        <img src="img/icon.svg" alt="menu icon" class="icon">
      </div>

      <section class="mobile-nav clearfix">
        <a href="#"><img src="img/close-icon.svg" alt="menu close icon" class="icon close"></a>
              <nav>
          <ul>
            <div>
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/contact">Contact</router-link>
            <router-link to="/resume">Resume</router-link>
          </div>
          <router-view/>
          </ul>
        </nav>
      </section>

      <section class="main wrapper">
        <section class="content">
          <div class="display-block">
            <a href="grok.html"><h2>Greenville Grok </h2>
            <img src="../img/grok-block.jpg" alt="picture of a the grok website on an Ipad and Iphone"></a>
          </div>
          <div class="display-block">
            <a href="ccs.html"><h2>CCS Cable</h2>
            <img src="../img/ccs-block.jpg" alt="picture of a the CCS Cable website on an Ipad and Iphone"></a>
          </div>
          <div class="display-block">
            <a href="mrfreebooks.html"><h2>Mr Freebooks</h2>
            <img src="../img/mrfreebooks-block.jpg" alt="picture of a the Mr. Freebooks website on an Ipad and Iphone"></a>
          </div>
          <div class="display-block">
            <a href="index.html"><h2>Bravo Services</h2>
            <img src="../img/blank-block.jpg" alt="Coming Soon"></a>
          </div>
        </section>
      </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

</style>
