// src/components/home/Hero.jsx
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import mePhoto from "../../assets/me.jpg";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center gap-6">
      <img
        src={mePhoto}
        alt="Ahmed Ben Said"
        className="w-60 h-60 rounded-full object-cover border-4 border-[var(--border)] shadow-lg"
      />
      <p className="text-[var(--primary)] font-medium">{t("hero.greeting")}</p>
      <h1 className="text-5xl sm:text-6xl font-bold">Ahmed Ben Said</h1>
      <h2 className="text-xl sm:text-2xl text-[var(--muted)]">{t("hero.role")}</h2>
      <p className="max-w-xl text-[var(--muted)]">{t("hero.bio")}</p>
      <div className="flex gap-4 mt-4">
        <a href="#projects"><Button>{t("hero.viewProjects")}</Button></a>
        <a href="#contact"><Button variant="outline">{t("hero.contactMe")}</Button></a>
      </div>
    </section>
  );
}