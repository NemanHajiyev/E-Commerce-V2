import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const resources = {
    az: {
        translation: {
            input: "Məhsul axtarın...",
            login: "Giriş",
            home: "Ev",
            shop: "Mağaza",
            contact: "Əlaqə",
            about: "Haqqında",
            category: "Kateqoriyalar",
            electornic: "Elektronika",
            fashion: "Geyim",
            homekitchen: "Ev və Mətbəx",
            beauty: "Gözəllik",
            sports: "İdman",
            auto: "Avtomobil",
            logout: "Çıxış",
            order: "Sifarişlərim"

        }
    },
    en: {
        translation: {
            input: "Search product",
            login: "login",
            home: "Home",
            shop: "Shop",
            contact: "Contact",
            about: "About",
            category: "Shop By Categories",
            electornic: "Electronics",
            fashion: "Fashion",
            homekitchen: "Home&Kitchen",
            beauty: "Beauty",
            sports: "Sports",
            auto: "Automotive",
            logout: "Log Out",
            order: "Order Summary"
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        lng: "az",
        resources
    });

export default i18n;
