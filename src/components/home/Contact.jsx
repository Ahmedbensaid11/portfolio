// src/components/home/Contact.jsx
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import Card from "../ui/Card";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-bold mb-12">{t("contact.title")}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="text-center">
          <Mail className="mx-auto mb-3" />
          <p className="text-sm text-[var(--muted)] mb-3">{t("contact.email")}</p>
          <a href="mailto:ahmed.ben.said660@gmail.com" className="font-medium break-all">ahmed.ben.said660@gmail.com</a>
        </Card>
        <Card className="text-center">
          <Linkedin className="mx-auto mb-3" />
          <p className="text-sm text-[var(--muted)] mb-3">{t("contact.linkedin")}</p>
          <a href="https://www.linkedin.com/in/ahmed-bensaid-83844225b/" target="_blank" rel="noreferrer" className="font-medium">ahmed-bensaid</a>
        </Card>
        <Card className="text-center">
          <Github className="mx-auto mb-3" />
          <p className="text-sm text-[var(--muted)] mb-3">{t("contact.github")}</p>
          <a href="https://github.com/Ahmedbensaid11" target="_blank" rel="noreferrer" className="font-medium">Ahmedbensaid11</a>
        </Card>
      </div>
    </section>
  );
}