<template>
  <div :class="{ selected }">
    <mdicon :name="icon" size="20" />
    <span>{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: String,
  icon: String,
  selected: Boolean,
});
</script>

<style scoped>
div {
  border-radius: 6px;
  width: 85%;
  height: 20px;
  padding: 6px 8px;
  margin: 1px auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.1s ease-in;
}

span {
  color: #c9d1d9;
  transform: translateY(-2px);
}

div.selected {
  background-color: #1a1f24;
}

div:hover {
  background-color: #21262c;
}

div.selected > span {
  font-weight: 600;
}
</style>
