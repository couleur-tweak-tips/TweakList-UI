<template>
  <div id="tweakfuncs">
    <div id="tabs">
      <div
        class="tab"
        :class="{ selected: !onlyShowSelected }"
        @click="onlyShowSelected = false"
      >
        <h1>Available</h1>
        <span class="badge">{{ optimizations.length }}</span>
      </div>
      <div
        class="tab"
        :class="{ selected: onlyShowSelected }"
        @click="onlyShowSelected = true"
      >
        <h1>Selected</h1>
        <span class="badge">{{ optimizations.filter((o) => o._selected).length }}</span>
      </div>
    </div>
    <div
      id="optimizations"
      :style="{ height: `${columnHeight}px` }"
      :class="{ selected: onlyShowSelected }"
    >
      <div
        class="optimization"
        v-for="optimization in optimizations"
      >
        <input type="checkbox" v-model="optimization._selected" />
        <span>{{ optimization.DisplayName }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import store from '@/store';
import { ref, watch } from 'vue';
import { Optimization } from '@/types';

const onlyShowSelected = ref(false);

const columnHeight = ref(calculateColumHeight());
window.addEventListener(
  'resize',
  () => (columnHeight.value = calculateColumHeight())
);
function calculateColumHeight() {
  return window.innerHeight - 51 - 60;
}

function getAvailableOptimizations() {
  return store.state.optimizations.filter((optimization) => {
    const validOs = optimization.Platform.includes(store.state.selectedOs);

    if (!optimization.Category)
      return validOs && store.state.selectedCategory === 'Uncategorized';
    else {
      if (store.state.selectedCategory === 'All optimizations')
        return validOs && true;
      else
        return (
          validOs && store.state.selectedCategory === optimization.Category
        );
    }
  });
}

const optimizations = ref<Optimization[]>(getAvailableOptimizations());

watch(getAvailableOptimizations, (v) => optimizations.value = v);

</script>

<style scoped>
div#tweakfuncs {
  border-left: var(--border);
}

div#tabs {
  display: flex;
  border-bottom: var(--border);
  justify-content: space-around;
  padding: 10px;
}

div.tab {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 8px;
  cursor: pointer;
  border-radius: 6px;
}

div.tab.selected::after {
  content: '';
  width: 85%;
  height: 2px;
  background-color: #f78166;
  position: absolute;
  transform: translateY(25px);
}

div.tab:hover {
  background-color: rgba(177, 186, 196, 0.12);
}

div.tab > h1 {
  font-weight: 600;
  color: #c9d1d9;
  font-size: 16px;
  line-height: 30px;
}

span.badge {
  font-weight: 600;
  font-size: 12px;
  color: #3fb950;
  border: 1px solid #238636;
  padding: 0.12em 0.5em;
  border-radius: 2em;
}

div#optimizations {
  overflow-y: scroll;
}

div#optimizations.selected
  > div.optimization:not(:has(input[type='checkbox']:checked)) {
  display: none;
}
</style>
