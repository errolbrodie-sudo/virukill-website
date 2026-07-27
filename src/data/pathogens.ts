export interface Pathogen {
  id: string;
  scientificName: string;
  group: "Virus" | "Bacteria" | "Mycoplasma" | "Fungi & Yeasts";
  dilution: string;
  en: {
    name: string;
    contactTime: string;
    notes: string;
    commonIn: string;
  };
  he: {
    name: string;
    contactTime: string;
    notes: string;
    commonIn: string;
  };
}

export const PATHOGENS: Pathogen[] = [
  {
    id: "avian-influenza",
    scientificName: "Orthomyxoviridae (H5N1 / H5N8)",
    group: "Virus",
    dilution: "1:200 (0.5%)",
    en: {
      name: "Avian Influenza (Bird Flu)",
      contactTime: "10 minutes",
      notes: "Highly infectious. Recommended for surface spraying and aerial fogging during outbreaks. Stable in organic matter.",
      commonIn: "Poultry & Birds",
    },
    he: {
      name: "שפעת העופות (Avian Influenza)",
      contactTime: "10 דקות",
      notes: "מדבק מאוד. מומלץ לריסוס משטחים וערפול אווירי בעת התפרצויות. יציב בחומר אורגני.",
      commonIn: "חקלאות ועופות",
    }
  },
  {
    id: "newcastle-disease",
    scientificName: "Avian Paramyxovirus-1",
    group: "Virus",
    dilution: "1:200 (0.5%) / 1:100 (1%) fogging",
    en: {
      name: "Newcastle Disease Virus (NDV)",
      contactTime: "15 minutes",
      notes: "Causes severe respiratory and nervous clinical signs. Virukill completely inactivates NDV on coops, vehicle wheels, and equipment.",
      commonIn: "Poultry & Birds",
    },
    he: {
      name: "נגיף מחלת ניוקאסל (NDV)",
      contactTime: "15 דקות",
      notes: "גורם לתסמינים נשימתיים ועצביים חמורים. Virukill מנטרל לחלוטין את הנגיף בלולים, גלגלי רכב וציוד.",
      commonIn: "חקלאות ועופות",
    }
  },
  {
    id: "infectious-bronchitis",
    scientificName: "Avian Coronavirus",
    group: "Virus",
    dilution: "1:200 (0.5%)",
    en: {
      name: "Infectious Bronchitis (IB)",
      contactTime: "10 minutes",
      notes: "Extremely contagious respiratory disease in chickens. Use for cleaning walls, ceilings, and air misting.",
      commonIn: "Poultry & Birds",
    },
    he: {
      name: "ברונכיטיס זיהומית (IB)",
      contactTime: "10 דקות",
      notes: "מחלת נשימה מדבקת ביותר בתרנגולות. לשימוש בניקוי קירות, תקרות וערפול אוויר.",
      commonIn: "חקלאות ועופות",
    }
  },
  {
    id: "gumboro-disease",
    scientificName: "Infectious Bursal Disease Virus",
    group: "Virus",
    dilution: "1:100 (1.0%)",
    en: {
      name: "Gumboro Disease (IBD)",
      contactTime: "15 minutes",
      notes: "Very stable virus in environments. Requires a higher concentration (1.0%) for terminal disinfection of poultry sheds.",
      commonIn: "Poultry & Birds",
    },
    he: {
      name: "מחלת גומבורו (IBD)",
      contactTime: "15 דקות",
      notes: "נגיף יציב מאוד בסביבה. דורש ריכוז גבוה יותר (1.0%) לחיטוי סופי של מבני עופות.",
      commonIn: "חקלאות ועופות",
    }
  },
  {
    id: "salmonella-enteritidis",
    scientificName: "Salmonella enterica subsp. enterica",
    group: "Bacteria",
    dilution: "1:200 (0.5%)",
    en: {
      name: "Salmonella",
      contactTime: "5 minutes",
      notes: "Major cause of food poisoning. Used for washing food-prep surfaces, egg trays, and slaughterhouse walls. Contains surfactant for simultaneous cleaning.",
      commonIn: "Food Prep & Hospitality",
    },
    he: {
      name: "סלמונלה (Salmonella)",
      contactTime: "5 דקות",
      notes: "גורם מרכזי להרעלת מזון. משמש לשטיפת משטחי הכנת מזון, מגשי ביצים וקירות בתי מטבחיים. מכיל חומר שטח לניקוי מקביל.",
      commonIn: "הכנת מזון ואירוח",
    }
  },
  {
    id: "e-coli",
    scientificName: "Escherichia coli",
    group: "Bacteria",
    dilution: "1:400 (0.25%) water / 1:200 surfaces",
    en: {
      name: "E. coli (Colibacillosis)",
      contactTime: "10 minutes",
      notes: "Common cause of avian colibacillosis and food poisoning. Can be added to poultry drinking water at 1:1000 continuous dose to prevent waterborne spread.",
      commonIn: "All Sectors",
    },
    he: {
      name: "אי קולי (E. coli)",
      contactTime: "10 דקות",
      notes: "גורם נפוץ לקוליבצילוזיס בעופות והרעלת מזון. ניתן להוסיף למי שתייה של עופות במינון רציף של 1:1000 למניעת התפשטות במים.",
      commonIn: "כל המגזרים",
    }
  },
  {
    id: "fowl-cholera",
    scientificName: "Pasteurella multocida",
    group: "Bacteria",
    dilution: "1:200 (0.5%)",
    en: {
      name: "Fowl Cholera",
      contactTime: "10 minutes",
      notes: "Causes acute septicaemia in poultry. Disinfect drinking troughs, equipment, and footbaths daily.",
      commonIn: "Poultry & Birds",
    },
    he: {
      name: "כולרת העופות (Fowl Cholera)",
      contactTime: "10 דקות",
      notes: "גורם לאלח דם חריף בעופות. חיטוי שוקתות שתייה, ציוד ואמבטיות רגליים מדי יום.",
      commonIn: "חקלאות ועופות",
    }
  },
  {
    id: "mycoplasma-gallisepticum",
    scientificName: "Mycoplasma gallisepticum",
    group: "Mycoplasma",
    dilution: "1:200 (0.5%)",
    en: {
      name: "Mycoplasma (CRD)",
      contactTime: "10 minutes",
      notes: "Causes Chronic Respiratory Disease (CRD) in chickens and infectious sinusitis in turkeys. Highly susceptible to Virukill.",
      commonIn: "Poultry & Birds",
    },
    he: {
      name: "מיקופלזמה (CRD)",
      contactTime: "10 דקות",
      notes: "גורם למחלת נשימה כרונית (CRD) בתרנגולות ודלקת סינוסים זיהומית בהודים. רגיש מאוד ל-Virukill.",
      commonIn: "חקלאות ועופות",
    }
  },
  {
    id: "aspergillus-pneumonia",
    scientificName: "Aspergillus fumigatus",
    group: "Fungi & Yeasts",
    dilution: "1:100 (1.0%)",
    en: {
      name: "Aspergillus / Brooder Pneumonia",
      contactTime: "15 minutes",
      notes: "Fungal spores are highly resistant. Terminal disinfection of incubators and hatcheries requires a 1% dilution.",
      commonIn: "Poultry & Birds",
    },
    he: {
      name: "אספרגילוס / דלקת ריאות מדגרות",
      contactTime: "15 דקות",
      notes: "נבגי פטריות הם עמידים מאוד. חיטוי סופי של מדגרות ואינקובטורים דורש מיהול של 1%.",
      commonIn: "חקלאות ועופות",
    }
  },
  {
    id: "candida-thrush",
    scientificName: "Candida albicans",
    group: "Fungi & Yeasts",
    dilution: "1:200 (0.5%)",
    en: {
      name: "Thrush / Candidiasis",
      contactTime: "10 minutes",
      notes: "Fungal pathogen affecting the crop and digestive tract of birds. Safe for cleaning cages, feed troughs, and nesting boxes.",
      commonIn: "General Veterinary",
    },
    he: {
      name: "קנדידה / פטרת וושט (Candidiasis)",
      contactTime: "10 דקות",
      notes: "פתוגן פטרייתי המשפיע על הזפק וצינור העיכול של ציפורים. בטוח לניקוי כלובים, אבוסי מזון ותאי מקננים.",
      commonIn: "וטרינריה כללית",
    }
  },
  {
    id: "pseudomonas",
    scientificName: "Pseudomonas aeruginosa",
    group: "Bacteria",
    dilution: "1:200 (0.5%)",
    en: {
      name: "Pseudomonas Infection",
      contactTime: "10 minutes",
      notes: "Opportunistic bacterial pathogen resistant to many antibiotics. Completely inactivated by Virukill within 10 minutes of contact.",
      commonIn: "Food Prep & Hospitality",
    },
    he: {
      name: "זיהום פסאודומונאס (Pseudomonas)",
      contactTime: "10 דקות",
      notes: "פתוגן חיידקי הזדמנותי העמיד לאנטיביוטיקה רבה. מנוטרל לחלוטין על ידי Virukill תוך 10 דקות מגע.",
      commonIn: "הכנת מזון ואירוח",
    }
  }
];
