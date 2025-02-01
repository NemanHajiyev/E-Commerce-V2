import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import az from "./az.json";
import en from "./en.json";

const resources = {
    az: { translation: az },
    en: { translation: en },

};

i18n.use(initReactI18next).init({
    lng: "az",
    fallbackLng: "en",
    resources,
    interpolation: { escapeValue: false },
});

export default i18n;
