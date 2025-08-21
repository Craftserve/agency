import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pl from './pl.json'
import en from './en.json'

const DEFAULT_LANG = "en-US";

const userLang = navigator.language || DEFAULT_LANG;
const resources = {
  "pl": pl,
  "en-US": en,
  "en-GB": en,
};
console.log(userLang);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: userLang,
    keySeparator: false,
    nsSeparator: ".",
    fallbackLng: DEFAULT_LANG,
    cache: {
        enabled: true,
    },
    interpolation: {
        escapeValue: false,
    },
  });

  export default i18n;