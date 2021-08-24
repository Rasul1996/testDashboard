import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "./assets/style/index.css";

const app = createApp(App);

app.config.globalProperties.$formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

app.use(store).mount("#app");
