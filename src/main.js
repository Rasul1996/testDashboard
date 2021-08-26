import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { i18n } from "./lang/index.js";

import "./assets/style/index.css";

const app = createApp(App);

app.config.globalProperties.$formatNumber = (number) => {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  } else {
    return 0;
  }
};

(app.config.globalProperties.$randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}),
  app.use(store).use(i18n).mount("#app");
