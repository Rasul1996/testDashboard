import { createI18n } from "vue-i18n";
import Uz from './uz.json'
const messages = {
  Uz,
  Ru: {
    hello: "こんにちは、世界",
  },
};

export const i18n = createI18n({
  locale: "Uz", // set locale
  fallbackLocale: "Ru", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});
