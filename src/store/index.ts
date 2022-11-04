import { Category, Optimization } from "@/types";
import { createStore } from "vuex";

export default createStore({
  state: {
    optimizations: [] as Optimization[],
    categories: [] as Category[],
    selectedOs: "windows" as "windows" | "linux",
    selectedCategory: "All optimizations",
    selectedOptimization: null as unknown as Optimization,
  },
  getters: {},
  mutations: {
    setOptimizations(state, payload) {
      // The optimization list from the API
      // set the `ValidValues` field as a string
      // where the values are space separated.
      // Those two map methods are used to
      // convert this field into a JS array
      payload = payload.map((opt: any) => ({
        ...opt,
        Parameters: opt.Parameters.map((param: any) => {
          if (param.ValidValues && param.ValidValues !== null)
            param.ValidValues = param.ValidValues.split(" ");
          return param;
        }),
      }));

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
    },
  },
  actions: {},
  modules: {},
});
