"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "Sector Solutions",
    title: "Food Prep & Hospitality Portal",
    subtitle: "Sanitization protocols for commercial kitchens, food processing facilities, restaurants, and slaughterhouses. Non-smelling, surfactant-infused cleaning.",
    secTitle: "Hygiene Management in Food Processing",
    secDesc: "In food preparation, safety and sensory preservation are critical. Virukill's formulation is non-smelling, leaves no taint on food contact surfaces (following a clean water rinse), and includes high-quality surfactants that clean and disinfect in a single step.",
    
    p1Title: "Food Contact Surfaces",
    p1Desc: "For sanitizing stainless steel prep tables, cutting boards, slicing machines, and counters. Wash down surfaces with a 1:200 (0.5%) dilution. Allow 5-10 minutes contact time, then rinse thoroughly with clean potable water before food contact.",
    
    p2Title: "Equipment & Cold Storage Soaking",
    p2Desc: "To clean removable machinery components, knives, and storage containers. Submerge components in a 1:200 Virukill bath. The surfactant breaks down residual grease and proteins, while the active agent destroys mold, yeasts, and bacteria.",
    
    p3Title: "Back-of-House Floors & Walls",
    p3Desc: "Slaughterhouses, packaging stations, and restaurant kitchens accumulate organic matter quickly. Wash floors and drain walls daily with a 1:200 spray or mop solution. Prevents bacterial proliferation in damp floor seams and drainage pipes.",
    
    p4Title: "Non-Corrosive Cleanliness",
    p4Desc: "Unlike chlorine-based bleaches, Virukill is non-corrosive and rust-free. It does not cause pitting on high-end stainless steel tables, nor does it degrade rubber seals on cold room doors or processing machinery.",
    
    refTitle: "Key Foodborne Pathogens",
    refDesc: "Preventing cross-contamination of food poisoning bacteria is vital for hospitality and packaging audits. Virukill completely kills primary foodborne pathogens at standard concentrations.",
    refBtn: "Search pathogen database",
    
    path1Name: "Salmonella enterica",
    path1Sci: "Enterobacteriaceae",
    path2Name: "Listeria monocytogenes",
    path2Sci: "Listeriaceae Gram+",
    path3Name: "Escherichia coli (E. coli)",
    path3Sci: "Gram- Rods",
  },
  he: {
    badge: "פתרונות למגזר",
    title: "פורטל הכנת מזון ואירוח",
    subtitle: "פרוטוקולי חיטוי למטבחים מסחריים, מפעלי עיבוד מזון, מסעדות ובתי מטבחיים. ניקוי ללא ריח מועשר בחומרי שטח פעילים.",
    secTitle: "ניהול היגיינה בעיבוד מזון",
    secDesc: "בהכנת מזון, הבטיחות והשימור החושי הם קריטיים. הפורמולה של Virukill ללא ריח, אינה משאירה סימנים על משטחים הבאים במגע עם מזון (לאחר שטיפה במים נקיים), ומכילה חומרי שטח פעילים באיכות גבוהה המנקים ומחטאים בשלב אחד.",
    
    p1Title: "משטחים הבאים במגע עם מזון",
    p1Desc: "לחיטוי שולחנות הכנה מנירוסטה, קרשי חיתוך, מכונות פריסה ודלפקים. שטפו משטחים במיהול של 1:200 (0.5%). אפשרו זמן מגע של 5-10 דקות, ולאחר מכן שטפו היטב במים נקיים לשתייה לפני מגע עם מזון.",
    
    p2Title: "השריית ציוד ואחסון בקירור",
    p2Desc: "לניקוי רכיבי מכונות נשלפים, סכינים ומכלי אחסון. השרו את הרכיבים באמבט Virukill של 1:200. חומר השטח הפעיל מפרק שאריות שומן וחלבונים, בעוד שהחומר הפעיל מחסל עובש, שמרים וחיידקים.",
    
    p3Title: "רצפות וקירות באזורי עבודה",
    p3Desc: "בתי מטבחיים, תחנות אריזה ומטבחי מסעדות צוברים חומר אורגני במהירות. שטפו רצפות וקירות ניקוז מדי יום בתמיסת ריסוס או שטיפה של 1:200. מונע התרבות חיידקים בתפרי רצפה לחים ובצינורות ניקוז.",
    
    p4Title: "ניקיון ללא קורוזיה",
    p4Desc: "בניגוד לחומרי הלבנה מבוססי כלור, Virukill אינו קורוזיבי ונקי מחלודה. הוא אינו גורם להיווצרות חורים בשולחנות נירוסטה יוקרתיים, ואינו פוגע באטמי גומי בדלתות חדרי קירור או במכונות עיבוד.",
    
    refTitle: "פתוגנים עיקריים הנישאים במזון",
    refDesc: "מניעת זיהום צולב של חיידקי הרעלת מזון חיונית לביקורות אירוח ואריזה. Virukill מחסל לחלוטין פתוגנים ראשוניים הנישאים במזון בריכוזים סטנדרטיים.",
    refBtn: "חפש במאגר הפתוגנים",
    
    path1Name: "Salmonella enterica",
    path1Sci: "Enterobacteriaceae",
    path2Name: "Listeria monocytogenes",
    path2Sci: "Listeriaceae Gram+",
    path3Name: "Escherichia coli (E. coli)",
    path3Sci: "Gram- Rods",
  },
};

export default function FoodPrepPage() {
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
                <span className="font-mono font-bold text-bio-700 bg-bio-50 px-2.5 py-0.5 rounded">1:200</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
