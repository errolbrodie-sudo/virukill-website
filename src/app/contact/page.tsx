"use client";

import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "Connect",
    title: "Contact Technical Support",
    subtitle: "Get in touch with biosecurity specialists in Israel and globally to order Virukill, request site assessments, or get custom hygiene plans.",
    distTitle: "Primary Israeli Distributor",
    distDesc: "Our main office manages regulatory compliance, agricultural tenders, veterinary support, and large farm deliveries throughout Israel.",
    addressLabel: "Address:",
    addressVal: "Ha-Arbaa St 28, Tel Aviv-Yafo, Israel",
    emailLabel: "Email:",
    emailVal: "support@virukill.co.il",
    intlTitle: "International Headquarters",
    intlDesc: "For distribution licensing, raw materials safety protocols, and manufacturing inquiries outside of Israel, contact ICA International Chemicals.",
    webLabel: "Website:",
    apprTitle: "Ministry Approval",
    apprDesc: "Virukill is officially registered under standard Act approvals. Verified by the Israeli Ministry of Agriculture Veterinary Services for water-system sanitizing and terminal coop disinfecting."
  },
  he: {
    badge: "צור קשר",
    title: "צור קשר עם התמיכה הטכנית",
    subtitle: "צור קשר עם מומחי אבטחה ביולוגית בישראל ובעולם להזמנת Virukill, לבקשת הערכות באתר, או לקבלת תוכניות היגיינה מותאמות אישית.",
    distTitle: "מפיץ ישראלי ראשי",
    distDesc: "המשרד הראשי שלנו מנהל תאימות רגולטורית, מכרזים חקלאיים, תמיכה וטרינרית ואספקות למשקים גדולים ברחבי ישראל.",
    addressLabel: "כתובת:",
    addressVal: "רחוב הארבעה 28, תל אביב-יפו, ישראל",
    emailLabel: "דוא\"ל:",
    emailVal: "support@virukill.co.il",
    intlTitle: "מטה בינלאומי",
    intlDesc: "עבור רישוי הפצה, פרוטוקולי בטיחות חומרי גלם ופניות ייצור מחוץ לישראל, צור קשר עם ICA International Chemicals.",
    webLabel: "אתר אינטרנט:",
    apprTitle: "אישור משרדי",
    apprDesc: "Virukill רשום ומאושר רשמית. מאומת על ידי השירותים הווטרינריים של משרד החקלאות הישראלי לחיטוי מערכות מים וחיטוי סופי של לולים."
  }
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        badge={t.badge}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Information block */}
          <div className="lg:col-span-5 space-y-8 bg-navy-50 rounded-3xl p-8 border border-navy-100">
            <div>
              <h3 className="font-display text-lg font-bold text-navy-950">
                {t.distTitle}
              </h3>
              <p className="mt-2 text-xs text-navy-600 leading-relaxed">
                {t.distDesc}
              </p>
              <div className="mt-4 space-y-2 text-xs text-navy-800">
                <p className="flex items-center gap-2">
                  <strong>{t.addressLabel}</strong> {t.addressVal}
                </p>
                <p className="flex items-center gap-2">
                  <strong>{t.emailLabel}</strong> {t.emailVal}
                </p>
              </div>
            </div>

            <div className="border-t border-navy-200 pt-6">
              <h3 className="font-display text-base font-bold text-navy-950">
                {t.intlTitle}
              </h3>
              <p className="mt-2 text-xs text-navy-600 leading-relaxed">
                {t.intlDesc}
              </p>
              <div className="mt-4 space-y-2 text-xs text-navy-800">
                <p className="flex items-center gap-2">
                  <strong>{t.webLabel}</strong> www.icaonline.co.za
                </p>
              </div>
            </div>

            <div className="border-t border-navy-200 pt-6">
              <h3 className="font-display text-sm font-bold text-navy-950">
                {t.apprTitle}
              </h3>
              <p className="mt-2 text-xs text-navy-600 leading-relaxed">
                {t.apprDesc}
              </p>
            </div>
          </div>

          {/* Form block */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
