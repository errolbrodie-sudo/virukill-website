"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { IMAGES } from "@/data/images";
import { PATHOGENS } from "@/data/pathogens";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();
  const [hoveredAdvantage, setHoveredAdvantage] = useState<{ title: string; desc: string; x: number; y: number } | null>(null);

  const SECTORS = [
    {
      href: "/agriculture",
      tagKey: "sector_ag_tag",
      titleKey: "sector_ag_title",
      descKey: "sector_ag_desc",
      image: IMAGES.poultryCoop,
      imageAlt: "Chickens inside a poultry farm coop",
    },
    {
      href: "/food-prep",
      tagKey: "sector_food_tag",
      titleKey: "sector_food_title",
      descKey: "sector_food_desc",
      image: IMAGES.kitchenChefs,
      imageAlt: "Chefs preparing food in a commercial kitchen",
    },
    {
      href: "/consumer",
      tagKey: "sector_hygiene_tag",
      titleKey: "sector_hygiene_title",
      descKey: "sector_hygiene_desc",
      image: IMAGES.vetDog,
      imageAlt: "Veterinarian examining a dog",
    },
    {
      href: "/crop-disinfection",
      tagKey: "sector_crop_tag",
      titleKey: "sector_crop_title",
      descKey: "sector_crop_desc",
      image: IMAGES.cropDisinfection,
      imageAlt: "Greenhouse crop disinfection and protection",
    },
  ];

  const UTILITIES = [
    {
      tagKey: "util_db_tag",
      titleKey: "util_db_title",
      descKey: "util_db_desc",
      href: "/pathogens",
      ctaKey: "util_db_btn",
    },
    {
      tagKey: "util_calc_tag",
      titleKey: "util_calc_title",
      descKey: "util_calc_desc",
      href: "/dilution-calculator",
      ctaKey: "util_calc_btn",
    },
    {
      tagKey: "util_docs_tag",
      titleKey: "util_docs_title",
      descKey: "util_docs_desc",
      href: "/resources",
      ctaKey: "util_docs_btn",
    },
  ];

  const STATS = [
    { value: `${PATHOGENS.length}+`, keyLabel: "stat1_label", keyDesc: "stat1_desc" },
    { valueKey: "stat2_val", value: "12 Months", keyLabel: "stat2_label", keyDesc: "stat2_desc" },
    { value: "100%", keyLabel: "stat3_label", keyDesc: "stat3_desc" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#D8E6DF] min-h-[550px] flex items-center border-b border-navy-200">
        {/* Background Video with Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#D8E6DF] via-[#D8E6DF]/70 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-bio-500" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-rise">
            <span className="text-bio-800 font-extrabold uppercase tracking-widest text-[20px] mb-4 block">
              {t("hero_category")}
            </span>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-navy-950 leading-tight">
              {t("hero_title")}
            </h1>
            <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-navy-800">
              {t("hero_desc")}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-1 gap-8 border-t border-navy-200 pt-10 sm:grid-cols-3">
            {STATS.map((s, index) => (
              <div key={index}>
                <p className="font-display text-3xl font-light text-navy-950">
                  {s.valueKey ? t(s.valueKey) : s.value}
                </p>
                <p className="mt-2 text-[10px] font-extrabold text-navy-600 uppercase tracking-widest">
                  {t(s.keyLabel)}
                </p>
                <p className="text-[11px] text-navy-500 mt-1">
                  {t(s.keyDesc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Sectors Gateways */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center md:text-left rtl:md:text-right">
          <span className="text-bio-600 font-extrabold uppercase tracking-widest text-[20px] mb-2 block">
            {t("sectors_category")}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-light text-navy-950">
            {t("sectors_title")}
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-navy-500">
            {t("sectors_desc")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((sector, index) => {
            return (
              <Link
                key={index}
                href={sector.href}
                className="group relative overflow-hidden bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-teaser-category">
                      {t(sector.tagKey)}
                    </span>
                    <h3 className="font-display text-base font-bold text-navy-950 mt-1">
                      {t(sector.titleKey)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-navy-500">
                      {t(sector.descKey)}
                    </p>
                  </div>
                  <span className="btn-corporate-link mt-6">
                    {t("portal_btn")}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Interactive Utilities Highlights */}
      <section className="bg-navy-50/50 border-t border-b border-navy-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center md:text-left rtl:md:text-right">
            <span className="text-bio-600 font-extrabold uppercase tracking-widest text-[20px] mb-2 block">
              {t("utils_category")}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light text-navy-950">
              {t("utils_title")}
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-navy-500">
              {t("utils_desc")}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {UTILITIES.map((tool, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border border-navy-100 flex flex-col justify-between p-6 shadow-sm"
                >
                  <div>
                    <span className="text-teaser-category">
                      {t(tool.tagKey)}
                    </span>
                    <h3 className="font-display text-base font-bold text-navy-950 mt-1">
                      {t(tool.titleKey)}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-navy-500">
                      {t(tool.descKey)}
                    </p>
                  </div>
                  <Link
                    href={tool.href}
                    className="btn-corporate-link mt-6"
                  >
                    {t(tool.ctaKey)}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitor Advantage Matrix */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-navy-100">
        <div className="max-w-3xl text-center md:text-left rtl:md:text-right mb-12">
          <span className="text-bio-600 font-extrabold uppercase tracking-widest text-[20px] mb-2 block">
            {t("matrix_category")}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-light text-navy-950">
            {t("matrix_title")}
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-navy-500">
            {t("matrix_desc")}
          </p>
        </div>

        <div className="overflow-x-auto border border-navy-100 bg-white">
          <table className="min-w-full divide-y divide-navy-100 text-left rtl:text-right text-xs leading-normal">
            <thead className="bg-navy-50/50">
              <tr className="divide-x divide-navy-100">
                <th scope="col" className="px-4 py-2.5 font-bold text-navy-950 uppercase tracking-wider w-[30%]">{t("col_product")}</th>
                <th scope="col" className="px-4 py-2.5 font-bold text-navy-950 uppercase tracking-wider bg-bio-50/20 text-bio-800 w-[30%] whitespace-nowrap">{t("col_advantage")}</th>
                <th scope="col" className="px-4 py-2.5 font-bold text-navy-950 uppercase tracking-wider w-[40%]">{t("col_verdict")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {/* Virukill */}
              <tr className="divide-x divide-navy-100 hover:bg-navy-50/20 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-bold text-bio-700 text-xs">Virukill</div>
                  <div className="text-xs text-navy-500 mt-1 font-mono">{t("row_vk_active")}</div>
                </td>
                <td className="px-4 py-3 bg-bio-50/10 text-navy-900">
                  <ul className="list-disc pl-4 space-y-1.5 rtl:pl-0 rtl:pr-4">
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_vk_adv_1_title"), desc: t("row_vk_adv_1_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_vk_adv_1_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_vk_adv_2_title"), desc: t("row_vk_adv_2_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_vk_adv_2_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_vk_adv_3_title"), desc: t("row_vk_adv_3_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_vk_adv_3_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider text-[9px] px-2 py-0.5 mb-1.5">
                    {t("tag_market_leader")}
                  </span>
                  <p className="text-xs text-navy-500 leading-normal">{t("row_vk_verdict")}</p>
                </td>
              </tr>

              {/* Virkon S */}
              <tr className="divide-x divide-navy-100 hover:bg-navy-50/20 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-bold text-navy-950 text-xs">Virkon S</div>
                  <div className="text-xs text-navy-500 mt-1 font-mono">{t("row_vks_active")}</div>
                </td>
                <td className="px-4 py-3 bg-bio-50/5 text-navy-900">
                  <ul className="list-disc pl-4 space-y-1.5 rtl:pl-0 rtl:pr-4">
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_vks_adv_1_title"), desc: t("row_vks_adv_1_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_vks_adv_1_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_vks_adv_2_title"), desc: t("row_vks_adv_2_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_vks_adv_2_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block bg-red-100 text-red-800 font-bold uppercase tracking-wider text-[9px] px-2 py-0.5 mb-1.5">
                    {t("tag_infrastructure_risk")}
                  </span>
                  <p className="text-xs text-navy-500 leading-normal">{t("row_vks_verdict")}</p>
                </td>
              </tr>

              {/* F10 SC */}
              <tr className="divide-x divide-navy-100 hover:bg-navy-50/20 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-bold text-navy-950 text-xs">F10 SC</div>
                  <div className="text-xs text-navy-500 mt-1 font-mono">{t("row_f10_active")}</div>
                </td>
                <td className="px-4 py-3 bg-bio-50/5 text-navy-900">
                  <ul className="list-disc pl-4 space-y-1.5 rtl:pl-0 rtl:pr-4">
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_f10_adv_1_title"), desc: t("row_f10_adv_1_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_f10_adv_1_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_f10_adv_2_title"), desc: t("row_f10_adv_2_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_f10_adv_2_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block bg-amber-100 text-amber-800 font-bold uppercase tracking-wider text-[9px] px-2 py-0.5 mb-1.5">
                    {t("tag_cost_prohibitive")}
                  </span>
                  <p className="text-xs text-navy-500 leading-normal">{t("row_f10_verdict")}</p>
                </td>
              </tr>

              {/* Virocid */}
              <tr className="divide-x divide-navy-100 hover:bg-navy-50/20 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-bold text-navy-950 text-xs">Virocid</div>
                  <div className="text-xs text-navy-500 mt-1 font-mono">{t("row_vc_active")}</div>
                </td>
                <td className="px-4 py-3 bg-bio-50/5 text-navy-900">
                  <ul className="list-disc pl-4 space-y-1.5 rtl:pl-0 rtl:pr-4">
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_vc_adv_1_title"), desc: t("row_vc_adv_1_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_vc_adv_1_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_vc_adv_2_title"), desc: t("row_vc_adv_2_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_vc_adv_2_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block bg-red-100 text-red-800 font-bold uppercase tracking-wider text-[9px] px-2 py-0.5 mb-1.5">
                    {t("tag_high_toxicity")}
                  </span>
                  <p className="text-xs text-navy-500 leading-normal">{t("row_vc_verdict")}</p>
                </td>
              </tr>

              {/* Farmfluid S */}
              <tr className="divide-x divide-navy-100 hover:bg-navy-50/20 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-bold text-navy-950 text-xs">Farmfluid S</div>
                  <div className="text-xs text-navy-500 mt-1 font-mono">{t("row_ffs_active")}</div>
                </td>
                <td className="px-4 py-3 bg-bio-50/5 text-navy-900">
                  <ul className="list-disc pl-4 space-y-1.5 rtl:pl-0 rtl:pr-4">
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_ffs_adv_1_title"), desc: t("row_ffs_adv_1_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_ffs_adv_1_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                    <li className="text-bio-700 font-bold">
                      <span
                        onMouseMove={(e) => setHoveredAdvantage({ title: t("row_ffs_adv_2_title"), desc: t("row_ffs_adv_2_desc"), x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredAdvantage(null)}
                        className="inline-flex items-center text-left rtl:text-right hover:text-bio-800 transition-colors group cursor-help select-none"
                      >
                        <span className="border-b border-dashed border-bio-400 group-hover:border-bio-600 transition-colors">
                          {t("row_ffs_adv_2_title")}
                        </span>
                        <svg className="w-3.5 h-3.5 ml-1.5 rtl:ml-0 rtl:mr-1.5 text-bio-500 group-hover:text-bio-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block bg-amber-100 text-amber-800 font-bold uppercase tracking-wider text-[9px] px-2 py-0.5 mb-1.5">
                    {t("tag_niche_hazardous")}
                  </span>
                  <p className="text-xs text-navy-500 leading-normal">{t("row_ffs_verdict")}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-3xl text-center md:text-left rtl:md:text-right mt-12 mb-6">
          <div className="space-y-4 text-xs leading-relaxed text-navy-800 border-l-2 border-bio-500 pl-4 rtl:pl-0 rtl:pr-4 rtl:border-l-0 rtl:border-r-2">
            <p className="font-semibold text-navy-950">{t("matrix_intro")}</p>
            <ul className="space-y-3">
              <li>
                <strong className="block text-navy-950 font-bold">{t("matrix_v1_title")}</strong>
                <span className="text-navy-600">{t("matrix_v1_desc")}</span>
              </li>
              <li>
                <strong className="block text-navy-950 font-bold">{t("matrix_v2_title")}</strong>
                <span className="text-navy-600">{t("matrix_v2_desc")}</span>
              </li>
              <li>
                <strong className="block text-navy-950 font-bold">{t("matrix_v3_title")}</strong>
                <span className="text-navy-600">{t("matrix_v3_desc")}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-4 text-[10px] text-navy-400 italic text-center md:text-left rtl:md:text-right">
          {t("matrix_bottom_note")}
        </p>
      </section>

      <CTASection />

      {/* Interactive Advantage Detail Tooltip */}
      {hoveredAdvantage && (
        <div 
          className="fixed z-50 pointer-events-none bg-navy-950/95 text-white rounded-md p-3 shadow-lg border border-navy-800 text-[11px] w-64 max-w-xs transition-opacity duration-150 text-left rtl:text-right"
          style={{ 
            top: hoveredAdvantage.y + 15, 
            left: typeof window !== "undefined"
              ? Math.max(15, Math.min(hoveredAdvantage.x + 15, window.innerWidth - 275))
              : hoveredAdvantage.x + 15
          }}
          dir={language === "he" ? "rtl" : "ltr"}
        >
          <div className="font-bold text-bio-400 mb-1">{hoveredAdvantage.title}</div>
          <div className="text-navy-100 leading-normal">{hoveredAdvantage.desc}</div>
        </div>
      )}
    </>
  );
}
