"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "Sector Solutions",
    title: "Home & Veterinary Portal",
    subtitle: "Sanitization protocols for pet enclosures, household food surfaces, dog kennels, aviaries, and general home biosecurity.",
    secTitle: "Safe & Reliable Disinfection for Homes and Kennels",
    secDesc: "Household biosecurity requires chemical solutions that are highly active against viruses but safe to use around children, dogs, cats, and birds. Virukill's diluted formulation is non-smelling, non-corrosive, and doesn't damage home surfaces, cages, or fabrics.",
    
    p1Title: "Pet Cages & Kennels",
    p1Desc: "For cleaning dog crates, cat carriers, rabbit cages, and pet toys. Spray or wash down surfaces with a 1:200 (0.5%) dilution. Let it stand for 10 minutes to kill bacteria and fungal spores, then rinse thoroughly if the pet licks the surface.",
    
    p2Title: "Aviaries & Pigeon Lofts",
    p2Desc: "Pigeons and birds are highly sensitive to strong chemical smells like chlorine or phenol. Virukill is completely non-smelling and safe to fog or spray inside lofts and cages, even in the presence of birds, preventing Newcastle disease.",
    
    p3Title: "Everyday Surface Sanitation",
    p3Desc: "Excellent for countertops, sinks, garbage bins, and bathroom surfaces. Use a spray bottle filled with a 1:200 solution. Instantly destroys standard household bacteria and stops mold growth in damp corners.",
    
    p4Title: "Fabric & Bedding Washing",
    p4Desc: "Pet blankets, cushions, and groomer towels can carry fungal spores. Add Virukill to the washing machine rinse cycle at a rate of 5ml per Liter of estimated water capacity to sanitize fabrics without bleaching or fading colors.",
    
    refTitle: "Home Efficacy Targets",
    refDesc: "Keep your veterinary environment or home free from transmissible diseases. Search our full registry to find custom dilutions for specific viruses.",
    refBtn: "Search pathogen database",
    
    path1Name: "Parvovirus (Canine/Feline)",
    path1Sci: "Parvoviridae DNA",
    path2Name: "Aspergillus niger (Black Mold)",
    path2Sci: "Aspergillaceae Spores",
    path3Name: "Ringworm (Tinea)",
    path3Sci: "Microsporum / Trichophyton",
  },
  he: {
    badge: "פתרונות למגזר",
    title: "פורטל בית וטרינריה",
    subtitle: "פרוטוקולי חיטוי למבני חיות מחמד, משטחי מזון ביתיים, מכלאות כלבים, שובכים ואבטחה ביולוגית ביתית כללית.",
    secTitle: "חיטוי בטוח ואמין לבתים ומכלאות",
    secDesc: "אבטחה ביולוגית ביתית דורשת פתרונות כימיים הפעילים מאוד נגד נגיפים אך בטוחים לשימוש בסביבת ילדים, כלבים, חתולים וציפורים. הפורמולה המהולה של Virukill היא ללא ריח, אינה קורוזיבית ואינה פוגעת במשטחי הבית, כלובים או בדים.",
    
    p1Title: "כלובים ומכלאות חיות מחמד",
    p1Desc: "לניקוי כלובי כלבים, מנשאי חתולים, כלובי ארנבים וצעצועי חיות מחמד. רססו או שטפו משטחים במיהול של 1:200 (0.5%). השאירו למשך 10 דקות לחיסול חיידקים ונבגי פטריות, ולאחר מכן שטפו היטב אם חיית המחמד מלקקת את המשטח.",
    
    p2Title: "כלובי תעופה ושובכי יונים",
    p2Desc: "יונים וציפורים רגישות מאוד לריחות כימיים חזקים כמו כלור או פנול. Virukill הוא ללא ריח לחלוטין ובטוח לערפול או ריסוס בתוך שובכים וכלובים, אפילו בנוכחות ציפורים, למניעת מחלת ניוקאסל.",
    
    p3Title: "חיטוי משטחים יומיומי",
    p3Desc: "מצוין למשטחי שיש, כיורים, פחי אשפה ומשטחי אמבטיה. השתמשו בבקבוק ריסוס המלא בתמיסת 1:200. מחסל באופן מיידי חיידקים ביתיים רגילים ועוצר צמיחת עובש בפינות לחות.",
    
    p4Title: "כביסת בדים ומצעים",
    p4Desc: "שמיכות לחיות מחמד, כריות ומגבות טיפוח עלולות לשאת נבגי פטריות. הוסיפו את Virukill למחזור השטיפה של מכונת הכביסה בקצב של 5 מ\"ל לליטר מים משוער כדי לחטא בדים מבלי להלבין או להדהות צבעים.",
    
    refTitle: "יעדי יעילות ביתיים",
    refDesc: "שמרו על הסביבה הוטרינרית או הביתית שלכם נקייה ממחלות מדבקות. חפשו במאגר המלא שלנו כדי למצוא יחסי מיהול מותאמים אישית לנגיפים ספציפיים.",
    refBtn: "חפש במאגר הפתוגנים",
    
    path1Name: "Parvovirus (Canine/Feline)",
    path1Sci: "Parvoviridae DNA",
    path2Name: "Aspergillus niger (Black Mold)",
    path2Sci: "Aspergillaceae Spores",
    path3Name: "Ringworm (Tinea)",
    path3Sci: "Microsporum / Trichophyton",
  },
};

export default function ConsumerPage() {
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
