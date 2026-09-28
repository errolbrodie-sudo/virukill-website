"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "Sector Solutions",
    title: "Agriculture & Poultry Portal",
    subtitle: "Newcastle disease control, terminal coop disinfection, water-line biofilm eradication, and hatchery egg sanitization protocols.",
    secTitle: "Approved Poultry Biosecurity Protocols",
    secDesc: "Virukill is engineered specifically for commercial and backyard poultry farms. It has been tested and proven to destroy high-consequence viruses without damaging coops, pipes, or causing inhalation distress to birds.",
    
    p1Title: "Terminal Shed Disinfection",
    p1Desc: "Applied after litter removal and pre-cleaning. Spray all ceilings, walls, beams, and floors at a 1:200 (0.5%) dilution. Virukill's active surfactant penetrates timber cracks and brick pores, ensuring complete pathogen kill before restocking.",
    
    p2Title: "Drinking Water Line Dosing",
    p2Desc: "Water systems are the primary vector for pathogen propagation. Dose continuously at 1:1000 (0.1%) in header tanks or using dosing systems. It breaks down biofilm and prevents Newcastle virus and Salmonella from spreading through drinking lines.",
    
    p3Title: "Aerial Fogging (In Presence of Birds)",
    p3Desc: "During high-threat periods (e.g. regional avian flu outbreaks), fog the house space daily with a 1:100 (1%) dilution using electric ULV foggers. Fine droplets strip virus particles from the air, reducing flock-to-flock transmission rates.",
    
    safetyWarningBtn: "Safety Warning",
    
    p4Title: "Hatching Egg Sanitization",
    p4Desc: "Egg shells carry bacteria that can contaminate incubators and decrease hatchability. Dip hatching eggs in a warm 1:200 (0.5%) Virukill solution for 30 seconds. Removes debris, sanitizes the shell, and leaves the shell cuticle undamaged.",
    
    refTitle: "Critical Target Pathogens",
    refDesc: "Virukill provides certified, rapid log-reduction against poultry-specific diseases. If you are protecting your flock against specific regional viruses, search our full registry.",
    refBtn: "Search pathogen database",
    
    path1Name: "Newcastle Disease Virus (NDV)",
    path1Sci: "Avian Paramyxovirus-1",
    path2Name: "Bird Flu (Avian Influenza)",
    path2Sci: "Orthomyxoviridae H5N1",
    path3Name: "Gumboro Disease (IBD)",
    path3Sci: "Infectious Bursal Disease",
  },
  he: {
    badge: "פתרונות מגזריים",
    title: "פורטל חקלאות ועופות",
    subtitle: "בקרת מחלת ניוקאסל, חיטוי לולים סופי, הדברת ביופילם בקווי מים ופרוטוקולים לחיטוי ביצי דגירה.",
    secTitle: "פרוטוקולי אבטחה ביולוגית מאושרים לעופות",
    secDesc: "Virukill מתוכנן במיוחד עבור חוות עופות מסחריות ופרטיות. הוא נבדק והוכח כמשמיד וירוסים בעלי השלכות חמורות מבלי להזיק ללולים, לצינורות או לגרום למצוקה נשימתית לעופות.",
    
    p1Title: "חיטוי לולים סופי",
    p1Desc: "מיושם לאחר פינוי הרפד וניקוי מוקדם. ריסוס כל התקרות, הקירות, הקורות והרצפות בדילול 1:200 (0.5%). החומר הפעיל חודר לסדקי עץ ולנקבוביות לבנים, ומבטיח השמדה מלאה של פתוגנים לפני אכלוס מחדש.",
    
    p2Title: "מינון בקווי מי שתייה",
    p2Desc: "מערכות מים הן הווקטור הראשי להפצת פתוגנים. מינון רציף ב-1:1000 (0.1%) במכלי אגירה או במינון אוטומטי. מפרק ביופילם ומונע התפשטות ניוקאסל וסלמונלה.",
    
    p3Title: "ערפול אווירי (בנוכחות עופות)",
    p3Desc: "בתקופות איום גבוהות (כגון התפרצויות שפעת העופות באזור), ערפל את חלל המבנה מדי יום בדילול 1:100 (1%) באמצעות מערפלי ULV חשמליים. טיפות זעירות מנקות חלקיקי וירוסים מהאוויר, ומפחיתות את שיעור ההדבקה.",
    
    safetyWarningBtn: "אזהרת בטיחות",
    
    p4Title: "חיטוי ביצי דגירה",
    p4Desc: "קליפות ביצים נושאות חיידקים שעלולים לזהם מדגרות ולהפחית את אחוזי הבוקענות. הטבלת ביצי דגירה בתמיסת Virukill חמה במינון 1:200 (0.5%) למשך 30 שניות.",
    
    refTitle: "פתוגנים קריטיים לעופות",
    refDesc: "Virukill מספק הפחתה לוגריתמית מהירה ומאושרת כנגד מחלות עופות ספציפיות.",
    refBtn: "חפש במאגר הפתוגנים",
    
    path1Name: "Newcastle Disease Virus (NDV)",
    path1Sci: "Avian Paramyxovirus-1",
    path2Name: "Bird Flu (Avian Influenza)",
    path2Sci: "Orthomyxoviridae H5N1",
    path3Name: "Gumboro Disease (IBD)",
    path3Sci: "Infectious Bursal Disease",
  },
};

export default function AgriculturePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        badge={t.badge}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        {/* Core Protocols Grid */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
              {t.secTitle}
            </h2>
            <p className="mt-4 text-sm text-navy-500 leading-relaxed">
              {t.secDesc}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-navy-100 rounded-none p-6 shadow-sm">
              <h3 className="font-display text-base font-bold text-navy-950 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-bio-100 text-[10px] font-bold text-bio-700">1</span>
                {t.p1Title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-navy-500">
                {t.p1Desc}
              </p>
            </div>

            <div className="bg-white border border-navy-100 rounded-none p-6 shadow-sm">
              <h3 className="font-display text-base font-bold text-navy-950 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-bio-100 text-[10px] font-bold text-bio-700">2</span>
                {t.p2Title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-navy-500">
                {t.p2Desc}
              </p>
            </div>

            <div className="bg-white border border-navy-100 rounded-none p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base font-bold text-navy-950 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-bio-100 text-[10px] font-bold text-bio-700">3</span>
                  {t.p3Title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-navy-500">
                  {t.p3Desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-100">
                <Link
                  href="/agriculture/safety-warning"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded transition-colors shadow-2xs"
                >
                  <svg className="w-4 h-4 text-red-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{t.safetyWarningBtn}</span>
                  <svg className="w-3.5 h-3.5 text-red-500 ml-auto shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white border border-navy-100 rounded-none p-6 shadow-sm">
              <h3 className="font-display text-base font-bold text-navy-950 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-bio-100 text-[10px] font-bold text-bio-700">4</span>
                {t.p4Title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-navy-500">
                {t.p4Desc}
              </p>
            </div>
          </div>
        </section>

        {/* Pathogens Reference */}
        <section className="bg-navy-50 rounded-none p-8 border border-navy-100">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-display text-xl font-semibold text-navy-950">
                {t.refTitle}
              </h3>
              <p className="text-xs leading-relaxed text-navy-600">
                {t.refDesc}
              </p>
              <div className="pt-2">
                <Link
                  href="/pathogens"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-bio-600 hover:text-bio-700"
                >
                  {t.refBtn}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-none border border-navy-100 overflow-hidden divide-y divide-navy-50">
              <div className="p-4 flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-navy-900">{t.path1Name}</strong>
                  <span className="text-navy-400 italic">{t.path1Sci}</span>
                </div>
                <span className="font-mono font-bold text-bio-700 bg-bio-50 px-2.5 py-0.5 rounded">1:200</span>
              </div>
              <div className="p-4 flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-navy-900">{t.path2Name}</strong>
                  <span className="text-navy-400 italic">{t.path2Sci}</span>
                </div>
                <span className="font-mono font-bold text-bio-700 bg-bio-50 px-2.5 py-0.5 rounded">1:200</span>
              </div>
              <div className="p-4 flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-navy-900">{t.path3Name}</strong>
                  <span className="text-navy-400 italic">{t.path3Sci}</span>
                </div>
                <span className="font-mono font-bold text-bio-700 bg-bio-50 px-2.5 py-0.5 rounded">1:100</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
