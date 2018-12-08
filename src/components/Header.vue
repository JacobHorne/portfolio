<template>
  <div>
    <div class="navigation">
      <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
      </ul>
      </nav>
    </div>
	  <section class="title">
    	<h1>A. Jacob Horne</h1>
    </section>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Header',
}

</script>
