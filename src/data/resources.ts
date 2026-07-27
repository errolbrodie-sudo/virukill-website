export interface ResourceItem {
  id: string;
  category: "Technical Sheets" | "Safety Data Sheets" | "Biosecurity Guides" | "Certifications";
  fileSize: string;
  fileFormat: "PDF" | "DOCX";
  language: "English" | "Hebrew" | "Bilingual" | "אנגלית" | "עברית" | "דו-לשוני";
  downloadUrl: string;
  filename: string;
  en: {
    title: string;
    description: string;
  };
  he: {
    title: string;
    description: string;
  };
}

export const RESOURCES: ResourceItem[] = [
  {
    id: "virukill-sds-en",
    category: "Safety Data Sheets",
    fileSize: "284 KB",
    fileFormat: "PDF",
    language: "English",
    downloadUrl: "/documents/virukill-sds-en.pdf",
    filename: "virukill-sds-en.pdf",
    en: {
      title: "Virukill Safety Data Sheet (SDS)",
      description: "Official chemical safety sheet containing hazards identification, handling, first-aid, and environmental precautions.",
    },
    he: {
      title: "גיליון בטיחות חומרים (SDS) - אנגלית",
      description: "גיליון בטיחות כימי רשמי המכיל זיהוי סיכונים, טיפול, עזרה ראשונה ואמצעי זהירות סביבתיים.",
    }
  },
  {
    id: "virukill-sds-he",
    category: "Safety Data Sheets",
    fileSize: "310 KB",
    fileFormat: "PDF",
    language: "Hebrew",
    downloadUrl: "/documents/virukill-sds-he.pdf",
    filename: "virukill-sds-he.pdf",
    en: {
      title: "Virukill Safety Data Sheet (MSDS) - Hebrew",
      description: "Official safety sheet in Hebrew for Virukill disinfectant, compliant with the Ministry of Environmental Protection regulations.",
    },
    he: {
      title: "גיליון בטיחות חומרים (MSDS) - וירוקיל",
      description: "גיליון בטיחות רשמי בעברית עבור חומר החיטוי וירוקיל, בהתאם לדרישות המשרד להגנת הסביבה.",
    }
  },
  {
    id: "virukill-tds-en",
    category: "Technical Sheets",
    fileSize: "185 KB",
    fileFormat: "PDF",
    language: "English",
    downloadUrl: "/documents/virukill-tds-en.pdf",
    filename: "virukill-tds-en.pdf",
    en: {
      title: "Virukill Technical Data Sheet (TDS)",
      description: "Detailed chemical specs, active ingredient concentrations (Didecyldimethyl Ammonium Chloride 120g/L), pH stability, and density.",
    },
    he: {
      title: "גיליון נתונים טכני (TDS) - וירוקיל",
      description: "מפרט כימי מפורט, ריכוזי חומרים פעילים (Didecyldimethyl Ammonium Chloride 120g/L), יציבות pH וצפיפות.",
    }
  },
  {
    id: "poultry-biosecurity-protocol-en",
    category: "Biosecurity Guides",
    fileSize: "1.2 MB",
    fileFormat: "PDF",
    language: "English",
    downloadUrl: "/documents/poultry-biosecurity-guide-en.pdf",
    filename: "poultry-biosecurity-guide-en.pdf",
    en: {
      title: "Comprehensive Poultry Biosecurity Guide",
      description: "Step-by-step terminal disinfection protocol for broiler houses, hatcheries, breeding units, and vehicle disinfection arches.",
    },
    he: {
      title: "מדריך אבטחה ביולוגית מקיף ללולים",
      description: "פרוטוקול חיטוי סופי שלב-אחר-שלב עבור בתי פיטום, מדגריות, יחידות רבייה וקשתות חיטוי לרכבים.",
    }
  },
  {
    id: "poultry-biosecurity-protocol-he",
    category: "Biosecurity Guides",
    fileSize: "1.4 MB",
    fileFormat: "PDF",
    language: "Hebrew",
    downloadUrl: "/documents/poultry-biosecurity-protocol-he.pdf",
    filename: "poultry-biosecurity-protocol-he.pdf",
    en: {
      title: "Poultry Biosecurity Guide - Hebrew",
      description: "Thorough disinfection protocol for coops, hatcheries, vehicles, and footwear using Virukill to prevent Newcastle Disease and Avian Influenza.",
    },
    he: {
      title: "מדריך אבטחה ביולוגית ללולים ומשקים",
      description: "פרוטוקול חיטוי יסודי ללולים, מדגריות, כלי רכב וכפות רגליים באמצעות וירוקיל למניעת מחלת הניוקאסל ושפעת העופות.",
    }
  },
  {
    id: "israel-ministry-approval",
    category: "Certifications",
    fileSize: "420 KB",
    fileFormat: "PDF",
    language: "Bilingual",
    downloadUrl: "/documents/israel-ministry-approval.pdf",
    filename: "israel-ministry-approval.pdf",
    en: {
      title: "Israel Ministry of Agriculture Registration Approval",
      description: "Official registration certificate issued by the Veterinary Services of the Ministry of Agriculture, approving Virukill for livestock and drinking water disinfection.",
    },
    he: {
      title: "אישור רישום משרד החקלאות הישראלי",
      description: "תעודת רישום רשמית שהונפקה על ידי השירותים הווטרינריים של משרד החקלאות, המאשרת את וירוקיל לחיטוי בעלי חיים ומי שתייה.",
    }
  },
  {
    id: "virukill-efficacy-trials",
    category: "Technical Sheets",
    fileSize: "2.1 MB",
    fileFormat: "PDF",
    language: "English",
    downloadUrl: "/documents/virukill-efficacy-trials.pdf",
    filename: "virukill-efficacy-trials.pdf",
    en: {
      title: "Virukill Scientific Efficacy Study Compilation",
      description: "A summary of independent academic trials and laboratory assays validating Virukill's log-reduction against NDV, H5N1, and Salmonella.",
    },
    he: {
      title: "ריכוז מחקרי יעילות מדעיים - וירוקיל",
      description: "סיכום של ניסויים אקדמיים בלתי תלויים ובדיקות מעבדה המאמתים את הפחתת הלוג של וירוקיל נגד NDV, H5N1 וסלמונלה.",
    }
  }
];
