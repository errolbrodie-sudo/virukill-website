"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#D8E6DF] relative overflow-hidden text-navy-950 py-24 border-t border-navy-200">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.06),transparent_40%)] pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-bio-500" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-bio-800 font-extrabold uppercase tracking-widest text-[20px] mb-4 block">
          {t("cta_category")}
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light tracking-tight max-w-2xl mx-auto leading-tight text-navy-950">
          {t("cta_title")}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-navy-800 max-w-xl mx-auto">
          {t("cta_desc")}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/dilution-calculator"
            className="btn-corporate-dark px-8 py-4"
          >
            {t("cta_btn_calc")}
          </Link>
          <Link
            href="/pathogens"
            className="btn-corporate-secondary-light px-8 py-4"
          >
            {t("cta_btn_db")}
          </Link>
        </div>
      </div>
    </section>
  );
}
