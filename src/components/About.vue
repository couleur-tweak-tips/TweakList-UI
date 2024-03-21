<template>
  <div
    id="about-bg"
    v-show="store.state.showAbout"
    @click="store.state.showAbout = false"
  ></div>
  <div id="about" v-show="store.state.showAbout">
    <h2>What's all the knobs and tickboxes for?</h2>
    <br>
    <h3>TweakList UI</h3>
    <p>
      This website provides an intuitive interface to take advantage of 
      <a href="https://github.com/couleur-tweak-tips/TweakList" target="_blank">TweakList</a>

      <br><br>
      <div class="center">
        <ol>
          <li>Select the modifications you wish</li>
          <li>Click the Export and copy button</li>
          <li>Open PowerShell (as Administrator, if instructed)</li>
          <li>Paste the command, press <kbd>ENTER</kbd>, done!</li>
        </ol>
      </div>

    </p>

    <br>
    <h3>TweakList</h3>
    <p>
      TweakList is a collection of useful PowerShell scripts
      to automate setting up Windows the way you want it, not Microsoft's.
      It can also 
      <a
      href="https://github.com/couleur-tweak-tips/TweakList/tree/master/modules/Game%20%26%20Program%20tuners"
      target="_blank"
      >set up your favorite programs</a
      > and have all it's functions imported in a
      <a
      href="https://github.com/couleur-tweak-tips/TweakList#get-started-with-a-single-command"
      target="_blank"
      >single command</a
      >, we aims to make it both scriptable for us CLI nerds and welcoming for the conhost novices.
    </p>

    <br>
    <h3>Authors</h3>
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
    Also see <a
    href="https://github.com/couleur-tweak-tips/TweakList#ive-borrowed-some-stuff-with-permission-from-these-scriptslists"
    target="_blank"
    >TweakList's credits</a>
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
    avatar: 'https://avatars.githubusercontent.com/u/82747632',
    role: 'Scripts & CI',
  },
  {
    name: 'Cy0ze',
    github: 'https://github.com/richarddorian',
    avatar:
      'https://avatars.githubusercontent.com/u/75615715?s=8',
    role: 'Initial UI',
  },
];
</script>

<style scoped>
ol
{
  list-style-position: inside !important;
  display: table !important;
  margin: 0 auto !important;
}
.center{
    width:100%;
    margin: 0 auto;
    text-align:left;
}
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
