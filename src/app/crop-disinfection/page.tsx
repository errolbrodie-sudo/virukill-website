"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "Sector Solutions",
    title: "Crop Protection & Greenhouse Portal",
    subtitle: "Evaporative cooling wet-wall sanitation, plant foliage sanitizing mists, irrigation pipeline purging, and post-harvest crop preservation.",
    secTitle: "Horticultural Biosecurity & Crop Sanitization",
    secDesc: "Virukill and its horticultural active analogs are engineered to protect crops, secure seed/bulb storage, and sanitize irrigation lines. It destroys high-consequence fungi, molds, and bacteria without leaving systemic phytotoxic residues.",
    
    p1Title: "Evaporative Wet-Wall Systems",
    p1Desc: "Wet-walls are prone to organic slime, bacterial build-up, and algae growth that restricts airflow. Dose continuously at 1:10000 (0.01%) in water tanks, or apply shock treatments at 1:1000 (0.1%) when cleaning the pads.",
    
    p2Title: "Post-Harvest Produce Dipping",
    p2Desc: "To prevent decay on harvested fruit (citrus, cherries), flower bulbs, and root crops. Wash or dip produce in a 1:1000 (0.1%) to 1:500 (0.2%) solution for up to 4 minutes. Removes surface bacteria and mold spores before packing.",
    
    p3Title: "Airborne Foliage Misting",
    p3Desc: "During high humidity or localized mold outbreaks, fog the greenhouse space daily with a 1:200 (0.5%) dilution using electric ULV cold-fogging systems. Fine droplets neutralize airborne mold and mildew spores.",
    
    p4Title: "Irrigation Line & Dripper Flush",
    p4Desc: "Hydroponic systems and drip lines accumulate bio-slime that blocks emitters. Flush lines between crop cycles at 1:1000 (0.1%) dilution, or run continuous pipeline maintenance at 1:5000 (0.02%) to prevent root-rot pathogens.",
    
    refTitle: "Critical Target Fungal Pathogens",
    refDesc: "Post-harvest rot and greenhouse wilt diseases can decimate crop yields. Virukill offers certified log-reduction against primary agricultural fungi and yeasts.",
    refBtn: "Search pathogen database",
    
    path1Name: "Gray Mold (Botrytis decay)",
    path1Sci: "Botrytis cinerea",
    path2Name: "Citrus Green Mold (Post-Harvest Rot)",
    path2Sci: "Penicillium digitatum",
    path3Name: "Fusarium Wilt / Root Rot",
    path3Sci: "Fusarium oxysporum",
  },
  he: {
    badge: "פתרונות למגזר",
    title: "פורטל הגנת הצומח וחממות",
    subtitle: "חיטוי קירות לחים לקירור אידוי, ערפול לחיטוי עלוות צמחים, טיהור צינורות השקיה ושימור יבולים לאחר קטיף.",
    secTitle: "אבטחה ביולוגית גננית וחיטוי יבולים",
    secDesc: "Virukill והמוצרים המשלימים שלו מהונדסים להגנה על יבולים, אבטחת אחסון זרעים/פקעות וחיטוי קווי השקיה. הוא מחסל עובש, פטריות וחיידקים בעלי השפעה רבה מבלי להשאיר שאריות פיטוטוקסיות מערכתיות.",
    
    p1Title: "מערכות קירור לחות (קירות רטובים)",
    p1Desc: "קירות לחים נוטים להצטברות רפש אורגני, חיידקים ואצות המגבילים את זרימת האוויר. מינון רציף ב-1:10000 (0.01%) במכלי מים, או יישום טיפול הלם ב-1:1000 (0.1%) בעת ניקוי המשטחים.",
    
    p2Title: "טבילת יבולים לאחר קטיף",
    p2Desc: "למניעת ריקבון בפירות שנקטפו (הדרים, דובדבנים), פקעות פרחים וגידולי שורש. שטפו או טבלו את היבול בתמיסת 1:1000 (0.1%) עד 1:500 (0.2%) למשל עד 4 דקות. מסיר חיידקים ונבגי עובש ממשטח הפרי לפני האריזה.",
    
    p3Title: "ערפול אווירי של עלווה",
    p3Desc: "במהלך לחות גבוהה או התפרצויות מקומיות של עובש, ערפלו את חלל החממה מדי יום במיהול של 1:200 (0.5%) באמצעות מערכות ערפול ULV קרות. טיפות עדינות מנטרלות נבגי עובש וקימחון הנישאים באוויר.",
    
    p4Title: "שטיפת קווי השקיה וטפטפות",
    p4Desc: "מערכות הידרופוניות וקווי טפטוף צוברים רפש ביולוגי החוסם את הטפטפות. שטפו את הקווים בין מחזורי גידול במיהול של 1:1000 (0.1%), או בצעו תחזוקה רציפה של הצינורות ב-1:5000 (0.02%) למניעת פתוגנים של ריקבון שורשים.",
    
    refTitle: "פתוגנים פטרייתיים קריטיים",
    refDesc: "ריקבון לאחר קטיף ומחלות נבילה בחממות עלולים להרוס את יבולי החקלאות. Virukill מציע הפחתת לוג מוסמכת נגד פטריות ושמרים חקלאיים עיקריים.",
    refBtn: "חפש במאגר הפתוגנים",
    
    path1Name: "Gray Mold (Botrytis decay)",
    path1Sci: "Botrytis cinerea",
    path2Name: "Citrus Green Mold (Post-Harvest Rot)",
    path2Sci: "Penicillium digitatum",
    path3Name: "Fusarium Wilt / Root Rot",
    path3Sci: "Fusarium oxysporum",
  },
};

export default function CropDisinfectionPage() {
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
                <span className="font-mono font-bold text-bio-700 bg-bio-50 px-2.5 py-0.5 rounded">1:1000</span>
              </div>
              <div className="p-4 flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-navy-900">{t.path2Name}</strong>
                  <span className="text-navy-400 italic">{t.path2Sci}</span>
                </div>
                <span className="font-mono font-bold text-bio-700 bg-bio-50 px-2.5 py-0.5 rounded">1:1000</span>
              </div>
              <div className="p-4 flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-navy-900">{t.path3Name}</strong>
                  <span className="text-navy-400 italic">{t.path3Sci}</span>
                </div>
                <span className="font-mono font-bold text-bio-700 bg-bio-50 px-2.5 py-0.5 rounded">1:500</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
