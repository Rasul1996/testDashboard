import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "./assets/style/index.css";

const app = createApp(App);

app.config.globalProperties.$formatNumber = (number) => {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  } else {
    return 0;
  }
};

app.use(store).mount("#app");
