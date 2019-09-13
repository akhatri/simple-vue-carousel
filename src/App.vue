<template>
  <div id="app" class="site-container">
    <Header />
    <main class="site-main">
      <Carousel v-bind:carouselSize="5" />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';
import Footer from './components/Footer.vue';


@Component({
  components: {
    Header,
    Footer,
    Carousel
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;    
}

.site-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-main {
  flex: 1;
}


// Reset
* {
  margin: 0;
  padding: 0;
}
</style>
