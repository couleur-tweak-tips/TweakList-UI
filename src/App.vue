<template>
  <MobileWarning v-model="showApp"></MobileWarning>
  <div v-if="showApp">
    <Header></Header>
    <div id="wrapper">
      <Categories></Categories>
      <TweakFuncs></TweakFuncs>
      <Suspense>
        <Optimization></Optimization>
      </Suspense>
    </div>
    <About></About>
  </div>
</template>

<script lang="ts" setup>
import Categories from '@/components/columns/Categories.vue';
import Optimization from '@/components/columns/Optimization.vue';
import TweakFuncs from '@/components/columns/TweakFuncs.vue';
import Header from '@/components/Header.vue';
import About from './components/About.vue';

import '@/app';
import MobileWarning from './components/MobileWarning.vue';
import { ref } from 'vue';
import store from './store';

const showApp = ref(
  store.state.userOs === 'Windows' || store.state.userOs === 'Linux'
);
</script>

<style>
* {
  --background: #0d1117;
  --border: 1px solid #21262d;

  padding: 0;
  margin: 0;
  color: white;
  user-select: none;
}

html {
  height: 100%;
  color-scheme: dark;
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
  grid-template-columns: 20% 20% 1fr;
  grid-template-rows: 100%;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(85, 85, 85, 0.39);
  border-radius: 6px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(136, 136, 136, 0.39);
}

input[type='checkbox'] {
  cursor: pointer;
}
</style>
