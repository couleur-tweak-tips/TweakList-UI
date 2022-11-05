import { Category, Optimization } from '@/types';
import { createStore } from 'vuex';
import { UAParser } from 'ua-parser-js';

const store = createStore({
  state: {
    showAbout: false,
    optimizations: [] as Optimization[],
    categories: [] as Category[],
    selectedOs: 'windows' as 'windows' | 'linux',
    selectedCategory: 'All optimizations',
    selectedOptimization: null as unknown as Optimization,
    userOs: UAParser().os.name,
  },
  getters: {},
  mutations: {
    setOptimizations(state, payload: Optimization[]) {
      // The optimization list from the API
      // set the `ValidValues` field as a string
      // where the values are space separated.
      // Those two map methods are used to
      // convert this field into a JS array
      payload = payload.map((opt) => {
        opt.Path = opt.Path.replace('/modules/', 'modules/');
        opt.Platform = opt.Platform.map((v) => v.toLowerCase()) as (
          | 'windows'
          | 'linux'
        )[];
        return opt;
      });

      const categories: Category[] = [];

      for (const optimization of payload) {
        if (!optimization.Category) continue;
        const existingCategory = categories.find(
          (category) => category.CategoryName === optimization.Category
        );

        if (existingCategory) {
          const os = new Set(existingCategory.Os);
          for (const platform of optimization.Platform) {
            os.add(platform);
          }
          existingCategory.Os = Array.from(os);
        } else {
          categories.push({
            CategoryName: optimization.Category,
            Os: optimization.Platform,
          });
        }
      }

      state.categories = categories;
      state.optimizations = payload;
      state.selectedOptimization = payload[0];

      const url = new URLSearchParams(window.location.search);
      const optimizationForParam = payload.find(
        (v) => v.Name === url.get('tweak')
      );
      if (optimizationForParam)
        state.selectedOptimization = optimizationForParam;
    },
  },
  actions: {},
  modules: {},
});

store.state.selectedOs = store.state.userOs === 'Windows' ? 'windows' : 'linux';

export default store;
