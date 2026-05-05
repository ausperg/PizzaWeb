<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Recipe from './components/Recipe.vue';
import Configurator from './components/Configurator.vue';
</script>

<template>
  <Header />
  <div id="content">
    <Configurator />
    <Recipe />
  </div>
  <Footer />
</template>

<style scoped>
#content {
  align-self: center;
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  /*the contetn takes all availabil space*/
  gap: 1.5rem;
}

@media (max-width: 50rem) {
  #content {
    width: 95%;
  }
}
</style>
