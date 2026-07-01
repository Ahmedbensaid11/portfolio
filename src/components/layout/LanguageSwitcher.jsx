import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "🇬🇧 EN" },
  { code: "fr", label: "🇫🇷 FR" },
  { code: "ar", label: "🇹🇳 AR" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  return (
    <select
      value={i18n.language}
      onChange={handleChange}
      className="border border-[var(--border)] rounded-lg px-2 py-2 bg-[var(--background)]"
    >
      {LANGUAGES.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.label}
        </option>
      ))}
    </select>
  );
}