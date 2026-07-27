"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SiteFooter() {
  const { t } = useLanguage();

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
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-navy-100 pt-8 flex flex-col-reverse lg:flex-row items-start justify-between gap-6">
          <p className="text-[11px] text-navy-400 shrink-0">
            &copy; {new Date().getFullYear()} {t("footer_rights")}
          </p>
          <div className="max-w-3xl text-left rtl:text-right lg:text-right lg:rtl:text-left text-[10px] leading-relaxed text-navy-500 bg-white border-l-4 rtl:border-l-0 rtl:border-r-4 border-navy-400 p-4 shadow-sm">
            <strong className="text-navy-900 block mb-1">{t("footer_disclaimer_title")}</strong> {t("footer_disclaimer_body")}
          </div>
        </div>
      </div>
    </footer>
  );
}
