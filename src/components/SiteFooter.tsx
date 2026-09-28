"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { LEGAL_DISCLAIMER } from "@/data/disclaimer";

export default function SiteFooter() {
  const { t, language } = useLanguage();
  const d = LEGAL_DISCLAIMER[language] || LEGAL_DISCLAIMER.en;

  return (
    <footer className="border-t border-navy-100 bg-navy-50/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <span className="font-display text-xl font-bold uppercase tracking-wider text-navy-950 block">
              {t("footer_brand")}
            </span>
            <p className="max-w-sm text-xs leading-relaxed text-navy-600">
              {t("footer_desc")}
            </p>
            <p className="max-w-sm text-[11px] leading-relaxed text-navy-400">
              {t("footer_quality")}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900">{t("footer_sectors")}</h3>
            <ul className="mt-4 space-y-3 text-xs text-navy-600">
              <li>
                <Link href="/agriculture" className="hover:text-bio-600 transition-colors hover:underline">
                  {t("footer_ag")}
                </Link>
              </li>
              <li>
                <Link href="/food-prep" className="hover:text-bio-600 transition-colors hover:underline">
                  {t("footer_food")}
                </Link>
              </li>
              <li>
                <Link href="/consumer" className="hover:text-bio-600 transition-colors hover:underline">
                  {t("footer_consumer")}
                </Link>
              </li>
              <li>
                <Link href="/crop-disinfection" className="hover:text-bio-600 transition-colors hover:underline">
                  {t("footer_crop")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900">{t("footer_utils")}</h3>
            <ul className="mt-4 space-y-3 text-xs text-navy-600">
              <li>
                <Link href="/pathogens" className="hover:text-bio-600 transition-colors hover:underline">
                  {t("footer_pathogens")}
                </Link>
              </li>
              <li>
                <Link href="/dilution-calculator" className="hover:text-bio-600 transition-colors hover:underline">
                  {t("footer_calculator")}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-bio-600 transition-colors hover:underline">
                  {t("footer_downloads")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900">{t("footer_contacts")}</h3>
            <ul className="mt-4 space-y-3 text-xs text-navy-600">
              <li>
                <a href="mailto:support@virukill.co.il" className="hover:text-bio-600 transition-colors hover:underline break-all">
                  support@virukill.co.il
                </a>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-bio-600 transition-colors hover:underline font-medium text-amber-800">
                  Legal & Regulatory Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tailored Shared Disclaimer Summary Panel */}
        <div className="mt-16 border-t border-navy-100 pt-8 space-y-6">
          <div className="bg-white border-l-4 rtl:border-l-0 rtl:border-r-4 border-amber-500 p-4 rounded-r sm:rounded-none shadow-xs text-[11px] leading-relaxed text-navy-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <strong className="text-navy-900 font-display block uppercase tracking-wider text-[10px] text-amber-900">
                LEGAL NOTICE — M.M. BRODIE TRADING LTD.
              </strong>
              <p className="text-navy-600">{d.footerSummary}</p>
            </div>
            <Link
              href="/disclaimer"
              className="inline-flex shrink-0 items-center gap-1 font-bold text-bio-700 hover:text-bio-800 underline text-xs transition-colors"
            >
              <span>{d.footerLinkText}</span>
              <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-navy-400">
            <p>&copy; {new Date().getFullYear()} M.M. Brodie Trading Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs font-medium">
              <Link href="/disclaimer" className="hover:text-navy-700 transition-colors underline">
                Legal Disclaimer
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-navy-700 transition-colors underline">
                Contact & Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
