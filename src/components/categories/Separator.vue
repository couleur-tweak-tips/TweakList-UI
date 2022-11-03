<template>
  <div class="separator"></div>
  <div class="title" v-if="title" @click="toggleState()">
    <h6>{{ title }}</h6>
    <mdicon :name="modelValue ? 'menu-down' : 'menu-up'" size="18" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);

function toggleState() {
  emit('update:modelValue', !props.modelValue);
}
</script>

<style scoped>
div.separator {
  width: 85%;
  height: 1px;
  display: block;
  background-color: #30363d7a;
  margin: 10px auto;
}

div.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

div.title > h6 {
  margin-left: 6%;
  padding: 8px 6px;
  font-size: 12px;
  font-weight: 600;
  color: #8b949e;
}

div.title > span {
  margin-right: 6%;
}
</style>
