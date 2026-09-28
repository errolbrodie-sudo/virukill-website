"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";
import { LEGAL_DISCLAIMER } from "@/data/disclaimer";

export default function DisclaimerPage() {
  const { language } = useLanguage();
  const d = LEGAL_DISCLAIMER[language] || LEGAL_DISCLAIMER.en;

  return (
    <>
      <PageHero
        title={d.title}
        subtitle={d.subtitle}
        badge="LEGAL & REGULATORY NOTICE"
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
        {/* Entity & Effective Date Header */}
        <div className="bg-navy-950 text-white rounded-lg p-6 sm:p-8 border-l-8 border-bio-500 shadow-md space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-800 pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-bio-400 block">
                LEGAL ENTITY
              </span>
              <h2 className="font-display text-xl font-bold text-white">
                {LEGAL_DISCLAIMER.entityName}
              </h2>
            </div>
            <div className="text-left rtl:text-right sm:text-right sm:rtl:text-left">
              <span className="text-[10px] font-bold tracking-wider uppercase text-navy-400 block">
                EFFECTIVE DATE
              </span>
              <span className="text-xs font-mono font-semibold text-navy-200">
                {LEGAL_DISCLAIMER.effectiveDate}
              </span>
            </div>
          </div>
          <p className="text-xs text-navy-300 leading-relaxed">
            This legal disclaimer applies to all pages, domain routes, tools, calculators, resources, and downloadable files hosted under this website. Contact:{" "}
            <a href={`mailto:${LEGAL_DISCLAIMER.contactEmail}`} className="text-bio-400 underline hover:text-bio-300">
              {LEGAL_DISCLAIMER.contactEmail}
            </a>
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {d.sections.map((section) => (
            <div
              key={section.id}
              className="bg-white border border-navy-200 rounded-lg p-6 shadow-2xs space-y-3 hover:border-navy-300 transition-colors"
            >
              <h2 className="font-display text-base font-bold text-navy-950">
                {section.title}
              </h2>
              <div className="space-y-2 text-xs leading-relaxed text-navy-700">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-navy-50 border border-navy-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-sm font-bold text-navy-950">
              Legal & Compliance Questions?
            </h3>
            <p className="text-xs text-navy-600">
              Reach out to our corporate compliance team for official product documentation and SDS inquiries.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center px-4 py-2.5 bg-bio-600 hover:bg-bio-700 text-white font-semibold text-xs rounded transition-colors"
          >
            Contact Legal Compliance
          </Link>
        </div>
      </div>

      <CTASection />
    </>
  );
}
