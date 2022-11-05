<template>
  <header>
    <img
      src="https://avatars.githubusercontent.com/u/82734468?s=200&v=4"
      alt="Couleur's profile picture"
      draggable="false"
    />
    <nav>
      <ul>
        <li v-for="item in navItems">
          <a :href="item.url" target="_blank" @click="onNavItemClicked(item)">{{
            item.text
          }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import store from '@/store';
import { NavAction, NavButton } from '@/types';

const navItems: NavButton[] = [
  {
    text: 'GitHub',
    action: NavAction.LINK,
    url: 'https://github.com/couleur-tweak-tips/TweakList',
  },
  {
    text: 'Discord',
    action: NavAction.LINK,
    url: 'https://discord.com/invite/aPVMJy78Pa',
  },
  {
    text: 'About',
    action: NavAction.ABOUT,
    component: null,
  },
];

function onNavItemClicked(item: NavButton) {
  if (item.action === NavAction.LINK) return;

  if (item.action === NavAction.ABOUT) {
    store.state.showAbout = true;
  }
}
</script>

<style scoped>
header {
  height: 28px;
  padding: 16px 24px;
  background-color: #161b22;

  display: flex;
  align-items: center;
}

header > img {
  width: 38px;
  height: 38px;
  border-radius: 100%;
}

ul {
  margin: 0 15px;
  list-style: none;
  display: flex;
  gap: 10px;
}

a {
  padding: 20px 5px;
  display: inline;
  cursor: pointer;
  border-color: rgba(255, 255, 255, 0.15);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.1s ease-in;
}

a:hover {
  color: rgba(255, 255, 255, 0.7);
}
</style>
