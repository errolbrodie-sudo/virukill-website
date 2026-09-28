"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "MANDATORY SAFETY PROTOCOL & LEGAL DISCLAIMER",
    title: "Aerial Fogging Safety Warning",
    subtitle: "Occupational Health & Safety Disclaimer and Operator Standard Operating Procedure based on Official Product Label & SDS Hazard Classifications.",
    
    backLink: "← Return to Agriculture & Poultry Portal",

    precedenceTitle: "MANUFACTURER PRODUCT LABEL & SDS PRECEDENCE NOTICE",
    precedenceText: "The official disinfectant product label and current Safety Data Sheet (SDS) take absolute precedence over this website's general information. Users must read, understand, and strictly comply with the product label, SDS, and applicable occupational safety regulations before handling or applying any chemical disinfectant.",

    activeIngredientTitle: "Active Ingredient & Label Identification",
    activeIngredientText: "Didecyldimethylammonium chloride / Poly Dimethyl Ammonium Chloride (Quaternary Ammonium Compound) @ 120 g/L (Act 36 of 1947 / Reg. No. G 2838 & L7115).",

    hazardsTitle: "Official Product Label Hazard Statements",
    hazardsSubtitle: "The product label identifies the following primary chemical and environmental hazards:",
    hazards: [
      { text: "Harmful if inhaled — mist and aerosols present severe respiratory exposure risks.", icon: "🫁" },
      { text: "Causes serious eye damage — risk of irreversible ocular injury from splashing or mists.", icon: "👁️" },
      { text: "Causes skin irritation — harmful in contact with skin.", icon: "⚠️" },
      { text: "Harmful if swallowed — toxic if ingested.", icon: "🤢" },
      { text: "Very toxic to aquatic life with long-lasting effects — severe environmental risk.", icon: "🐟" },
      { text: "Combustible liquid — keep away from heat, sparks, and open flame.", icon: "🔥" }
    ],

    warningHeader: "⚠️ IMPORTANT SAFETY WARNING — AERIAL FOGGING",
    warningExplanation: "Aerial fogging involves dispersing disinfectant chemicals into the air as ultra-fine mists and aerosols. During and immediately following application, these airborne droplets create significant inhalation, ocular, dermal, and contact exposure hazards for operators and nearby personnel.",
    trainedPersonnelNotice: "Aerial fogging must only be carried out by trained personnel who have read and understood the applicable product label and Safety Data Sheet (SDS).",

    doNotBreatheTitle: "DO NOT BREATHE THE MIST OR SPRAY.",
    doNotBreatheText: "Personnel must avoid inhaling fogging aerosols and mists under all circumstances. Appropriate respiratory protection as specified by the product SDS and applicable occupational safety requirements must be selected and worn before entering or working in the fogging zone.",

    ppeTitle: "Personal Protective Equipment (PPE) Requirements",
    ppeSubtitle: "Personnel carrying out or supervising aerial fogging must wear the PPE specified by the product label and SDS, including:",
    ppeItems: [
      "Appropriate respiratory protection suitable for chemical mists and aerosols as specified by the product SDS.",
      "Chemical-resistant protective gloves.",
      "Protective clothing / coveralls to prevent skin and clothing contamination.",
      "Appropriate eye and face protection (e.g. full face shield or chemical splash goggles) to protect against serious eye damage."
    ],

    respiratoryCautionTitle: "CRITICAL RESPIRATORY PROTECTION NOTICE",
    respiratoryCautionText: "A standard surgical mask or ordinary dust mask MUST NOT be assumed to provide protection against disinfectant mist, aerosol, vapour, or chemical exposure. Appropriate respiratory protection must be selected based on the specific product SDS, formulation, concentration, application equipment, and exposure conditions.",

    eyeSkinTitle: "Eye & Skin Exposure Controls",
    eyeSkinItems: [
      "Always wear protective gloves, protective clothing, and appropriate eye protection.",
      "Avoid all contact with skin and eyes.",
      "Wash exposed skin thoroughly after handling, consistent with the product label and SDS.",
      "Because the product label identifies serious eye damage as a hazard, eye and face protection must be strictly enforced."
    ],

    peopleAnimalsTitle: "Exclusion Zone: Protection of People & Animals",
    peopleAnimalsItems: [
      "People and animals must not be exposed to the fogging operation unless the specific product label and applicable regulations expressly permit such exposure.",
      "Before fogging, the operator must establish the required exclusion zone and ensure that unauthorized persons and animals are kept away from the treatment area.",
      "Keep product and application equipment out of reach of children and animals.",
      "Do not state or assume a specific re-entry period unless explicitly specified by the relevant product label or SDS."
    ],

    ventilationTitle: "Ventilation & Re-Entry Requirements",
    ventilationText: "The treated area must not be re-entered until the conditions specified by the product label, SDS, manufacturer instructions, and applicable regulations have been satisfied. Where ventilation is required, it must be carried out according to the product instructions and site-specific risk assessment. Do not assume or enforce fixed re-entry times without verifying manufacturer documentation.",

    environmentTitle: "🐟 ENVIRONMENTAL & AQUATIC PROTECTION WARNING",
    environmentNotice: "Because official product labels identify significant aquatic environmental hazards, strict precautions must be taken to prevent environmental contamination.",
    environmentBodiesTitle: "The product must NOT be allowed to contaminate:",
    environmentBodies: ["Drains", "Sewage systems", "Ponds", "Streams", "Rivers", "Aquariums", "Other bodies of water"],
    environmentDisposal: "Avoid unnecessary environmental exposure. Chemical residues, washings, and contaminated containers must be disposed of in accordance with the product label, SDS, and applicable local environmental regulations.",

    verificationTitle: "Operator Pre-Operation Verification Checklist",
    verificationSubtitle: "Users must verify the following parameter items prior to commencing fogging operations:",
    verificationItems: [
      "Correct product verification & approval",
      "Correct concentration & dilution ratio",
      "Approved application method",
      "Approved fogging equipment",
      "Required PPE specified by SDS",
      "Required ventilation procedures",
      "Required contact / exposure time",
      "Required re-entry conditions & clearance",
      "Approved storage & waste disposal protocols"
    ],

    disclaimerTitle: "IMPORTANT LEGAL DISCLAIMER & LIMITATION OF LIABILITY",
    disclaimerText1: "This website provides general information and does not replace the manufacturer's product label, Safety Data Sheet (SDS), applicable legislation, occupational-safety requirements, or instructions from a qualified professional. Users are responsible for verifying that the product and application method are approved for the intended use and for following all current manufacturer and regulatory requirements.",
    disclaimerText2: "The website owner/operator does not guarantee that the information is suitable for every product, application, facility, jurisdiction, or operating condition.",

    emergencyTitle: "EMERGENCY & FIRST-AID WARNING",
    emergencyText: "If accidental exposure occurs—particularly inhalation, eye exposure, ingestion, or significant skin exposure—follow the first-aid instructions on the current product label/SDS immediately and seek medical assistance or contact emergency poison services.",
    helplineTitle: "Official Poison & Emergency Helplines (from product labels):",
    helplines: [
      "Human / Poisons Helpline: +27 (0)861 555 777",
      "Griffon Poison Information Centre: +27 (0)82 446 8946"
    ],

    downloadSds: "Download Official Product SDS (PDF)",
    contactSafety: "Contact Technical Support & Safety Officer"
  },
  he: {
    badge: "פרוטוקול בטיחות חובה והצהרת פטור מאחריות",
    title: "אזהרת בטיחות לערפול אווירי",
    subtitle: "הצהרת בטיחות תעסוקתית ונוהל תפעול מפעיל המבוססים על סיווגי הסיכון הרשמיים בתווית המוצר וגיליון ה-SDS.",
    
    backLink: "← חזרה לפורטל חקלאות ועופות",

    precedenceTitle: "הודעת עדיפות לתווית המוצר וגיליון ה-SDS",
    precedenceText: "תווית חומר החיטוי הרשמית וגיליון בטיחות החומרים (SDS) העדכני בעלי עדיפות מוחלטת על פני המידע הכללי באתר זה. על המשתמשים לקרוא, להבין ולציית בקפדנות לתווית המוצר, ה-SDS ותקנות הבטיחות התקפות לפני טיפול או יישום של חומר חיטוי כימי.",

    activeIngredientTitle: "רכיב פעיל וזיהוי תווית",
    activeIngredientText: "Didecyldimethylammonium chloride / Poly Dimethyl Ammonium Chloride (תרכובת אמוניום רבעונית) בריכוז 120 גרם/ליטר (חוק 36 משנת 1947 / רישום מס' G 2838 ו-L7115).",

    hazardsTitle: "הצהרות סיכון רשמיות מתווית המוצר",
    hazardsSubtitle: "תווית המוצר מציינת את הסיכונים הכימיים והסביבתיים העיקריים הבאים:",
    hazards: [
      { text: "מזיק בשאיפה — תרסיסים ואדים מהווים סיכון נשימתי חמור.", icon: "🫁" },
      { text: "גורם לנזק חמור בעיניים — סיכון לפגיעה בלתי הפיכה בעיניים מתרסיס או התזה.", icon: "👁️" },
      { text: "גורם לגירוי בעור — מזיק במגע עם העור.", icon: "⚠️" },
      { text: "מזיק בבליעה — רעיל במקרה של בליעה.", icon: "🤢" },
      { text: "רעיל מאוד לאורגניזמים במים עם השפעות ממושכות — סיכון סביבתי חמור.", icon: "🐟" },
      { text: "נוזל דליק — הרחק ממקורות חום, ניצוצות ולשונות אש.", icon: "🔥" }
    ],

    warningHeader: "⚠️ אזהרת בטיחות חשובה — ערפול אווירי",
    warningExplanation: "ערפול אווירי כולל פיזור כימיקלי חיטוי באוויר כתרסיסים זעירים. במהלך היישום ומיד לאחריו, חלקיקים אלו נישאים באוויר ויוצרים סיכוני שאיפה, פגיעה בעיניים, במגע בעור ובמגע עם משטחים עבור המפעילים והצוות בסביבה.",
    trainedPersonnelNotice: "ערפול אווירי חייב להתבצע אך ורק על ידי צוות מוסמך שקרא והבין את תווית המוצר התקפה ואת גיליון בטיחות החומרים (SDS).",

    doNotBreatheTitle: "אין לשאוף את התרסיס או האדים.",
    doNotBreatheText: "על הצוות להימנע משאיפת תרסיסי ערפול ואדים בכל נסיבה. יש לבחור וללבוש ציוד הגנת נשימה מתאים כפי שמצוין ב-SDS של המוצר ובתקנות הבטיחות התעסוקתית לפני כניסה או עבודה באזור הערפול.",

    ppeTitle: "דרישות ציוד מגן אישי (PPE)",
    ppeSubtitle: "אנשי צוות המבצעים או ממפקחים על ערפול אווירי חייבים ללבוש את ה-PPE המצוין בתווית המוצר וב-SDS, כולל:",
    ppeItems: [
      "הגנת נשימה מתאימה לתרסיסים ואדים כימיים כפי שמצוין ב-SDS של המוצר.",
      "כפפות מגן עמידות לכימיקלים.",
      "ביגוד מגן / סרבלים למניעת זיהום העור והבגדים.",
      "הגנת עיניים ופנים מתאימה (כגון מגן פנים מלא או משקפי מגן נגד התזה) להגנה מפני נזק חמור בעיניים."
    ],

    respiratoryCautionTitle: "אזהרת הגנת נשימה קריטית",
    respiratoryCautionText: "אין להניח שמסכת מנתחים סטנדרטית או מסכת אבק רגילה מספקת הגנה מפני תרסיסי חיטוי, אדים או חשיפה כימית. יש לבחור הגנת נשימה מתאימה על בסיס ה-SDS הספציפי, הריכוז, ציוד היישום ותנאי החשיפה.",

    eyeSkinTitle: "בקרת חשיפה לעיניים ולעור",
    eyeSkinItems: [
      "ענוד תמיד כפפות מגן, ביגוד מגן והגנת עיניים מתאימה.",
      "מנע כל מגע עם העור והעיניים.",
      "שטוף עור חשוף ביסודיות לאחר הטיפול, בהתאם לתווית המוצר ול-SDS.",
      "מאחר ותווית המוצר מציינת נזק חמור בעיניים כסיכון, יש לאכוף בקפדנות הגנת עיניים ופנים."
    ],

    peopleAnimalsTitle: "אזור הרחקה: הגנה על בני אדם ובעלי חיים",
    peopleAnimalsItems: [
      "אין לחשוף בני אדם ובעלי חיים לפעולת הערפול אלא אם כן תווית המוצר הספציפית והתקנות התקפות מתירות זאת במפורש.",
      "לפני הערפול, על המפעיל להגדיר את אזור ההרחקה הנדרש ולוודא שאנשים ובעלי חיים בלתי מורשים מורחקים מאזור הטיפול.",
      "רחיק את המוצר וציוד היישום מהישג ידם של ילדים ובעלי חיים.",
      "אין לציין או להניח תקופת כניסה מחדש מסוימת אלא אם כן צוינה במפורש בתווית המוצר או ב-SDS הרלוונטי."
    ],

    ventilationTitle: "דרישות אוורור וכניסה מחדש",
    ventilationText: "אין להיכנס מחדש לאזור המטופל עד שתנאי תווית המוצר, ה-SDS, הוראות היצרן והתקנות התקפות יתמלאו במלואם. כאשר נדרש אוורור, יש לבצעו בהתאם להוראות המוצר והערכת הסיכונים הספציפית לאתר.",

    environmentTitle: "🐟 אזהרת הגנה על הסביבה ומקורות מים",
    environmentNotice: "מאחר ותוויות המוצר הרשמיות מציינות סיכונים סביבתיים חמורים למים, יש לנקוט אמצעי זהירות קפדניים למניעת זיהום סביבתי.",
    environmentBodiesTitle: "אסור לאפשר למוצר לזהם:",
    environmentBodies: ["ניקוזים", "מערכות ביוב", "בריכות", "נחלים", "נהרות", "אקווריומים", "מקורות מים אחרים"],
    environmentDisposal: "מנע חשיפה סביבתית מיותרת. שאריות כימיקלים, שטיפות ואריזות מזוהמות יש לסלק בהתאם לתווית המוצר, ה-SDS ותקנות איכות הסביבה המקומיות.",

    verificationTitle: "רשימת תזכורת לבדיקת מפעיל לפני ערפול",
    verificationSubtitle: "על המשתמשים לוודא את הפרמטרים הבאים לפני תחילת פעולות הערפול:",
    verificationItems: [
      "אימות ואישור המוצר הנכון",
      "ריכוז ויחס דילול נכונים",
      "שיטת יישום מאושרת",
      "ציוד ערפול מאושר",
      "ציוד מגן אישי נדרש לפי ה-SDS",
      "נהלי אוורור נדרשים",
      "זמן מגע/חשיפה נדרש",
      "תנאי כניסה מחדש ואישור כניסה",
      "פרוטוקולי אחסון וסילוק פסולת מאושרים"
    ],

    disclaimerTitle: "הצהרת פטור מאחריות משפטית קריטית",
    disclaimerText1: "אתר זה מספק מידע כללי ואינו מחליף את תווית המוצר של היצרן, גיליון בטיחות החומרים (SDS), החקיקה התקפה, דרישות הבטיחות התעסוקתית או הוראות מאיש מקצוע מוסמך. המשתמשים אחראים לוודא שהמוצר ושיטת היישום מאושרים לשימוש המיועד ולמלא אחר כל דרישות היצרן והרגולציה העדכניות.",
    disclaimerText2: "בעל/מפעיל האתר אינו מבטיח שהמידע מתאים לכל מוצר, יישום, מתקן, תחום שיפוט או תנאי תפעול.",

    emergencyTitle: "אזהרת חירום ועזרה ראשונה",
    emergencyText: "במקרה של חשיפה מקרית — במיוחד שאיפה, חשיפה בעיניים, בליעה או חשיפה משמעותית בעור — עקוב מיידית אחר הוראות העזרה הראשונה בתווית המוצר/SDS העדכניים ופנה לסיוע רפואי או למוקד החירום והרעלות.",
    helplineTitle: "מוקדי חירום והרעלות רשמיים (מתוויות המוצר):",
    helplines: [
      "מוקד הרעלות / בריאות: 777 555 861 (0) 27+",
      "מרכז מידע להרעלות Griffon: 8946 446 82 (0) 27+"
    ],

    downloadSds: "הורד SDS רשמי (PDF)",
    contactSafety: "צור קשר עם ממונה בטיחות"
  }
};

export default function SafetyWarningPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        badge={t.badge}
      />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
        <div>
          <Link
            href="/agriculture"
            className="inline-flex items-center text-xs font-semibold text-bio-700 hover:text-bio-800 transition-colors"
          >
            {t.backLink}
          </Link>
        </div>

        {/* 1. Manufacturer Precedence Banner */}
        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-amber-950 font-display font-bold text-sm sm:text-base">
            <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{t.precedenceTitle}</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
            {t.precedenceText}
          </p>
        </section>

        {/* 2. Active Ingredient & Label Hazards */}
        <section className="bg-white border border-navy-200 rounded-lg p-6 shadow-xs space-y-4">
          <div className="border-b border-navy-100 pb-3">
            <span className="text-[10px] font-bold tracking-wider uppercase text-bio-700 bg-bio-50 px-2 py-0.5 rounded">
              OFFICIAL LABEL SPECIFICATION
            </span>
            <h2 className="font-display text-lg font-bold text-navy-950 mt-1">
              {t.activeIngredientTitle}
            </h2>
            <p className="text-xs text-navy-600 font-mono mt-0.5">
              {t.activeIngredientText}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-navy-500 mb-3">
              {t.hazardsTitle}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.hazards.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-red-50/60 border border-red-100 text-xs font-medium text-red-950">
                  <span className="text-base leading-none">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Important Safety Warning Header Section */}
        <section className="bg-red-950 text-white rounded-lg p-6 sm:p-8 border-l-8 border-red-500 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <svg className="w-7 h-7 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white uppercase">
              {t.warningHeader}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
            {t.warningExplanation}
          </p>
          <div className="pt-2 border-t border-red-900/80">
            <p className="text-xs sm:text-sm font-bold text-red-300">
              {t.trainedPersonnelNotice}
            </p>
          </div>
        </section>

        {/* 4. DO NOT BREATHE MIST OR SPRAY - High Visibility Banner */}
        <section className="bg-red-600 text-white rounded-lg p-6 text-center shadow-md space-y-2 border-2 border-red-700">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
            {t.doNotBreatheTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm font-medium text-red-50 leading-relaxed">
            {t.doNotBreatheText}
          </p>
        </section>

        {/* 5. PPE Requirements & Critical Mask Notice */}
        <section className="space-y-4">
          <div className="border-b border-navy-100 pb-2">
            <h2 className="font-display text-xl font-bold text-navy-950">
              {t.ppeTitle}
            </h2>
            <p className="text-xs text-navy-500">
              {t.ppeSubtitle}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {t.ppeItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-navy-200 rounded p-4 shadow-2xs flex items-start gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-900 text-[10px] font-bold text-white shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs leading-relaxed text-navy-800 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Mask Warning Notice Box */}
          <div className="bg-amber-100/80 border-2 border-amber-400 rounded-lg p-5 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-xs uppercase tracking-wide">
              <svg className="w-5 h-5 text-amber-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t.respiratoryCautionTitle}</span>
            </div>
            <p className="text-xs text-amber-950 leading-relaxed font-semibold">
              {t.respiratoryCautionText}
            </p>
          </div>
        </section>

        {/* 6. Eye & Skin Controls */}
        <section className="bg-white border border-navy-200 rounded-lg p-6 space-y-3">
          <h2 className="font-display text-base font-bold text-navy-950 flex items-center gap-2">
            <span className="text-lg">👁️</span>
            {t.eyeSkinTitle}
          </h2>
          <ul className="space-y-2">
            {t.eyeSkinItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-navy-700 font-medium">
                <span className="text-bio-600 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 7. People & Animals Protection */}
        <section className="bg-white border border-navy-200 rounded-lg p-6 space-y-3">
          <h2 className="font-display text-base font-bold text-navy-950 flex items-center gap-2">
            <span className="text-lg">🐾</span>
            {t.peopleAnimalsTitle}
          </h2>
          <ul className="space-y-2">
            {t.peopleAnimalsItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-navy-700 font-medium">
                <span className="text-bio-600 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 8. Ventilation and Re-entry */}
        <section className="bg-white border border-navy-200 rounded-lg p-6 space-y-2">
          <h2 className="font-display text-base font-bold text-navy-950 flex items-center gap-2">
            <span className="text-lg">🌬️</span>
            {t.ventilationTitle}
          </h2>
          <p className="text-xs text-navy-700 leading-relaxed font-medium">
            {t.ventilationText}
          </p>
        </section>

        {/* 9. Environmental Protection Warning */}
        <section className="bg-blue-950 text-white rounded-lg p-6 sm:p-8 border-l-8 border-cyan-400 space-y-4 shadow-md">
          <div className="flex items-center gap-2 text-cyan-300">
            <h2 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight">
              {t.environmentTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
            {t.environmentNotice}
          </p>
          <div className="space-y-2 pt-2 border-t border-blue-900">
            <p className="text-xs font-bold text-cyan-200">{t.environmentBodiesTitle}</p>
            <div className="flex flex-wrap gap-2">
              {t.environmentBodies.map((body, idx) => (
                <span key={idx} className="bg-blue-900/90 text-cyan-100 text-[11px] font-semibold px-2.5 py-1 rounded border border-cyan-500/30">
                  🚫 {body}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-cyan-200 leading-relaxed pt-1">
            {t.environmentDisposal}
          </p>
        </section>

        {/* 10. Operator Verification Checklist */}
        <section className="bg-navy-50 border border-navy-200 rounded-lg p-6 space-y-4">
          <div>
            <h2 className="font-display text-lg font-bold text-navy-950">
              {t.verificationTitle}
            </h2>
            <p className="text-xs text-navy-600">
              {t.verificationSubtitle}
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {t.verificationItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded border border-navy-100 text-xs font-medium text-navy-900">
                <span className="text-bio-600 font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Legal Disclaimer */}
        <section className="bg-navy-900 text-navy-100 rounded-lg p-6 text-xs leading-relaxed space-y-3 border border-navy-800">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-amber-400">
            {t.disclaimerTitle}
          </h2>
          <p className="text-navy-200">{t.disclaimerText1}</p>
          <p className="text-navy-300 font-semibold">{t.disclaimerText2}</p>
        </section>

        {/* 12. Emergency First-Aid Section */}
        <section className="bg-red-50 border border-red-200 rounded-lg p-6 space-y-3">
          <div className="flex items-center gap-2 text-red-950 font-bold text-sm">
            <svg className="w-5 h-5 text-red-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2>{t.emergencyTitle}</h2>
          </div>
          <p className="text-xs text-red-950 leading-relaxed font-medium">
            {t.emergencyText}
          </p>
          <div className="pt-2 border-t border-red-200/60 space-y-1">
            <p className="text-xs font-bold text-red-900">{t.helplineTitle}</p>
            {t.helplines.map((line, idx) => (
              <p key={idx} className="text-xs font-mono font-bold text-red-700 bg-red-100/80 px-3 py-1 rounded inline-block mr-2">
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-navy-100">
          <a
            href="/documents/virukill-sds-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-bio-600 hover:bg-bio-700 text-white font-semibold text-xs rounded transition-colors shadow-xs"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t.downloadSds}
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-navy-300 hover:border-navy-400 text-navy-800 font-semibold text-xs rounded transition-colors"
          >
            {t.contactSafety}
          </Link>
        </div>
      </div>

      <CTASection />
    </>
  );
}
