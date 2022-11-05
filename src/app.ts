import store from './store';

async function fetchOptimizations(): Promise<void> {
  const manifestUrl =
    'https://raw.githubusercontent.com/couleur-tweak-tips/TweakList/master/Manifests.json';

  const response = await fetch(manifestUrl);
  store.commit('setOptimizations', await response.json());
}

fetchOptimizations();
