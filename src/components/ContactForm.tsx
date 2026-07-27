"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Request Information / Quote",
    desc: "Need pricing details, local distributor contacts in Israel, or custom dilution protocols? Send us a message.",
    fullName: "Full Name *",
    email: "Email Address *",
    org: "Organization / Farm Name",
    sector: "Primary Sector *",
    secAg: "Poultry & Agriculture",
    secFood: "Food Processing & Hospitality",
    secConsumer: "Home & Veterinary Clinic",
    secCrop: "Crop Protection & Greenhouse",
    message: "Message / Specific Inquiry *",
    msgPlaceholder: "Detail your farm size, water line setup, or target pathogens...",
    submitBtn: "Send Inquiry",
    successTitle: "Inquiry Submitted Successfully",
    successDesc: "Thank you for contacting Virukill Biosecurity. A technical specialist or distributor representing your sector will respond to your request shortly.",
    sendAnother: "Send Another Message",
  },
  he: {
    title: "בקשת מידע / הצעת מחיר",
    desc: "זקוק לפרטי תמחור, אנשי קשר של מפיץ מקומי בישראל, או פרוטוקולי מיהול מותאמים אישית? שלח לנו הודעה.",
    fullName: "שם מלא *",
    email: "כתובת דוא\"ל *",
    org: "שם הארגון / החווה",
    sector: "מגזר עיקרי *",
    secAg: "עופות וחקלאות",
    secFood: "עיבוד מזון ואירוח",
    secConsumer: "בית ומרפאה וטרינרית",
    secCrop: "הגנת הצומח וחממות",
    message: "הודעה / פנייה ספציפית *",
    msgPlaceholder: "פרט את גודל החווה, מבנה קווי המים, או פתוגני היעד...",
    submitBtn: "שלח פנייה",
    successTitle: "הפנייה נשלחה בהצלחה",
    successDesc: "תודה שפנית ל-Virukill אבטחה ביולוגית. מומחה טכני או מפיץ המייצג את המגזר שלך יענה לבקשתך בהקדם.",
    sendAnother: "שלח הודעה נוספת",
  }
};

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [sector, setSector] = useState("Poultry & Agriculture");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white border border-navy-100 rounded-3xl p-8 shadow-sm">
      {submitted ? (
        <div className="text-center py-12 animate-fade-rise">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bio-100 text-bio-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mt-6 font-display text-lg font-semibold text-navy-950">
            {t.successTitle}
          </h3>
          <p className="mt-2 text-xs text-navy-500 max-w-sm mx-auto leading-relaxed">
            {t.successDesc}
          </p>
          <button
            type="button"
            onClick={() => {
              setName("");
              setEmail("");
              setOrg("");
              setSector("Poultry & Agriculture");
              setMessage("");
              setSubmitted(false);
            }}
            className="mt-8 rounded-full border border-navy-200 px-6 py-2.5 text-xs font-semibold text-navy-600 hover:bg-navy-50 transition-colors"
          >
            {t.sendAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="font-display text-lg font-semibold text-navy-950">
            {t.title}
          </h3>
          <p className="text-xs text-navy-500 leading-normal">
            {t.desc}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[10px] font-semibold text-navy-500 mb-1.5">
                {t.fullName}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. David Cohen"
                className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-300 text-navy-950 shadow-inner"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-navy-500 mb-1.5">
                {t.email}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. david@cohenfarms.co.il"
                className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-300 text-navy-950 shadow-inner"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[10px] font-semibold text-navy-500 mb-1.5">
                {t.org}
              </label>
              <input
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="e.g. Galilee Avian Coop"
                className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-300 text-navy-950 shadow-inner"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-navy-500 mb-1.5">
                {t.sector}
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm text-navy-950 shadow-inner"
              >
                <option value="Poultry & Agriculture">{t.secAg}</option>
                <option value="Food Processing & Hospitality">{t.secFood}</option>
                <option value="Home & Veterinary Clinic">{t.secConsumer}</option>
                <option value="Crop Protection & Greenhouse">{t.secCrop}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-semibold text-navy-500 mb-1.5">
              {t.message}
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.msgPlaceholder}
              className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-300 text-navy-950 shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D8E6DF] hover:bg-[#c6dbd1] text-navy-950 font-display font-semibold py-3 px-6 rounded-xl transition-colors shadow-sm text-sm border border-navy-300"
          >
            {t.submitBtn}
          </button>
        </form>
      )}
    </div>
  );
}
