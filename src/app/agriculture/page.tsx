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
    badge: "פתרונות למגזר",
    title: "פורטל חקלאות ולולים",
    subtitle: "פרוטוקולים למניעת מחלת ניוקאסל, חיטוי סופי של לולים, חיסול ביופילם בקווי מים וחיטוי ביצי דגירה.",
    secTitle: "פרוטוקולים מאושרים לאבטחה ביולוגית בלולים",
    secDesc: "Virukill מהונדס במיוחד עבור לולים מסחריים ופרטיים. הוא נבדק והוכח כמחסל נגיפים בעלי השפעה רבה מבלי לפגוע בלולים, צינורות, או לגרום למצוקה נשימתית לעופות.",
    
    p1Title: "חיטוי סופי של מבנים",
    p1Desc: "מיושם לאחר פינוי הזבל וניקוי מקדים. רסס את כל התקרות, הקירות, הקורות והרצפות במיהול של 1:200 (0.5%). חומר השטח הפעיל של Virukill חודר לסדקים בעץ ובנקבוביות הלבנים, ומבטיח חיסול מוחלט של פתוגנים לפני איכלוס מחדש.",
    
    p2Title: "מינון קווי מים לשתייה",
    p2Desc: "מערכות מים הן הווקטור העיקרי להתרבות פתוגנים. מינון רציף ב-1:1000 (0.1%) במכלי מים או באמצעות מערכות מינון. הוא מפרק ביופילם ומונע מנגיף ניוקאסל וסלמונלה להתפשט בקווי השתייה.",
    
    p3Title: "ערפול אווירי (בנוכחות עופות)",
    p3Desc: "בתקופות של איום גבוה (למשל התפרצויות שפעת העופות באזור), ערפל את חלל הלול מדי יום במיהול של 1:100 (1%) באמצעות מערכות ערפול ULV חשמליות. טיפות עדינות מסירות חלקיקי נגיף מהאוויר, ומפחיתות את שיעור ההדבקה בין להקות.",
    
    p4Title: "חיטוי ביצי דגירה",
    p4Desc: "קליפות ביצים נושאות חיידקים שעלולים לזהם מדגרות ולהפחית את אחוזי הבקיעה. טובלים ביצי דגירה בתמיסת Virukill חמימה של 1:200 (0.5%) למשך 30 שניות. מסיר לכלוך, מחטא את הקליפה ומשאיר את קוטיקולת הביצה ללא פגע.",
    
    refTitle: "פתוגני יעד קריטיים",
    refDesc: "Virukill מספק הפחתת לוג מוסמכת ומהירה נגד מחלות ספציפיות לעופות. אם אתה מגן על הלהקה שלך מפני נגיפים אזוריים ספציפיים, חפש במאגר המלא שלנו.",
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

            <div className="bg-white border border-navy-100 rounded-none p-6 shadow-sm">
              <h3 className="font-display text-base font-bold text-navy-950 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-bio-100 text-[10px] font-bold text-bio-700">3</span>
                {t.p3Title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-navy-500">
                {t.p3Desc}
              </p>
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
