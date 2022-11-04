import * as mdijs from "@mdi/js";
import mdiVue from "mdi-vue/v3";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

createApp(App)
  .use(mdiVue, {
    icons: mdijs,
  })
  .use(store)
  .mount("#app");
