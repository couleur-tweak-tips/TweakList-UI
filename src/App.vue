<template>
  <Header></Header>
  <div id="wrapper">
    <Categories></Categories>
    <TweakFuncs></TweakFuncs>
    <Optimization></Optimization>
  </div>
</template>

<script lang="ts" setup>
import Categories from '@/components/columns/Categories.vue';
import Optimization from '@/components/columns/Optimization.vue';
import TweakFuncs from '@/components/columns/TweakFuncs.vue';
import Header from '@/components/Header.vue';

import '@/app';
</script>

<style>
* {
  --background: #0d1117;
  --border: 1px solid #21262d;

  padding: 0;
  margin: 0;
  color: white;
}

html {
  height: 100%;
}

body {
  height: 100%;
  background-color: var(--background);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
}

div#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

div#wrapper {
  flex: 1;
  display: grid;
  grid-template-columns: 15% 25% 1fr;
  grid-template-rows: 100%;
}
</style>
