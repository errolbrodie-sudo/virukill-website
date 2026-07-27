"use client";

import { useState, useMemo } from "react";
import { RESOURCES, ResourceItem } from "@/data/resources";
import { useLanguage } from "@/context/LanguageContext";

const categoryMap = {
  en: [
    { key: "All", label: "All" },
    { key: "Safety Data Sheets", label: "Safety Data Sheets" },
    { key: "Technical Sheets", label: "Technical Sheets" },
    { key: "Biosecurity Guides", label: "Biosecurity Guides" },
    { key: "Certifications", label: "Certifications" }
  ],
  he: [
    { key: "All", label: "הכל" },
    { key: "Safety Data Sheets", label: "גיליונות בטיחות" },
    { key: "Technical Sheets", label: "גיליונות טכניים" },
    { key: "Biosecurity Guides", label: "מדריכי אבטחה ביולוגית" },
    { key: "Certifications", label: "אישורים והסמכות" }
  ]
};

const labelsMap = {
  en: {
    download: "Download",
    English: "English",
    Hebrew: "Hebrew",
    Bilingual: "Bilingual",
    downloadingToast: "Downloading document: "
  },
  he: {
    download: "הורדה",
    English: "אנגלית",
    Hebrew: "עברית",
    Bilingual: "דו-לשוני",
    downloadingToast: "מוריד מסמך: "
  }
};

export default function ResourceLibrary() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const activeCategories = categoryMap[language];
  const tLabels = labelsMap[language];

  const filteredResources = useMemo(() => {
    return RESOURCES.filter((res) => {
      return selectedCategory === "All" || res.category === selectedCategory;
    });
  }, [selectedCategory]);

  const handleDownloadClick = (item: ResourceItem) => {
    const docTitle = item[language].title;
    setActiveToast(`${tLabels.downloadingToast} ${docTitle}`);
    setTimeout(() => {
      setActiveToast(null);
    }, 4000);
  };

  const getCategoryLabel = (category: string) => {
    const found = activeCategories.find((item) => item.key === category);
    return found ? found.label : category;
  };

  const getDocLangLabel = (docLang: string) => {
    return tLabels[docLang as keyof typeof tLabels] || docLang;
  };

  return (
    <div className="space-y-8 relative">
      {/* Toast Notification */}
      {activeToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-navy-900 text-white text-xs px-5 py-3 rounded-2xl shadow-xl border border-navy-700 flex items-center gap-3 animate-fade-rise">
          <svg className="animate-spin h-4 w-4 text-bio-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{activeToast}</span>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-navy-100 pb-5">
        {activeCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-colors ${
              selectedCategory === cat.key
                ? "bg-[#D8E6DF] text-navy-950 border border-navy-300 shadow-sm"
                : "bg-white text-navy-600 border border-navy-100 hover:bg-navy-50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Resources */}
      <div className="grid gap-6 sm:grid-cols-2">
        {filteredResources.map((res) => {
          const content = res[language];
          return (
            <div
              key={res.id}
              className="group bg-white border border-navy-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-navy-50 text-[10px] font-bold text-navy-600 uppercase tracking-wide">
                    {getCategoryLabel(res.category)}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-bio-700 bg-bio-50 border border-bio-100 px-1.5 py-0.5 rounded uppercase">
                    {getDocLangLabel(res.language)}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-base text-navy-950 leading-snug group-hover:text-bio-700 transition-colors">
                    {content.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-500">
                    {content.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-50 flex items-center justify-between">
                <div className="text-[10px] text-navy-400 font-semibold font-mono">
                  {res.fileFormat} &bull; {res.fileSize}
                </div>
                <a
                  href={res.downloadUrl}
                  download={res.filename}
                  onClick={() => handleDownloadClick(res)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-bio-600 hover:text-bio-700 transition-colors bg-bio-50 hover:bg-bio-100 px-3 py-1.5 rounded-xl border border-bio-200"
                >
                  {tLabels.download}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
