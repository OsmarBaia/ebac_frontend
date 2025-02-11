<template>
  <div id="app">
    <Calculadora />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Calculadora from './components/Calculadora.vue';

export default defineComponent({
  name: 'App',
  components: {
    Calculadora,
  },
});
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>