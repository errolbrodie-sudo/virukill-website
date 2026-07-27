"use client";

import PageHero from "@/components/PageHero";
import DilutionCalculator from "@/components/DilutionCalculator";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "Dosage Guidance",
    title: "Interactive Dilution Wizard",
    subtitle: "To calculate dosages, under Step 1 select the application mode, and then under Step 2 enter the mode metrics. The calculation is automatically completed."
  },
  he: {
    badge: "הנחיות מינון",
    title: "אשף מיהול אינטראקטיבי",
    subtitle: "כדי לחשב מינונים, תחת שלב 1 בחר את מצב היישום, ולאחר מכן תחת שלב 2 הזן את נתוני המצב. החישוב מושלם באופן אוטומטי."
  }
};

export default function DilutionCalculatorPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        badge={t.badge}
      />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <DilutionCalculator />
      </div>
    </>
  );
}
