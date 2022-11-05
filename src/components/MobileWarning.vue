<template>
  <div v-if="!modelValue" id="warning">
    <img
      src="https://avatars.githubusercontent.com/u/82734468?s=200&v=4"
      alt="Couleur's avatar"
      draggable="false"
    />
    <p>This web application is meant to be used on desktop not on mobile</p>
    <div id="buttons">
      <button class="green" @click="goBack()">Go back to safety</button>
      <button @click="proceed()">Proceed anyway</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

function proceed(): void {
  emit('update:modelValue', true);
}

function goBack(): void {
  history.back();
}
</script>

<style scoped>
div#warning {
  position: absolute;
  background-color: var(--background);
  top: 10%;
  text-align: center;
  padding: 35px;
}

img {
  border-radius: 50%;
}

div#buttons {
  display: flex;
  gap: 15px;
  padding: 25px;
  justify-content: center;
}

button {
  background-color: #21262d;
  color: #c9d1d9;
  border: 1px solid rgba(240, 246, 252, 0.1);
  padding: 5px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease-in;
}

button:hover {
  background-color: #30363d;
  border-color: #8b949e;
}

button.green {
  background-color: #238636;
  border-color: rgba(240, 246, 252, 0.1);
}

button.green:hover {
  background-color: #2ea043;
  border-color: rgba(240, 246, 252, 0.1);
}
</style>
