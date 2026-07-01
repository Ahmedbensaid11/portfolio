import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();

  const links = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#education", label: t("nav.education") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto h-20 px-6 flex justify-between items-center">
        <h1 className="font-bold text-xl">Ahmed Ben Said</h1>
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}