"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "he";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    nav_pathogens: "Pathogens",
    nav_calculator: "Dilution Calculator",
    nav_resources: "Resources",
    nav_quote: "Request a Quote",

    // Hero
    hero_category: "Broad-Spectrum Biosecurity",
    hero_title: "A New Benchmark in Agricultural Disinfection",
    hero_desc: "Virukill is an EPA-grade, non-corrosive, non-smelling biosecurity agent. Virukill is highly effective against Newcastle Disease, avian influenza, and foodborne pathogens, delivering advanced protection without harming animals or equipment. Virukill bridges the gap between veterinary medicine and agricultural science; our medical-grade disinfectants keep clinics and barns pathogen-free, while our targeted antifungal treatments shield your agricultural produce from disease. Virukill is an advanced veterinary disinfection and crop-safe antifungal treatment designed to protect your livestock, secure your agricultural yield, and defend your bottom line.",
    
    // Stats
    stat1_val: "99.999% Efficacy",
    stat1_label: "Newcastle Disease & Avian Influenza",
    stat1_desc: "99.999% Pathogen Elimination",
    stat2_val: "12 Months",
    stat2_label: "Diluted Solution Stability",
    stat2_desc: "Unrivaled shelf life stability",
    stat3_val: "100% Non-Corrosive",
    stat3_label: "Material & Metal Safety",
    stat3_desc: "Safe on galvanized steel, copper, & plastic",

    // Sector Gateways
    sectors_category: "Sector Gateways",
    sectors_title: "Tailored Disinfection Protocols",
    sectors_desc: "Select your division to access customized dosage calculators, compliance certificates, and technical application guides.",
    
    sector_ag_tag: "AGRICULTURE",
    sector_ag_title: "Poultry & Livestock Houses",
    sector_ag_desc: "Continuous water treatment, aerial fogging in occupied sheds, and terminal washdowns.",
    
    sector_food_tag: "FOOD PROCESSING",
    sector_food_title: "Hatcheries & Food Production",
    sector_food_desc: "FDA-grade surface sanitization, cold room disinfection, and transport vehicle hygiene.",
    
    sector_hygiene_tag: "HYGIENE & HEALTH",
    sector_hygiene_title: "Home & Veterinary Hygiene",
    sector_hygiene_desc: "Clinically clean environments, companion animal housing, and multi-purpose surface spray.",
    
    sector_crop_tag: "CROP DISINFECTION",
    sector_crop_title: "Greenhouses & Post-Harvest",
    sector_crop_desc: "Greenhouse wet-wall disinfection, plant foliage sanitizing mists, irrigation pipeline purging, and post-harvest produce washes.",
    
    portal_btn: "Enter Portal",

    // Utilities
    utils_category: "Technical Resources",
    utils_title: "Interactive Utilities",
    utils_desc: "We provide advanced, mobile-friendly tools directly on the web to assist farm managers, veterinarians, and food sanitation leads in their day-to-day operations.",
    
    util_db_tag: "DATABASE",
    util_db_title: "Pathogen Efficacy Database",
    util_db_desc: "Verify Virukill contact time and dilution rates against specific viral and bacterial strains.",
    util_db_btn: "Search Pathogens",

    util_calc_tag: "CALCULATOR",
    util_calc_title: "Dilution Wizard",
    util_calc_desc: "Input your target volume and contamination level to calculate exact chemical and water proportions.",
    util_calc_btn: "Open Calculator",

    util_docs_tag: "DOCUMENTATION",
    util_docs_title: "Resources & Downloads",
    util_docs_desc: "Access Material Safety Data Sheets (MSDS), EPA approvals, and academic validation studies.",
    util_docs_btn: "Browse Library",

    // Matrix
    matrix_category: "Competitive Advantage Matrix",
    matrix_title: "Virukill vs. Key Market Alternatives",
    matrix_desc: "A technical overview of biosecurity & operational superiority across key farm management parameters including equipment longevity, animal safety, continuous sanitation capabilities, and return on investment (ROI).",
    matrix_intro: "The prepared comparative matrix above highlights the crucial operational deficiencies of the competing products and elevates Virukill across three core vectors:",
    matrix_v1_title: "Continuous 24/7 Biosecurity vs. Terminal-Only Restrictions",
    matrix_v1_desc: "Unlike heavy oxidizers (Virkon S) or toxic aldehyde blends (Virocid), Virukill is safe enough to be continuously run through livestock drinking water lines and used for aerial misting in the presence of live animals. This transitions a farm from reactive disinfection to proactive, continuous defense.",
    matrix_v2_title: "Infrastructure Preservation vs. Severe Corrosion",
    matrix_v2_desc: "While Virkon S poses systemic long-term corrosion risks to galvanized metal framing, cages, cooling pads, and plumbing systems, Virukill's non-corrosive nature preserves expensive capital assets.",
    matrix_v3_title: "Commercial Economic Viability vs. Niche Applications",
    matrix_v3_desc: "Highly specialized alternatives like F10 SC match Virukill's safety profile but fail on commercial scaling due to cost-prohibitive pricing models. Conversely, older chemistries like Farmfluid S fail modern environmental and occupational safety standards.",
    
    col_product: "Product & Active",
    col_profile: "Primary Application Profile",
    col_risks: "Operational Limitations & Risks",
    col_advantage: "The Virukill Competitive Advantage",
    col_verdict: "Market Alternative Strategic Verdict",

    // Verdict Rating Badges
    tag_market_leader: "MARKET LEADER",
    tag_infrastructure_risk: "INFRASTRUCTURE RISK",
    tag_cost_prohibitive: "COST PROHIBITIVE",
    tag_high_toxicity: "HIGH TOXICITY",
    tag_niche_hazardous: "NICHE/HAZARDOUS",

    // Row details (keeping product names original English)
    row_vk_active: "(Didecyldimethylammonium chloride)",
    row_vk_profile: "Continuous water line sanitation, aerial misting/fogging, high-level surface disinfection.",
    row_vk_risks_1: "Requires proper dilution tracking to optimize residual effect.",
    row_vk_adv_1_title: "Unmatched Safety",
    row_vk_adv_1_desc: "Completely non-toxic and safe for continuous dosing in live bird drinking water.",
    row_vk_adv_2_title: "Non-Corrosive",
    row_vk_adv_2_desc: "Does not degrade delicate equipment, cooling pads, or metal structures.",
    row_vk_adv_3_title: "Dual Action",
    row_vk_adv_3_desc: "Destroys pathogens while physically removing biofilm from water systems.",
    row_vk_verdict: "Optimal for 24/7 continuous biosecurity.",

    row_vks_active: "(Potassium Peroxymonosulfate)",
    row_vks_profile: "Terminal washing, footbaths, vehicle spray points.",
    row_vks_risks_1: "Highly corrosive to galvanized metals and copper pipes over time.",
    row_vks_risks_2: "Unstable in solution; loses potency quickly after mixing (short shelf-life once diluted).",
    row_vks_risks_3: "Cannot be used for continuous live animal water treatment.",
    row_vks_adv_1_title: "Diluted Solutions Stability",
    row_vks_adv_1_desc: "Virukill remains stable in diluted solutions significantly longer.",
    row_vks_adv_2_title: "Non-corrosive",
    row_vks_adv_2_desc: "Virukill is entirely non-corrosive, protecting long-term farm infrastructure investments.",
    row_vks_verdict: "Limited to terminal tasks; high corrosion risk.",

    row_f10_active: "(QAC + PHMB Biguanide)",
    row_f10_profile: "Exotic vet practices, small-scale aviaries, specialized egg wash.",
    row_f10_risks_1: "Prohibitively expensive for large-scale industrial poultry or livestock houses.",
    row_f10_risks_2: "Slower action against specific heavy organic field strains compared to commercial formulations.",
    row_f10_adv_1_title: "More Cost-Beneficial",
    row_f10_adv_1_desc: "Virukill delivers equivalent broad-spectrum pathogen control at a fraction of the cost per liter.",
    row_f10_adv_2_title: "Heavy Industrial Volume",
    row_f10_adv_2_desc: "Virukill is engineered specifically for heavy industrial volume and commercial agricultural demands.",
    row_f10_verdict: "Excellent safety, but economically non-viable for farms.",

    row_vc_active: "(QAC + Glutaraldehyde)",
    row_vc_profile: "Heavy industrial terminal sanitation, vehicle wash downs.",
    row_vc_risks_1: "Contains hazardous aldehydes; highly toxic to humans and animals.",
    row_vc_risks_2: "Requires strict PPE (respirators); absolutely cannot be fogged or misted in the presence of live stock.",
    row_vc_adv_1_title: "No Occupational Health Hazards",
    row_vc_adv_1_desc: "Virukill provides excellent broad-spectrum viral control without the occupational health hazards.",
    row_vc_adv_2_title: "Suppresses Airborne Pathogens",
    row_vc_adv_2_desc: "Virukill allows safe, continuous aerial spraying while animals are present to suppress airborne pathogens.",
    row_vc_verdict: "Strictly limited to empty houses due to harsh chemistry.",

    row_ffs_active: "(Tar & Cresylic Acids)",
    row_ffs_profile: "Soiled livestock pens, unpaved or dirt floors, low-temperature disinfection.",
    row_ffs_risks_1: "Intense, highly unpleasant, and persistent chemical odor.",
    row_ffs_risks_2: "Severe environmental runoff concerns and high tissue toxicity.",
    row_ffs_risks_3: "Zero applicability for water lines or aerosol misting.",
    row_ffs_adv_1_title: "Environmentally Responsible",
    row_ffs_adv_1_desc: "Virukill offers an environmentally responsible, low-odor solution.",
    row_ffs_adv_2_title: "Versatility Across Surfaces",
    row_ffs_adv_2_desc: "Provides absolute versatility across surfaces, water lines, and airspace—which phenolics cannot do.",
    row_ffs_verdict: "Obsolete for modern, integrated farm systems.",

    matrix_bottom_note: "Note: This matrix evaluates competitive performance across holistic farm management parameters including equipment longevity, animal safety, continuous sanitation capabilities, and return on investment (ROI).",

    // CTA
    cta_category: "Biosecurity & Hygiene Excellence",
    cta_title: "Scaffold Your Hygiene Plan with Patented Broad-Spectrum Defense",
    cta_desc: "Calculate your mixing guidelines in seconds or verify Virukill's efficacy profile against Newcastle Disease, avian pathogens, and foodborne bacteria.",
    cta_btn_calc: "Open Dilution Wizard",
    cta_btn_db: "Explore Pathogen Registry",

    // Footer
    footer_brand: "Virukill",
    footer_desc: "Virukill is a registered trademarked biosecurity agent engineered for rapid, non-corrosive sanitation across agricultural, commercial food preparation, and veterinary sectors.",
    footer_quality: "Manufactured under strict chemical quality controls. Approved for poultry housing, hatchery biosecurity, and drinking water line sanitization.",
    footer_sectors: "Target Sectors",
    footer_ag: "Agriculture & Poultry",
    footer_food: "Food Prep & Hospitality",
    footer_consumer: "Home & Veterinary",
    footer_crop: "Crop Disinfection",
    footer_utils: "Interactive Utilities",
    footer_pathogens: "Pathogen Registry",
    footer_calculator: "Dilution Calculator",
    footer_downloads: "Technical Downloads",
    footer_contacts: "Contacts",
    footer_rights: "Virukill Biosecurity. All rights reserved.",
    footer_disclaimer_title: "Regulatory & Safety Disclaimer:",
    footer_disclaimer_body: "Approved by the Veterinary Services of the Israel Ministry of Agriculture. Usage must conform strictly to official label guidelines. Read the Material Safety Data Sheet (MSDS) before handling chemical concentrates."
  },
  he: {
    // Nav
    nav_pathogens: "פתוגנים",
    nav_calculator: "מחשבון דילול",
    nav_resources: "משאבים",
    nav_quote: "בקש הצעת מחיר",

    // Hero
    hero_category: "אבטחה ביולוגית רחבת טווח",
    hero_title: "סטנדרט חדש בחיטוי חקלאי",
    hero_desc: "Virukill הוא חומר אבטחה ביולוגית ברמת EPA, שאינו קורוזיבי וללא ריח. Virukill יעיל ביותר נגד מחלת ניוקאסל, שפעת העופות ופתוגנים הנישאים במזון, ומספק הגנה מתקדמת מבלי לפגוע בבעלי חיים או בציוד. Virukill מגשר על הפער בין רפואה וטרינרית למדע החקלאות; חומרי החיטוי ברמה הרפואית שלנו שומרים על מרפאות ואסמים נקיים מפתוגנים, בעוד שטיפולי נוגדי הפטריות הממוקדים שלנו מגינים על התוצרת החקלאית שלך מפני מחלות. Virukill הוא טיפול חיטוי וטרינרי מתקדם ונוגד פטריות בטוח ליבולים שנועד להגן על בעלי החיים שלך, לאבטח את היבול החקלאי שלך ולהגן על השורה התחתונה שלך.",
    
    // Stats
    stat1_val: "99.999% יעילות",
    stat1_label: "מחלת ניוקאסל ושפעת העופות",
    stat1_desc: "99.999% חיסול פתוגנים",
    stat2_val: "12 חודשים",
    stat2_label: "יציבות תמיסה מהולה",
    stat2_desc: "יציבות מדף ללא תחרות",
    stat3_val: "100% לא קורוזיבי",
    stat3_label: "בטיחות חומרים ומתכות",
    stat3_desc: "בטוח לשימוש על פלדה מגולוונת, נחושת ופלסטיק",

    // Sector Gateways
    sectors_category: "שערי מגזר",
    sectors_title: "פרוטוקולי חיטוי מותאמים אישית",
    sectors_desc: "בחר את המגזר שלך כדי לגשת למחשבוני מינון מותאמים אישית, תעודות תאימות ומדריכים טכניים.",
    
    sector_ag_tag: "חקלאות",
    sector_ag_title: "לולי עופות ובתי גידול",
    sector_ag_desc: "טיפול רציף במים, ערפול אווירי בלולים מאוכלסים ושטיפה סופית.",
    
    sector_food_tag: "עיבוד מזון",
    sector_food_title: "מדגרות וייצור מזון",
    sector_food_desc: "חיטוי משטחים ברמת FDA, חיטוי חדרי קירור והיגיינת רכבי הובלה.",
    
    sector_hygiene_tag: "היגיינה ובריאות",
    sector_hygiene_title: "היגיינת בית וטרינריה",
    sector_hygiene_desc: "סביבות נקיות קלינית, מבנים לחיות מחמד ותרסיס משטחים רב-תכליתי.",
    
    sector_crop_tag: "חיטוי יבולים",
    sector_crop_title: "חממות ואחר קטיף",
    sector_crop_desc: "חיטוי קירות לחים בחממות, ערפול לחיטוי עלוות צמחים, טיהור צינורות השקיה ושטיפת יבולים לאחר קטיף.",
    
    portal_btn: "כניסה לפורטל",

    // Utilities
    utils_category: "משאבים טכניים",
    utils_title: "כלי עזר אינטראקטיביים",
    utils_desc: "אנו מספקים כלים מתקדמים וידידותיים לנייד ישירות באינטרנט כדי לסייע למנהלי חוות, וטרינרים ומובילי תברואת מזון בפעילותם היומיומית.",
    
    util_db_tag: "מאגר נתונים",
    util_db_title: "מאגר יעילות פתוגנים",
    util_db_desc: "אמת את זמן המגע של Virukill ואחוזי המיהול נגד זנים ויראליים ובקטריאליים ספציפיים.",
    util_db_btn: "חפש פתוגנים",

    util_calc_tag: "מחשבון",
    util_calc_title: "אשף מיהול",
    util_calc_desc: "הזן את נפח היעד ורמת הזיהום שלך כדי לחשב יחסי מים וחומר מדויקים.",
    util_calc_btn: "פתח מחשבון",

    util_docs_tag: "תיעוד",
    util_docs_title: "משאבים והורדות",
    util_docs_desc: "גישה לגיליונות בטיחות חומרים (MSDS), אישורי EPA ומחקרי תיקוף אקדמיים.",
    util_docs_btn: "עיין בספרייה",

    // Matrix
    matrix_category: "מטריצת יתרון תחרותי",
    matrix_title: "Virukill מול חלופות שוק מרכזיות",
    matrix_desc: "סקירה טכנית של אבטחה ביולוגית ועליונות תפעולית על פני פרמטרים הוליסטיים של ניהול חווה כולל אורך חיי ציוד, בטיחות בעלי חיים, יכולות חיטוי רציפות והחזר השקעה (ROI).",
    matrix_intro: "מטריצת ההשוואה המוכנה לעיל מדגישה את הכשלים המבצעיים הקריטיים של המוצרים המתחרים ומבליטה את יתרונות Virukill על פני שלושה וקטורים מרכזיים:",
    matrix_v1_title: "אבטחה ביולוגית רציפה 24/7 לעומת מגבלות טיפול סופי בלבד",
    matrix_v1_desc: "בניגוד למחמצנים חזקים (Virkon S) או תערובות אלדהידים רעילות (Virocid), Virukill בטוח מספיק להזרמה רציפה בקווי מי השתייה של בעלי חיים ולשימוש בערפול אווירי בנוכחות בעלי חיים. זה מעביר את החווה מחיטוי תגובתי להגנה אקטיבית ורציפה.",
    matrix_v2_title: "שימור תשתיות לעומת קורוזיה חמורה",
    matrix_v2_desc: "בעוד ש-Virkon S מציב סיכוני קורוזיה מערכתיים לטווח ארוך למסגרות מתכת מגולוונת, כלובים, קירות לחים ומערכות אינסטלציה, טבעו הלא-קורוזיבי של Virukill משמר נכסי הון יקרים.",
    matrix_v3_title: "כדאיות כלכלית מסחרית לעומת יישומים נישתיים",
    matrix_v3_desc: "חלופות מתמחות ביותר כמו F10 SC תואמות את פרופיל הבטיחות של Virukill אך נכשלות בקנה מידה מסחרי בגלל מותגים של תמחור יקרים להפליא. לעומת זאת, כימיקלים ישנים יותר כמו Farmfluid S נכשלים בסטנדרטים מודרניים של בטיחות סביבתית ותעסוקתית.",
    
    col_product: "מוצר וחומר פעיל",
    col_profile: "פרופיל יישום עיקרי",
    col_risks: "מגבלות וסיכונים תפעוליים",
    col_advantage: "היתרון התחרותי של Virukill",
    col_verdict: "פסק דין אסטרטגי לחלופות שוק",

    // Verdict Rating Badges
    tag_market_leader: "מוביל שוק",
    tag_infrastructure_risk: "סיכון לתשתיות",
    tag_cost_prohibitive: "עלות מחסמת",
    tag_high_toxicity: "רעילות גבוהה",
    tag_niche_hazardous: "נישתי / מסוכן",

    // Row details (keeping product names original English)
    row_vk_active: "(Didecyldimethylammonium chloride)",
    row_vk_profile: "חיטוי רציף של קווי מים, ערפול אווירי/ערפול, חיטוי משטחים ברמה גבוהה.",
    row_vk_risks_1: "דורש מעקב מיהול נכון למיטוב האפקט השיורי.",
    row_vk_adv_1_title: "בטיחות ללא תחרות",
    row_vk_adv_1_desc: "אינו רעיל לחלוטין ובטוח למינון רציף במי השתייה של עופות חיים.",
    row_vk_adv_2_title: "אינו קורוזיבי",
    row_vk_adv_2_desc: "אינו פוגע בציוד עדין, רפידות קירור או מבני מתכת.",
    row_vk_adv_3_title: "פעולה כפולה",
    row_vk_adv_3_desc: "משמיד פתוגנים תוך הסרה פיזית של ביופילם ממערכות מים.",
    row_vk_verdict: "אופטימלי לאבטחה ביולוגית רציפה 24/7.",

    row_vks_active: "(Potassium Peroxymonosulfate)",
    row_vks_profile: "שטיפה סופית, אמבטיות רגליים ונקודות ריסוס לרכבים.",
    row_vks_risks_1: "קורוזיבי מאוד למתכות מגולוונות וצינורות נחושת לאורך זמן.",
    row_vks_risks_2: "לא יציב בתמיסה; מאבד יעילות במהירות לאחר הערבוב (חיי מדף קצרים לאחר מיהול).",
    row_vks_risks_3: "לא ניתן לשימוש לטיפול רציף במי שתייה של בעלי חיים חיים.",
    row_vks_adv_1_title: "יציבות תמיסות מהולות",
    row_vks_adv_1_desc: "Virukill נשאר יציב בתמיסות מהולות זמן רב יותר באופן משמעותי.",
    row_vks_adv_2_title: "אינו קורוזיבי",
    row_vks_adv_2_desc: "Virukill אינו קורוזיבי לחלוטין, ומגן על השקעות תשתית החווה לטווח הארוך.",
    row_vks_verdict: "מוגבל למשימות סופיות; סיכון גבוה לקורוזיה.",

    row_f10_active: "(QAC + PHMB Biguanide)",
    row_f10_profile: "מרפאות וטרינריות אקזוטיות, בתי גידול קטנים לציפורים ושטיפת ביצים מיוחדת.",
    row_f10_risks_1: "יקר באופן מוגזם ללולים תעשייתיים בקנה מידה גדול או למבני בעלי חיים.",
    row_f10_risks_2: "פעולה איטית יותר נגד זנים אורגניים כבדים בשטח בהשוואה לפורמולציות מסחריות.",
    row_f10_adv_1_title: "יעיל יותר כלכלית",
    row_f10_adv_1_desc: "Virukill מספק שליטה שקולה ורחבת טווח בפתוגנים בחלק מהעלות לליטר.",
    row_f10_adv_2_title: "נפח תעשייתי כבד",
    row_f10_adv_2_desc: "Virukill מהונדס במיוחד לנפחים תעשייתיים כבדים ודרישות חקלאיות מסחריות.",
    row_f10_verdict: "בטיחות מצוינת, אך לא כדאי כלכלית לחוות.",

    row_vc_active: "(QAC + Glutaraldehyde)",
    row_vc_profile: "חיטוי סופי תעשייתי כבד, שטיפת רכבים.",
    row_vc_risks_1: "מכיל אלדהידים מסוכנים; רעיל מאוד לבני אדם ובעלי חיים.",
    row_vc_risks_2: "דורש ציוד מגן אישי קפדני (מסיכות נשימה); בהחלט לא ניתן לערפול בנוכחות בעלי חיים חיים.",
    row_vc_adv_1_title: "ללא סכנות בריאותיות תעסוקתיות",
    row_vc_adv_1_desc: "Virukill מספק שליטה מצוינת ורחבת טווח בנגיפים ללא סכנות בריאותיות תעסוקתיות.",
    row_vc_adv_2_title: "מדכא פתוגנים הנישאים באוויר",
    row_vc_adv_2_desc: "Virukill מאפשר ריסוס אווירי בטוח ורציף בזמן שבעלי החיים נוכחים כדי לדכא פתוגנים הנישאים באוויר.",
    row_vc_verdict: "מוגבל לחלוטין למבנים ריקים עקב כימיה קשה.",

    row_ffs_active: "(Tar & Cresylic Acids)",
    row_ffs_profile: "תאי בעלי חיים מלוכלכים, רצפות לא סלולות או רצפות עפר, חיטוי בטמפרטורה נמוכה.",
    row_ffs_risks_1: "ריח כימי עז, לא נעים במיוחד ומתמשך.",
    row_ffs_risks_2: "חששות חמורים מנגר סביבתי ורעילות רקמות גבוהה.",
    row_ffs_risks_3: "אפס תאימות לקווי מים או ערפול תרסיסי.",
    row_ffs_adv_1_title: "אחראי סביבתית",
    row_ffs_adv_1_desc: "Virukill מציע פתרון אחראי סביבתית ובעל ריח נמוך.",
    row_ffs_adv_2_title: "ורסטיליות בין משטחים",
    row_ffs_adv_2_desc: "מספק ורסטיליות מוחלטת על פני משטחים, קווי מים וחלל האוויר – מה שחומרים פנוליים אינם יכולים לעשות.",
    row_ffs_verdict: "מיושן למערכות חקלאיות מודרניות ואינטגרטיביות.",

    matrix_bottom_note: "הערה: מטריצה זו מעריכה ביצועים תחרותיים על פני פרמטרים הוליסטיים של ניהול חווה כולל אורך חיי ציוד, בטיחות בעלי חיים, יכולות חיטוי רציפות והחזר השקעה (ROI).",

    // CTA
    cta_category: "מצוינות באבטחה ביולוגית והיגיינה",
    cta_title: "בנה את תוכנית ההיגיינה שלך עם הגנה מוגנת בפטנט רחב טווח",
    cta_desc: "חשב את הנחיות הערבוב שלך בשניות או אמת את פרופיל היעילות של Virukill נגד מחלת ניוקאסל, פתוגנים של עופות וחיידקים הנישאים במזון.",
    cta_btn_calc: "פתח את אשף המיהול",
    cta_btn_db: "חקור את מרשם הפתוגנים",

    // Footer
    footer_brand: "Virukill",
    footer_desc: "Virukill הוא חומר אבטחה ביולוגית רשום בסימן מסחרי המהונדס לחיטוי מהיר ולא קורוזיבי במגזרי החקלאות, הכנת מזון מסחרית ווטרינריה.",
    footer_quality: "מיוצר תחת בקרת איכות כימית קפדנית. מאושר למבני עופות, אבטחה ביולוגית של מדגרות וחיטוי קווי מי שתייה.",
    footer_sectors: "מגזרי יעד",
    footer_ag: "חקלאות ולול",
    footer_food: "הכנת מזון ואירוח",
    footer_consumer: "בית וטרינריה",
    footer_crop: "חיטוי יבולים",
    footer_utils: "כלי עזר אינטראקטיביים",
    footer_pathogens: "רישום פתוגנים",
    footer_calculator: "מחשבון דילול",
    footer_downloads: "הורדות טכניות",
    footer_contacts: "אנשי קשר",
    footer_rights: "Virukill אבטחה ביולוגית. כל הזכויות שמורות.",
    footer_disclaimer_title: "הצהרת תאימות ובטיחות:",
    footer_disclaimer_body: "מאושר על ידי השירותים הווטרינריים של משרד החקלאות של ישראל. השימוש חייב להתאים בדיוק להנחיות התתווית הרשמית. קרא את גיליון בטיחות החומרים (MSDS) לפני הטיפול בריכוזים כימיים."
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "en" || savedLang === "he") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  if (!mounted) {
    // Prevent hydration flicker by rendering children inside an inactive state
    return (
      <div dir="ltr">
        {children}
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === "he" ? "rtl" : "ltr"} className={language === "he" ? "font-sans text-right" : "text-left"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "en" as const,
      setLanguage: () => {},
      t: (key: string): string => {
        return translations["en"][key] || key;
      }
    };
  }
  return context;
}
