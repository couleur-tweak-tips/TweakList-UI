<template>
  <div id="categories">
    <Category
      text="All optimizations"
      icon="speedometer"
      @click="store.state.selectedCategory = 'All optimizations'"
      :selected="store.state.selectedCategory === 'All optimizations'"
    ></Category>
    <Separator
      title="Windows"
      v-model="isWindowShowed"
      @update:model-value="selectWindows"
    ></Separator>
    <Category
      v-show="store.state.selectedOs === 'windows'"
      v-for="category in windowsCategories"
      :text="category.CategoryName"
      :icon="getIcon(category)"
      :selected="
        store.state.selectedCategory === category.CategoryName &&
        store.state.selectedOs === 'windows'
      "
      @click="store.state.selectedCategory = category.CategoryName"
    ></Category>
    <Separator
      title="Linux"
      v-model="isLinuxShowed"
      @update:model-value="selectLinux"
    ></Separator>
    <Category
      v-show="store.state.selectedOs === 'linux'"
      v-for="category in linuxCategories"
      :text="category.CategoryName"
      :icon="getIcon(category)"
      :selected="
        store.state.selectedCategory === category.CategoryName &&
        store.state.selectedOs === 'linux'
      "
      @click="store.state.selectedCategory = category.CategoryName"
    ></Category>
    <Separator v-if="showUncategorized"></Separator>
    <Category
      v-if="showUncategorized"
      text="Uncategorized"
      icon="dots-horizontal"
      @click="store.state.selectedCategory = 'Uncategorized'"
      :selected="store.state.selectedCategory === 'Uncategorized'"
    ></Category>
  </div>
</template>

<script lang="ts" setup>
import Category from "@/components/categories/Category.vue";
import Separator from "@/components/categories/Separator.vue";
import store from "@/store";
import { Category as ICategory } from "@/types";
import { ref, watch } from "vue";

const knownCategoriesIcons: { [key: string]: string } = {
  Games: "controller",
  Office: "microsoft",
  Registry: "package-variant-closed",
};

function getIcon(category: ICategory): string {
  return knownCategoriesIcons[category.CategoryName] ?? "image";
}

const windowsCategories = ref<ICategory[]>(
  store.state.categories.filter((category) => category.Os.includes("windows"))
);
const linuxCategories = ref<ICategory[]>(
  store.state.categories.filter((category) => category.Os.includes("linux"))
);

watch(
  () =>
    store.state.categories.filter((category) =>
      category.Os.includes("windows")
    ),
  (v) => {
    windowsCategories.value = v;
  }
);
watch(
  () =>
    store.state.categories.filter((category) => category.Os.includes("linux")),
  (v) => {
    linuxCategories.value = v;
  }
);

const isWindowShowed = ref(true);
const isLinuxShowed = ref(false);

function selectWindows(state: boolean) {
  store.state.selectedCategory = "All optimizations";
  if (state === false) {
    isLinuxShowed.value = true;
    store.state.selectedOs = "linux";
    return;
  }

  store.state.selectedOs = "windows";
  isLinuxShowed.value = !isWindowShowed.value;
}

function selectLinux(state: boolean) {
  store.state.selectedCategory = "All optimizations";
  if (state === false) {
    isWindowShowed.value = true;
    store.state.selectedOs = "windows";
    return;
  }

  store.state.selectedOs = "linux";
  isWindowShowed.value = !isLinuxShowed.value;
}

const showUncategorized =
  store.state.optimizations.filter((c) => !c.Category).length > 0;
</script>

<style scoped>
div#categories {
  background-color: #0d1117;
  padding: 15px 0;
}
</style>
