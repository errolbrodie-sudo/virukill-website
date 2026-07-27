"use client";

import PageHero from "@/components/PageHero";
import PathogenExplorer from "@/components/PathogenExplorer";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "Efficacy Profile",
    title: "Pathogen Efficacy Registry",
    subtitle: "Search our live database of viruses, bacteria, mycoplasma, and fungi. View certified dilution guidelines, contact times, and application notes for Virukill."
  },
  he: {
    badge: "פרופיל יעילות",
    title: "מרשם יעילות פתוגנים",
    subtitle: "חפש במאגר החי שלנו של נגיפים, חיידקים, מיקופלזמה ופטריות. צפה בהנחיות מיהול מאושרות, זמני מגע והערות יישום עבור Virukill."
  }
};

export default function PathogensPage() {
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
        <PathogenExplorer />
      </div>
    </>
  );
}
