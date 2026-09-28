export interface DisclaimerContent {
  effectiveDate: string;
  entityName: string;
  contactEmail: string;
  en: {
    title: string;
    subtitle: string;
    footerSummary: string;
    footerLinkText: string;
    sections: {
      id: string;
      title: string;
      content: string[];
    }[];
  };
  he: {
    title: string;
    subtitle: string;
    footerSummary: string;
    footerLinkText: string;
    sections: {
      id: string;
      title: string;
      content: string[];
    }[];
  };
}

export const LEGAL_DISCLAIMER: DisclaimerContent = {
  effectiveDate: "September 28, 2026",
  entityName: "M.M. Brodie Trading Ltd.",
  contactEmail: "legal@virukill.co.il",

  en: {
    title: "Legal Disclaimer & Terms of Information",
    subtitle: "Important legal notice regarding website content, veterinary advice, efficacy claims, dilution tools, third-party comparisons, and liability limits for M.M. Brodie Trading Ltd.",
    footerSummary: "Information on this website is for general educational purposes only and does not replace official product labels, Safety Data Sheets (SDS), or professional veterinary advice. M.M. Brodie Trading Ltd. limits liability to the fullest extent permitted by law.",
    footerLinkText: "Read Full Legal Disclaimer",
    sections: [
      {
        id: "general-advice",
        title: "1. No Professional, Veterinary, or Occupational Advice",
        content: [
          "The content on this website—including biosecurity protocols, pathogen registries, chemical handling notes, crop protection guidance, and livestock hygiene mists—is provided for general informational and educational purposes only.",
          "Nothing on this site constitutes professional veterinary, agricultural, agronomic, toxicological, or occupational health advice, nor does it establish a client or professional consulting relationship between you and M.M. Brodie Trading Ltd.",
          "Always consult qualified veterinary officers, biosecurity specialists, certified agronomists, or product safety professionals regarding specific facility conditions, outbreak responses, or animal health concerns."
        ]
      },
      {
        id: "label-precedence",
        title: "2. Absolute Precedence of Official Product Labels & SDS",
        content: [
          "The physical product label affixed to Virukill container packaging and the current official Safety Data Sheet (SDS) issued by the manufacturer take absolute precedence over any text, dosage chart, interactive calculator, or protocol presented on this website.",
          "In the event of any conflict or inconsistency between this website's content and the product label or SDS, the instructions, hazard statements, and dosage guidelines on the physical label and SDS shall strictly prevail."
        ]
      },
      {
        id: "efficacy-guarantees",
        title: "3. No Guarantee of Efficacy, Accuracy, or Specific Performance",
        content: [
          "While M.M. Brodie Trading Ltd. endeavors to keep website content accurate and up to date, all statements regarding pathogen inactivation (e.g., '99.999% elimination', log reductions), solution stability, material compatibility, and shelf life are based on standard laboratory trial conditions.",
          "Real-world disinfectant efficacy depends heavily on user application technique, water quality, dilution precision, organic soil load, ambient temperature, contact time, and environmental variables. M.M. Brodie Trading Ltd. makes no warranty or representation, express or implied, that the product will achieve identical performance under every operating condition or facility setup."
        ]
      },
      {
        id: "calculator-disclaimer",
        title: "4. Interactive Dilution Calculator Disclaimer",
        content: [
          "The Interactive Dilution Wizard and dosage calculators on this website are provided solely as convenience tools for preliminary estimation.",
          "Users are strictly responsible for manually verifying all mixing calculations, water volumes, and chemical concentrations against the official product label prior to application. M.M. Brodie Trading Ltd. assumes no liability for application errors, over-concentration, under-dosing, or crop/livestock damage resulting from calculator usage."
        ]
      },
      {
        id: "competitor-comparisons",
        title: "5. Competitor Comparisons & Intellectual Property Notice",
        content: [
          "Comparative references to third-party products (such as Virkon S, F10 SC, Virocid, or Farmfluid S) are based on publicly available manufacturer documentation at the time of publication and are provided solely for factual comparison.",
          "All third-party product names, logos, and registered trademarks belong strictly to their respective owners. Their mention does not imply endorsement, affiliation, or sponsorship by M.M. Brodie Trading Ltd., nor does it imply third-party endorsement of Virukill."
        ]
      },
      {
        id: "limitation-liability",
        title: "6. Limitation of Liability",
        content: [
          "To the fullest extent permitted by applicable law, M.M. Brodie Trading Ltd., its directors, officers, employees, distributors, and agents exclude all liability for any direct, indirect, incidental, consequential, special, or punitive damages—including loss of livestock, crop failure, equipment damage, operational downtime, or loss of profits—arising out of or in connection with your access to, reliance upon, or use of this website, its calculators, protocols, or downloadable files.",
          "Nothing in this disclaimer seeks to exclude or limit liability that cannot lawfully be excluded under applicable law, including liability for gross negligence, willful misconduct, fraudulent misrepresentation, or statutory consumer rights."
        ]
      },
      {
        id: "downloadable-files",
        title: "7. Downloadable Documents & External Links",
        content: [
          "Downloadable files—such as Safety Data Sheets (SDS), Technical Data Sheets (TDS), trial reports, and Ministry of Agriculture approvals—are provided 'as is' for convenience. M.M. Brodie Trading Ltd. does not guarantee that third-party PDF viewers or external links are uninterrupted or virus-free."
        ]
      },
      {
        id: "data-privacy",
        title: "8. Form Submissions & Personal Data",
        content: [
          "Personal information collected through contact forms or quote requests (such as name, email, phone number, and farm details) is processed strictly for technical inquiries and quotation purposes in accordance with applicable data privacy practices."
        ]
      },
      {
        id: "governing-law",
        title: "9. Governing Law & Jurisdiction",
        content: [
          "This legal disclaimer, website operations, and any dispute arising hereunder shall be governed by and construed in accordance with the laws applicable to M.M. Brodie Trading Ltd., with exclusive jurisdiction vested in the competent courts of its corporate registration.",
          "If you have questions regarding this legal disclaimer, contact M.M. Brodie Trading Ltd. at legal@virukill.co.il."
        ]
      }
    ]
  },

  he: {
    title: "הצהרת פטור מאחריות ונהלים משפטיים",
    subtitle: "הודעה משפטית חשובה בנוגע לתוכן האתר, ייעוץ וטרינרי, טענות יעילות, מחשבוני דילול, השוואות צד שלישי והגבלת אחריות עבור M.M. Brodie Trading Ltd.",
    footerSummary: "המידע באתר זה מיועד למטרות חינוכיות כלליות בלבד ואינו מחליף תוויות מוצר רשמיות, גיליוני בטיחות (SDS) או ייעוץ וטרינרי מקצועי. חברת M.M. Brodie Trading Ltd. מגבילה את אחריותה בהתאם לחוק.",
    footerLinkText: "קרא את הצהרת הפטור המשפטית המלאה",
    sections: [
      {
        id: "general-advice",
        title: "1. העדר ייעוץ מקצועי, וטרינרי או תעסוקתי",
        content: [
          "התוכן באתר זה — כולל פרוטוקולי אבטחה ביולוגית, מאגרי פתוגנים, הנחיות טיפול בכימיקלים, הגנת יבולים וערפול היגיינה בלולים — מיועד למטרות מידע וחינוך כלליות בלבד.",
          "אין בתוכן זה משום ייעוץ וטרינרי, חקלאי, אגרונומי, טוקסיקולוגי או תעסוקתי מקצועי, ואין בו כדי ליצור יחסי ייעוץ או התקשרות מקצועית בין המשתמש לבין M.M. Brodie Trading Ltd.",
          "נועץ תמיד ברופאים וטרינרים מוסמכים, מומחי אבטחה ביולוגית או אנשי מקצוע בתחום בטיחות חומרים בנוגע לתנאי מתקן ספציפיים, התפרצויות מחלה או בריאות בעלי חיים."
        ]
      },
      {
        id: "label-precedence",
        title: "2. עדיפות מוחלטת לתווית המוצר ול-SDS הרשמיים",
        content: [
          "תווית המוצר הפיזית המודבקת על אריזת Virukill וגיליון בטיחות החומרים (SDS) הרשמי המעודכן שניתן על ידי היצרן בעלי עדיפות מוחלטת על פני כל טקסט, טבלת מינון, מחשבון אינטראקטיבי או פרוטוקול המוצג באתר זה.",
          "במקרה של סתירה או אי-התאמה בין תוכן האתר לבין תווית המוצר או ה-SDS, ההוראות, הצהרות הסיכון והנחיות המינון שעל גבי התווית הפיזית וה-SDS יגברו באופן מוחלט."
        ]
      },
      {
        id: "efficacy-guarantees",
        title: "3. העדר ערבות ליעילות, דיוק או ביצועים ספציפיים",
        content: [
          "למרות ש-M.M. Brodie Trading Ltd. עושה מאמצים לשמור על מידע מדויק, כל ההצהרות בנוגע להשמדת פתוגנים (כגון '99.999% חיסול'), יציבות תמיסות ותאימות חומרים מבוססות על תנאי ניסוי מעבדה סטנדרטיים.",
          "יעילות חיטוי בעולם האמיתי תלויה בטכניקת היישום, איכות המים, דיוק הדילול, עומס אורגני, טמפרטורה, זמן מגע ומשתנים סביבתיים. M.M. Brodie Trading Ltd. אינה מעניקה אחריות או מצג לכך שהמוצר ישיג ביצועים זהים בכל תנאי תפעול."
        ]
      },
      {
        id: "calculator-disclaimer",
        title: "4. הצהרת פטור עבור מחשבון הדילול האינטראקטיבי",
        content: [
          "מחשבון הדילול באתר מסופק ככלי עזר בלבד להערכה ראשונית.",
          "המשתמשים אחראים באופן הבלעדי לאמת ידנית את כל חישובי הערבוב, נפחי המים וריכוזי הכימיקלים מול תווית המוצר הרשמית לפני היישום. M.M. Brodie Trading Ltd. אינה נושאת באחריות לטעויות מינון, מינון יתר או נזק שנגרם משימוש במחשבון."
        ]
      },
      {
        id: "competitor-comparisons",
        title: "5. השוואות מתחרים והודעת קניין רוחני",
        content: [
          "אזכור מוצרי צד שלישי (כגון Virkon S, F10 SC, Virocid, או Farmfluid S) מבוסס על תיעוד יצרן פומבי במועד הפרסום ומיועד אך ורק להשוואה עובדתית.",
          "כל שמות המוצרים, הלוגואים והסימנים המסחריים שייכים לבעליהם. אין באזכורם משום תמיכה, שותפות או חסות מאת M.M. Brodie Trading Ltd."
        ]
      },
      {
        id: "limitation-liability",
        title: "6. הגבלת אחריות",
        content: [
          "במידה המרבית המותרת על פי חוק, M.M. Brodie Trading Ltd., מנהליה, עובדיה ומפיציה פטורים מכל אחריות לכל נזק ישיר, עקיף, מקרי, תוצאתי או מיוחד — כולל אובדן בעלי חיים, כשל ביבול, נזק לציוד או אובדן רווחים — הנובע מהגישה, ההסתמכות או השימוש באתר זה, במחשבוניו או בקבצים להורדה.",
          "אין בהצהרה זו כדי להגביל אחריות שאינה ניתנת להחרגה על פי חוק, לרבות אחריות לרשלנות רבתי, הונאה או זכויות צרכן חוקיות."
        ]
      },
      {
        id: "downloadable-files",
        title: "7. מסמכים להורדה וקישורים חיצוניים",
        content: [
          "קבצים להורדה (כגון SDS, TDS ואישורי משרד החקלאות) מסופקים כפי שהם ('As Is') לנוחיות המשתמש."
        ]
      },
      {
        id: "data-privacy",
        title: "8. טפסים ופרטיות נתונים",
        content: [
          "מידע אישי שנאסף בטפסי יצירת קשר מעובד אך ורק לצורך פניות טכניות והצעות מחיר בהתאם לנהלי הפרטיות."
        ]
      },
      {
        id: "governing-law",
        title: "9. דין חל וסמכות שיפוט",
        content: [
          "הצהרה משפטית זו והשימוש באתר כפופים לדינים החלים על M.M. Brodie Trading Ltd., עם סמכות שיפוט בלעדית לבתי המשפט המוסמכים.",
          "לשאלות בנוגע להצהרה משפטית זו, ניתן לפנות ל-M.M. Brodie Trading Ltd. בכתובת legal@virukill.co.il."
        ]
      }
    ]
  }
};
