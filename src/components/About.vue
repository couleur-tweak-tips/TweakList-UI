<template>
  <div
    id="about-bg"
    v-show="store.state.showAbout"
    @click="store.state.showAbout = false"
  ></div>
  <div id="about" v-show="store.state.showAbout">
    <h1>About TweakList UI</h1>
    <h4>TweakList UI</h4>
    <p>
      TweakList-UI leverages the PowerShell scripting framework
      <a
        href="https://github.com/couleur-tweak-tips/TweakList-UI"
        target="_blank"
        >TweakList</a
      >
      in an user-friendly web interface for everyone to enjoy it's delicious
      <a
        href="https://github.com/couleur-tweak-tips/TweakList/blob/master/docs/TweakFuncs.md"
        target="_blank"
        >tweakfuncs</a
      >
      😋
    </p>
    <h4>TweakList</h4>
    <p>
      TweakList is a PowerShell module aiming to regroup every impactful tweaks
      for fine tuning, stripping and optimizing Windows, each tweaks has it's
      own file and can be put together as a "TweakScript"
    </p>
    <h4>Authors</h4>
    <div id="authors">
      <div class="author" v-for="author in authors">
        <a :href="author.github" target="_blank">
          <img
            :src="author.avatar"
            :alt="`${author.name}'s avatar`"
            draggable="false"
          />
          {{ author.name }}
        </a>
        <p>{{ author.role }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import store from '@/store';
import { watch } from 'vue';

function onKeyDown(event: KeyboardEvent): void {
  if (event.key === 'Escape') store.state.showAbout = false;
}

function setEspaceListener(state: boolean): void {
  const method = state ? 'addEventListener' : 'removeEventListener';
  // @ts-ignore - To be honest I don't know why TypeScript complains
  window[method]('keydown', onKeyDown);
}

setEspaceListener(store.state.showAbout);
watch(() => store.state.showAbout, setEspaceListener);

const authors = [
  {
    name: 'Couleur',
    github: 'https://github.com/couleurm',
    avatar: 'https://avatars.githubusercontent.com/u/82747632?v=4',
    role: 'Powershell genius',
  },
  {
    name: 'Cy0ze',
    github: 'https://github.com/richarddorian',
    avatar:
      'https://cdn.discordapp.com/avatars/690835131275018270/81860734f375ea9f1806edb46d0638fb.webp',
    role: 'TweakList UI developer',
  },
];
</script>

<style scoped>
div#about-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.6);
}

div#about {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: #161b22;
  width: 35%;
  min-width: 300px;
  height: fit-content;
  border-radius: 6px;
  border: var(--border);
  text-align: center;
  padding: 15px;
}

div#about > h4 {
  margin-top: 20px;
}

div#authors {
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

div.author {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div.author > a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
}

div.author > a > img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  /* cursor: pointer; */
  margin-bottom: 5px;
  transition: border-radius 0.2s linear;
}

div.author > a > img:hover {
  border-radius: 24px;
}

div.author > p {
  color: #8b949e;
}
</style>
