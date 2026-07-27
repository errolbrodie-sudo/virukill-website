"use client";

import { useState, useMemo } from "react";
import { PATHOGENS, Pathogen } from "@/data/pathogens";
import { useLanguage } from "@/context/LanguageContext";

const groupsMap = {
  en: [
    { key: "All", label: "All" },
    { key: "Virus", label: "Virus" },
    { key: "Bacteria", label: "Bacteria" },
    { key: "Mycoplasma", label: "Mycoplasma" },
    { key: "Fungi & Yeasts", label: "Fungi & Yeasts" }
  ],
  he: [
    { key: "All", label: "הכל" },
    { key: "Virus", label: "נגיפים" },
    { key: "Bacteria", label: "חיידקים" },
    { key: "Mycoplasma", label: "מיקופלזמה" },
    { key: "Fungi & Yeasts", label: "פטריות ושמרים" }
  ]
};

const groupTagLabels = {
  en: {
    Virus: "Virus",
    Bacteria: "Bacteria",
    Mycoplasma: "Mycoplasma",
    "Fungi & Yeasts": "Fungi & Yeasts"
  },
  he: {
    Virus: "נגיף",
    Bacteria: "חיידק",
    Mycoplasma: "מיקופלזמה",
    "Fungi & Yeasts": "פטריות ושמרים"
  }
};

const uiLabels = {
  en: {
    searchPlaceholder: "Search Newcastle, H5N1, Salmonella...",
    showingPrefix: "Showing",
    showingMid: "of",
    showingSuffix: "organisms",
    clearSearch: "Clear Search",
    dilutionLabel: "Recommended Dilution",
    contactLabel: "Exposure Time",
    noResultsTitle: "No Pathogen Found",
    noResultsDesc: (query: string) => `We couldn't find any records matching "${query}". Try checking your spelling or looking for a different organism.`
  },
  he: {
    searchPlaceholder: "חפש ניוקאסל, H5N1, סלמונלה...",
    showingPrefix: "מציג",
    showingMid: "מתוך",
    showingSuffix: "אורגניזמים",
    clearSearch: "נקה חיפוש",
    dilutionLabel: "מיהול מומלץ",
    contactLabel: "זמן חשיפה",
    noResultsTitle: "לא נמצאו פתוגנים",
    noResultsDesc: (query: string) => `לא מצאנו רשומות התואמות ל-"${query}". נסה לבדוק את האיות או לחפש אורגניזם אחר.`
  }
};

export default function PathogenExplorer() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  const activeGroups = groupsMap[language];
  const t = uiLabels[language];
  const tags = groupTagLabels[language];

  const filteredPathogens = useMemo(() => {
    return PATHOGENS.filter((pathogen) => {
      const enContent = pathogen.en || {};
      const heContent = pathogen.he || {};
      const query = (searchQuery || "").toLowerCase();

      const matchesSearch =
        (enContent.name && enContent.name.toLowerCase().includes(query)) ||
        (heContent.name && heContent.name.toLowerCase().includes(query)) ||
        (pathogen.scientificName && pathogen.scientificName.toLowerCase().includes(query)) ||
        (enContent.notes && enContent.notes.toLowerCase().includes(query)) ||
        (heContent.notes && heContent.notes.toLowerCase().includes(query));

      const matchesGroup =
        selectedGroup === "All" || pathogen.group === selectedGroup;

      return matchesSearch && matchesGroup;
    });
  }, [searchQuery, selectedGroup]);

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-navy-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-navy-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white pl-12 pr-4 py-3 rounded-2xl border border-navy-100 focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-400 text-navy-950 shadow-inner"
          />
        </div>

        {/* Group Tabs */}
        <div className="flex flex-wrap gap-2">
          {activeGroups.map((group) => (
            <button
              key={group.key}
              onClick={() => setSelectedGroup(group.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-colors ${
                selectedGroup === group.key
                  ? "bg-bio-600 text-white shadow-sm"
                  : "bg-white text-navy-600 border border-navy-100 hover:bg-navy-50"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-navy-400">
          {t.showingPrefix} {filteredPathogens.length} {t.showingMid} {PATHOGENS.length} {t.showingSuffix}
        </span>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedGroup("All");
            }}
            className="text-xs font-semibold text-bio-600 hover:text-bio-700 hover:underline"
          >
            {t.clearSearch}
          </button>
        )}
      </div>

      {/* Grid of Results */}
      {filteredPathogens.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPathogens.map((pathogen) => {
            const content = pathogen[language] || pathogen.en;
            return (
              <div
                key={pathogen.id}
                className="group relative overflow-hidden bg-white border border-navy-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Header tags */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        pathogen.group === "Virus"
                          ? "bg-red-50 text-red-600 border border-red-100"
                          : pathogen.group === "Bacteria"
                          ? "bg-blue-50 text-blue-600 border border-blue-100"
                          : pathogen.group === "Mycoplasma"
                          ? "bg-amber-50 text-amber-600 border border-amber-100"
                          : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                      }`}
                    >
                      {tags[pathogen.group]}
                    </span>
                    <span className="text-[10px] font-semibold text-navy-400">
                      {content.commonIn}
                    </span>
                  </div>

                  {/* Names */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-950">
                      {content.name}
                    </h3>
                    <p className="text-xs italic text-navy-400 mt-0.5">
                      {pathogen.scientificName}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-navy-500">
                    {content.notes}
                  </p>
                </div>

                {/* Dilution guidelines footer */}
                <div className="mt-6 pt-4 border-t border-navy-50 flex items-center justify-between gap-2">
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-wider text-navy-400">
                      {t.dilutionLabel}
                    </span>
                    <span className="font-mono text-xs font-bold text-bio-700">
                      {pathogen.dilution}
                    </span>
                  </div>
                  <div className="text-right rtl:text-left">
                    <span className="block text-[9px] font-semibold uppercase tracking-wider text-navy-400">
                      {t.contactLabel}
                    </span>
                    <span className="text-xs font-bold text-navy-700">
                      {content.contactTime}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white border border-navy-100 rounded-3xl p-12 text-center max-w-md mx-auto shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-navy-300 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
            {t.noResultsTitle}
          </h3>
          <p className="mt-2 text-xs text-navy-500">
            {t.noResultsDesc(searchQuery)}
          </p>
        </div>
      )}
    </div>
  );
}
