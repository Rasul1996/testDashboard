import { createI18n } from "vue-i18n";
import uz from "./uz.json";
import ru from "./ru.json";
import oz from "./oz.json"
const messages = {
  uz,
  ru,
  oz
};

export const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages,
});
