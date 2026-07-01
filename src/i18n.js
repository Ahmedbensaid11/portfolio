// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    common: {
      nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
      hero: {
        greeting: "Hi, I'm",
        role: "Software Engineering Intern",
        bio: "I build full-stack web and desktop applications with Java, Spring Boot, React and more. Currently interning at Tunisie Telecom.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
      },
      about: {
        title: "About Me",
        bio: "I'm a software engineering student and intern based in Tunisia, currently working at Tunisie Telecom on a platform for managing employee social activities. I enjoy working across the full stack — from REST APIs with Spring Boot to interfaces with React.",
        quickFacts: "Quick Facts",
        location: "📍 Nabeul, Tunisia",
        student: "🎓 Software Engineering Student",
        internships: "💼 4+ internships completed",
        languages: "🌐 EN · FR · AR",
      },
      experience: { title: "Experience" },
      projects: { title: "Projects" },
      skills: { title: "Skills" },
      education: { title: "Education" },
      contact: { title: "Contact", email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    },
  },
  fr: {
    common: {
      nav: { home: "Accueil", about: "À propos", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Contact" },
      hero: {
        greeting: "Salut, je suis",
        role: "Stagiaire en génie logiciel",
        bio: "Je développe des applications web et de bureau full-stack avec Java, Spring Boot, React et plus encore. Actuellement stagiaire chez Tunisie Telecom.",
        viewProjects: "Voir les projets",
        contactMe: "Me contacter",
      },
      about: {
        title: "À propos de moi",
        bio: "Je suis étudiant en génie logiciel et stagiaire basé en Tunisie, travaillant actuellement chez Tunisie Telecom sur une plateforme de gestion des activités sociales des employés. J'aime travailler sur l'ensemble de la pile technologique — des API REST avec Spring Boot aux interfaces avec React.",
        quickFacts: "Infos rapides",
        location: "📍 Nabeul, Tunisie",
        student: "🎓 Étudiant en génie logiciel",
        internships: "💼 4+ stages effectués",
        languages: "🌐 EN · FR · AR",
      },
      experience: { title: "Expérience" },
      projects: { title: "Projets" },
      skills: { title: "Compétences" },
      education: { title: "Formation" },
      contact: { title: "Contact", email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    },
  },
  ar: {
    common: {
      nav: { home: "الرئيسية", about: "نبذة", experience: "الخبرة", projects: "المشاريع", skills: "المهارات", education: "التعليم", contact: "اتصل بي" },
      hero: {
        greeting: "مرحباً، أنا",
        role: "متدرب هندسة برمجيات",
        bio: "أقوم ببناء تطبيقات ويب وتطبيقات سطح مكتب متكاملة باستخدام Java وSpring Boot وReact وغيرها. أعمل حالياً كمتدرب في Tunisie Telecom.",
        viewProjects: "عرض المشاريع",
        contactMe: "تواصل معي",
      },
      about: {
        title: "نبذة عني",
        bio: "أنا طالب هندسة برمجيات ومتدرب مقيم في تونس، أعمل حالياً في Tunisie Telecom على منصة لإدارة الأنشطة الاجتماعية للموظفين. أستمتع بالعمل عبر جميع طبقات التطوير — من واجهات REST API باستخدام Spring Boot إلى الواجهات باستخدام React.",
        quickFacts: "معلومات سريعة",
        location: "📍 نابل، تونس",
        student: "🎓 طالب هندسة برمجيات",
        internships: "💼 أكثر من 4 تدريبات",
        languages: "🌐 EN · FR · AR",
      },
      experience: { title: "الخبرة" },
      projects: { title: "المشاريع" },
      skills: { title: "المهارات" },
      education: { title: "التعليم" },
      contact: { title: "اتصل بي", email: "البريد الإلكتروني", linkedin: "لينكدإن", github: "جيثب" },
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