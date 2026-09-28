"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="404 - Page Not Found"
        subtitle="The requested page could not be located on the Virukill Biosecurity Portal."
        badge="ERROR 404"
      />

      <div className="mx-auto max-w-3xl px-4 py-16 text-center space-y-6">
        <p className="text-sm text-navy-600 leading-relaxed">
          Please check the web address or navigate back to the main portal sectors below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="px-5 py-2.5 bg-bio-600 hover:bg-bio-700 text-white font-semibold text-xs rounded transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/agriculture"
            className="px-5 py-2.5 bg-white border border-navy-300 hover:border-navy-400 text-navy-800 font-semibold text-xs rounded transition-colors"
          >
            Agriculture Portal
          </Link>
          <Link
            href="/disclaimer"
            className="px-5 py-2.5 bg-white border border-navy-300 hover:border-navy-400 text-navy-800 font-semibold text-xs rounded transition-colors"
          >
            Legal Disclaimer
          </Link>
        </div>
      </div>
    </>
  );
}
