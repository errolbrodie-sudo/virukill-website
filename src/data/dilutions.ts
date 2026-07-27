export interface DilutionMode {
  id: string;
  ratioText: string;
  ratioValue: number; // e.g. 200 for 1:200
  unitType: "volume" | "dimensions" | "eggs";
  en: {
    name: string;
    description: string;
    instructions: string[];
  };
  he: {
    name: string;
    description: string;
    instructions: string[];
  };
}

export const DILUTION_MODES: DilutionMode[] = [
  {
    id: "surface-spray",
    ratioText: "1:200 (0.5%)",
    ratioValue: 200,
    unitType: "dimensions",
    en: {
      name: "Surface Spraying & Washing",
      description: "For disinfecting cages, coops, walls, floors, tables, and agricultural machinery. Contains active surfactant to wash and sanitize in one step.",
      instructions: [
        "Thoroughly clean the surface to remove bulk organic waste (manure, soil) before application.",
        "Apply the mixed solution at a rate of 300ml per square meter (300ml/m²) using a high-pressure or manual sprayer.",
        "Allow at least 10-15 minutes of wet contact time.",
        "No rinsing required on agricultural structures. Rinse with clean water if applied to direct food contact surfaces in kitchens."
      ]
    },
    he: {
      name: "ריסוס ושטיפת משטחים",
      description: "לחיטוי כלובים, לולים, קירות, רצפות, שולחנות ומכונות חקלאיות. מכיל חומר שטח פעיל לניקוי וחיטוי בשלב אחד.",
      instructions: [
        "נקה היטב את המשטח להסרת פסולת אורגנית גסה (זבל, אדמה) לפני היישום.",
        "יישם את התמיסה המעורבבת בקצב של 300 מ\"ל למטר מרובע (300ml/m²) באמצעות מרסס בלחץ גבוה או ידני.",
        "אפשר לפחות 10-15 דקות של זמן מגע רטוב.",
        "אין צורך בשטיפה על מבנים חקלאיים. שטוף במים נקיים אם מיושם על משטחים הבאים במגע ישיר עם מזון במטבחים."
      ]
    }
  },
  {
    id: "aerial-fogging",
    ratioText: "1:100 (1.0%)",
    ratioValue: 100,
    unitType: "dimensions",
    en: {
      name: "Aerial Spraying & ULV Fogging",
      description: "Fine-mist or thermal fogging directly into poultry houses or lofts. Safe for inhalation and can be done in the presence of birds to clean the air and delay virus transmission.",
      instructions: [
        "Ensure the building doors and vents are closed to retain the mist.",
        "Use an electric ULV fogger or thermal fogging machine.",
        "Apply at a rate of 1 Liter of mixed solution per 100 cubic meters (1L / 100m³) of building space.",
        "Can be repeated daily during disease outbreaks or weekly as routine biosecurity."
      ]
    },
    he: {
      name: "ערפול אווירי ו-ULV",
      description: "ערפול עדין או תרמי ישירות לתוך לולים או שובכים. בטוח לשאיפה וניתן לביצוע בנוכחות עופות לניקוי האוויר והאטת העברת נגיפים.",
      instructions: [
        "וודא שדלתות ופתחי האוורור של המבנה סגורים כדי לשמור על הערפל.",
        "השתמש במכשיר ערפול ULV חשמלי או במכונת ערפול תרמית.",
        "יישם בקצב של 1 ליטר תמיסה מעורבבת לכל 100 מטר מעוקב (1L / 100m³) של נפח מבנה.",
        "ניתן לחזור מדי יום במהלך התפרצויות מחלה או שבועית כאבטחה ביולוגית שגרתית."
      ]
    }
  },
  {
    id: "drinking-water",
    ratioText: "1:1000 (0.1%)",
    ratioValue: 1000,
    unitType: "volume",
    en: {
      name: "Drinking Water Sanitation",
      description: "Continuous dosing of aviary or poultry drinking water systems to eradicate waterborne pathogens and prevent biofilm buildup in water lines.",
      instructions: [
        "Add 1 ml of Virukill concentrate for every 1 Liter of drinking water.",
        "Ensure uniform mixing in the header tank or use a proportional dosing pump (e.g. Dosatron set at 0.1%).",
        "Safe for continuous consumption by chickens, turkeys, pigeons, and exotic birds.",
        "Helps prevent the spread of diseases like Infectious Coryza and E. coli through shared drinking lines."
      ]
    },
    he: {
      name: "חיטוי מי שתייה",
      description: "מינון רציף של מערכות מי שתייה בשובכים או לולים לחיסול פתוגנים הנישאים במים ומניעת הצטברות ביופילם בקווי המים.",
      instructions: [
        "הוסף 1 מ\"ל רכז Virukill לכל 1 ליטר מי שתייה.",
        "וודא ערבוב אחיד במכל המים או השתמש במאזן מינון פרופורציונלי (למשל דוסאטרון המוגדר על 0.1%).",
        "בטוח לצריכה רציפה על ידי תרנגולות, הודים, יונים וציפורים אקזוטיות.",
        "מסייע למנוע התפשטות מחלות כמו קוריזה זיהומית וסלמונלה/E. coli דרך קווי שתייה משותפים."
      ]
    }
  },
  {
    id: "egg-disinfection",
    ratioText: "1:200 (0.5%)",
    ratioValue: 200,
    unitType: "eggs",
    en: {
      name: "Egg Disinfection & Rinsing",
      description: "Sanitizing and cleaning hatching eggs to remove pathogens from the shell before placement in the incubator, improving hatchability.",
      instructions: [
        "Mix Virukill with warm water (approx. 40°C) at a 1:200 ratio.",
        "Submerge the hatching eggs in the solution for 30-60 seconds, or spray them thoroughly.",
        "Allow eggs to air-dry completely on clean trays before placing them in incubators.",
        "Do not scrub the eggs, as this can damage the protective shell cuticle."
      ]
    },
    he: {
      name: "חיטוי ושטיפת ביצים",
      description: "חיטוי וניקוי ביצי דגירה להסרת פתוגנים מהקליפה לפני הכנסתם למדגרה, לשיפור אחוזי הבקיעה.",
      instructions: [
        "ערבב Virukill עם מים חמימים (כ-40°C) ביחס של 1:200.",
        "הטבל את ביצי הדגירה בתמיסה למשך 30-60 שניות, או רסס אותן היטב.",
        "אפשר לביצים להתייבש לחלוטין באוויר על מגשים נקיים לפני הכנסתן למדגרות.",
        "אל תקרצף את הביצים, מכיוון שזה עלול לפגוע בקוטיקולת הקליפה המגנה."
      ]
    }
  }
];

export interface CalculationResult {
  waterLiters: number;
  virukillMl: number;
  virukillLiters: number;
  coverageText: {
    en: string;
    he: string;
  };
  notes: string;
}

export function calculateDilution(
  modeId: string,
  inputs: {
    length?: number;
    width?: number;
    height?: number;
    waterVolume?: number;
    eggCount?: number;
  }
): CalculationResult | null {
  const mode = DILUTION_MODES.find(m => m.id === modeId);
  if (!mode) return null;

  let waterLiters = 0;
  let coverageTextEn = "";
  let coverageTextHe = "";

  if (mode.unitType === "dimensions") {
    const l = inputs.length || 0;
    const w = inputs.width || 0;
    const h = inputs.height || 0;

    if (mode.id === "surface-spray") {
      const floorArea = l * w;
      const wallArea = 2 * (l * h + w * h);
      const totalArea = floorArea + wallArea;
      
      waterLiters = (totalArea * 300) / 1000;
      coverageTextEn = `Estimated treatable surface area: ${totalArea.toFixed(1)} m² (at 300ml/m² coverage)`;
      coverageTextHe = `שטח משטח משוער לטיפול: ${totalArea.toFixed(1)} מ"ר (בכיסוי של 300 מ"ל/מ"ר)`;
    } else if (mode.id === "aerial-fogging") {
      const volume = l * w * h;
      waterLiters = volume / 100;
      coverageTextEn = `Estimated air volume: ${volume.toFixed(1)} m³ (at 1L/100m³ fogging density)`;
      coverageTextHe = `נפח אוויר משוער: ${volume.toFixed(1)} מ"ק (בצפיפות ערפול של 1 ליטר/100 מ"ק)`;
    }
  } else if (mode.unitType === "volume") {
    waterLiters = inputs.waterVolume || 0;
    coverageTextEn = `Total drinking water system volume: ${waterLiters.toFixed(1)} Liters`;
    coverageTextHe = `נפח מערכת מי שתייה כולל: ${waterLiters.toFixed(1)} ליטרים`;
  } else if (mode.unitType === "eggs") {
    const eggCount = inputs.eggCount || 0;
    waterLiters = Math.max(5, eggCount * 0.1);
    coverageTextEn = `Estimated dip tank capacity for ${eggCount} eggs: ${waterLiters.toFixed(1)} Liters`;
    coverageTextHe = `קיבולת אמבט טבילה משוערת עבור ${eggCount} ביצים: ${waterLiters.toFixed(1)} ליטרים`;
  }

  const virukillMl = (waterLiters * 1000) / mode.ratioValue;
  const virukillLiters = virukillMl / 1000;

  return {
    waterLiters,
    virukillMl,
    virukillLiters,
    coverageText: {
      en: coverageTextEn,
      he: coverageTextHe,
    },
    notes: `Dilution ratio configured at ${mode.ratioText}.`
  };
}
