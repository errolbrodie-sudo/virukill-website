"use client";

import PageHero from "@/components/PageHero";
import ResourceLibrary from "@/components/ResourceLibrary";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "Documentation",
    title: "Technical Resource Library",
    subtitle: "Access and download Safety Data Sheets (SDS), Technical Sheets, biosecurity guides, and regulatory registration approvals issued by the Israel Ministry of Agriculture."
  },
  he: {
    badge: "תיעוד",
    title: "ספריית משאבים טכניים",
    subtitle: "גישה והורדה של גיליונות בטיחות (SDS), גיליונות טכניים, מדריכי אבטחה ביולוגית ואישורי רישום רגולטוריים שהונפקו על ידי משרד החקלאות הישראלי."
  }
};

export default function ResourcesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        badge={t.badge}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ResourceLibrary />
      </div>
    </>
  );
}
