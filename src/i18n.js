import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    common: {
      nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
    },
  },
  fr: {
    common: {
      nav: { home: "Accueil", about: "À propos", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Contact" },
    },
  },
  ar: {
    common: {
      nav: { home: "الرئيسية", about: "نبذة", experience: "الخبرة", projects: "المشاريع", skills: "المهارات", education: "التعليم", contact: "اتصل بي" },
    },
  },
};

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

if (typeof document !== "undefined") {
  document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = savedLang;
}

export default i18n;