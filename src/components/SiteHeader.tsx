"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";

const NAVIGATION = [
  { key: "nav_pathogens", href: "/pathogens" },
  { key: "nav_calculator", href: "/dilution-calculator" },
  { key: "nav_resources", href: "/resources" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs font-bold uppercase tracking-wider py-2 transition-colors hover:text-bio-600 ${
                    isActive ? "text-bio-600" : "text-navy-900"
                  }`}
                >
                  {t(item.key)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-bio-500" />
                  )}
                </Link>
              );
            })}

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 px-3 py-2 border border-navy-100 hover:bg-navy-50/50 transition-colors"
                id="language-select"
              >
                <span>{language === "en" ? "EN" : "HE"}</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}>
                  <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-1 w-24 border border-navy-100 bg-white py-1 shadow-md z-50">
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setDropdownOpen(false);
                    }}
                    className={`block w-full text-left rtl:text-right px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-navy-50 ${language === "en" ? "text-bio-600" : "text-navy-900"}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("he");
                      setDropdownOpen(false);
                    }}
                    className={`block w-full text-left rtl:text-right px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-navy-50 ${language === "he" ? "text-bio-600" : "text-navy-900"}`}
                  >
                    עברית
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="btn-corporate-primary text-[11px] px-5 py-2.5"
            >
              {t("nav_quote")}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center p-2.5 text-navy-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-navy-100 bg-white px-4 py-4 space-y-3">
          {NAVIGATION.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-xs font-bold uppercase tracking-wider px-3 py-2 transition-colors hover:bg-navy-50 hover:text-bio-600 ${
                  isActive ? "text-bio-600 bg-navy-50" : "text-navy-900"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#D8E6DF] px-3 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 hover:bg-[#c9dcd2] transition-colors"
          >
            {t("nav_quote")}
          </Link>

          {/* Mobile Language Toggle */}
          <div className="flex items-center justify-between border-t border-navy-100 pt-3 mt-3">
            <span className="text-xs font-bold text-navy-500 uppercase tracking-wider">Language</span>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs font-bold px-3 py-1.5 border ${language === "en" ? "border-bio-600 bg-bio-50 text-bio-800" : "border-navy-100 text-navy-600"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("he")}
                className={`text-xs font-bold px-3 py-1.5 border ${language === "he" ? "border-bio-600 bg-bio-50 text-bio-800" : "border-navy-100 text-navy-600"}`}
              >
                HE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
