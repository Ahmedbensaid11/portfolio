// src/components/home/About.jsx
import { useTranslation } from "react-i18next";
import Card from "../ui/Card";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold mb-12">{t("about.title")}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <p className="text-[var(--foreground)]/90 leading-relaxed">{t("about.bio")}</p>
        </Card>
        <Card>
          <h3 className="font-semibold mb-4">{t("about.quickFacts")}</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>{t("about.location")}</li>
            <li>{t("about.student")}</li>
            <li>{t("about.internships")}</li>
            <li>{t("about.languages")}</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}