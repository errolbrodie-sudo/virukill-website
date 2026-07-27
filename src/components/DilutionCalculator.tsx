"use client";

import { useState, useMemo } from "react";
import { DILUTION_MODES, calculateDilution } from "@/data/dilutions";
import { useLanguage } from "@/context/LanguageContext";

const uiTranslations = {
  en: {
    step1Prefix: "Step 1",
    step1Suffix: ": Select Application Mode",
    step2Prefix: "Step 2",
    step2Suffix: ": Enter Application Metrics",
    dimHelper: "Enter building dimensions in meters to calculate coverage area and target volume:",
    length: "Length (m)",
    width: "Width (m)",
    height: "Height (m)",
    volHelper: "Enter the size of your water line header tank or system in Liters:",
    volLabel: "Water Tank Volume (Liters)",
    eggHelper: "Enter the total number of hatching eggs you intend to disinfect:",
    eggLabel: "Number of Hatching Eggs",
    summaryTitle: "Calculation Summary",
    reqWater: "Required Water Volume",
    reqVirukill: "Required Virukill Agent",
    litersUnit: "L",
    litersFull: "Liters",
    mlUnit: "ml",
    stepInstructionsTitle: "Step-by-Step Mixing Instructions:",
    awaitingTitle: "Awaiting Application Inputs from steps 1 and 2 above",
    safetyTitle: "Safety & Handling Advisory",
    safetyDesc: "While Virukill is extremely safe for birds and livestock at diluted working strengths, the undiluted chemical concentrate is corrosive and a skin irritant. Always wear protective gloves, goggles, and a face shield when handling, measuring, and diluting the concentrate."
  },
  he: {
    step1Prefix: "שלב 1",
    step1Suffix: ": בחר מצב יישום",
    step2Prefix: "שלב 2",
    step2Suffix: ": הזן נתוני יישום",
    dimHelper: "הזן ממדי מבנה במטרים לחישוב שטח כיסוי ונפח יעד:",
    length: "אורך (מ')",
    width: "רוחב (מ')",
    height: "גובה (מ')",
    volHelper: "הזן את נפח מכל המים או המערכת בליטרים:",
    volLabel: "נפח מכל מים (ליטרים)",
    eggHelper: "הזן את המספר הכולל של ביצי דגירה שברצונך לחטא:",
    eggLabel: "מספר ביצי דגירה",
    summaryTitle: "סיכום חישוב",
    reqWater: "נפח מים נדרש",
    reqVirukill: "כמות חומר Virukill נדרשת",
    litersUnit: "ליטר",
    litersFull: "ליטרים",
    mlUnit: "מ\"ל",
    stepInstructionsTitle: "הנחיות ערבוב שלב-אחר-שלב:",
    awaitingTitle: "ממתין לנתוני יישום משלבים 1 ו-2 לעיל",
    safetyTitle: "הנחיות בטיחות וטיפול",
    safetyDesc: "בעוד ש-Virukill בטוח לחלוטין לציפורים ובעלי חיים בריכוזי עבודה מהולים, הרכז הכימי הבלתי מהול הוא קורוזיבי ומגרה את העור. לבש תמיד כפפות מגן, משקפי מגן ומגן פנים בעת טיפול, מדידה ומיהול הרכז."
  }
};

export default function DilutionCalculator() {
  const { language } = useLanguage();
  const t = uiTranslations[language];

  const [selectedModeId, setSelectedModeId] = useState(DILUTION_MODES[0].id);
  const [length, setLength] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [waterVolume, setWaterVolume] = useState<number | "">("");
  const [eggCount, setEggCount] = useState<number | "">("");

  const activeMode = useMemo(() => {
    return DILUTION_MODES.find((m) => m.id === selectedModeId)!;
  }, [selectedModeId]);

  const activeContent = activeMode[language];

  const calculation = useMemo(() => {
    return calculateDilution(selectedModeId, {
      length: Number(length) || 0,
      width: Number(width) || 0,
      height: Number(height) || 0,
      waterVolume: Number(waterVolume) || 0,
      eggCount: Number(eggCount) || 0,
    });
  }, [selectedModeId, length, width, height, waterVolume, eggCount]);

  const hasInputs = useMemo(() => {
    if (activeMode.unitType === "dimensions") {
      return Number(length) > 0 && Number(width) > 0 && Number(height) > 0;
    }
    if (activeMode.unitType === "volume") {
      return Number(waterVolume) > 0;
    }
    if (activeMode.unitType === "eggs") {
      return Number(eggCount) > 0;
    }
    return false;
  }, [activeMode, length, width, height, waterVolume, eggCount]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Step 1: Select Application Mode */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-navy-100">
        <label className="block text-base font-bold uppercase tracking-wider text-black mb-4">
          <span className="underline decoration-black underline-offset-4">{t.step1Prefix}</span>{t.step1Suffix}
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          {DILUTION_MODES.map((mode) => {
            const content = mode[language];
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => {
                  setSelectedModeId(mode.id);
                  setLength("");
                  setWidth("");
                  setHeight("");
                  setWaterVolume("");
                  setEggCount("");
                }}
                className={`w-full text-left rtl:text-right p-4 rounded-2xl border transition-all ${
                  selectedModeId === mode.id
                    ? "bg-bio-50 border-bio-500 shadow-sm"
                    : "bg-white border-navy-100 hover:bg-navy-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-sm text-navy-950">
                    {content.name}
                  </span>
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold ${
                      selectedModeId === mode.id ? "bg-bio-200 text-bio-800" : "bg-navy-100 text-navy-600"
                    }`}
                  >
                    {mode.ratioText}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-navy-500 leading-normal line-clamp-2">
                  {content.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Configure Inputs */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-navy-100">
        <label className="block text-base font-bold uppercase tracking-wider text-black mb-4">
          <span className="underline decoration-black underline-offset-4">{t.step2Prefix}</span>{t.step2Suffix}
        </label>

        {activeMode.unitType === "dimensions" && (
          <div className="space-y-4">
            <p className="text-xs text-navy-500 leading-relaxed mb-2">
              {t.dimHelper}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy-600 mb-1.5">
                  {t.length}
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 30"
                  value={length}
                  onChange={(e) => setLength(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
                  className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-300 text-navy-950 font-mono shadow-inner"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy-600 mb-1.5">
                  {t.width}
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 12"
                  value={width}
                  onChange={(e) => setWidth(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
                  className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-300 text-navy-950 font-mono shadow-inner"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy-600 mb-1.5">
                  {t.height}
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 3"
                  value={height}
                  onChange={(e) => setHeight(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
                  className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-300 text-navy-950 font-mono shadow-inner"
                />
              </div>
            </div>
          </div>
        )}

        {activeMode.unitType === "volume" && (
          <div className="space-y-4">
            <p className="text-xs text-navy-500 leading-relaxed mb-2">
              {t.volHelper}
            </p>
            <div className="max-w-md">
              <label className="block text-xs font-semibold text-navy-600 mb-1.5">
                {t.volLabel}
              </label>
              <input
                type="number"
                min="0"
                placeholder="e.g. 1000"
                value={waterVolume}
                onChange={(e) => setWaterVolume(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
                className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-300 text-navy-950 font-mono shadow-inner"
              />
            </div>
          </div>
        )}

        {activeMode.unitType === "eggs" && (
          <div className="space-y-4">
            <p className="text-xs text-navy-500 leading-relaxed mb-2">
              {t.eggHelper}
            </p>
            <div className="max-w-md">
              <label className="block text-xs font-semibold text-navy-600 mb-1.5">
                {t.eggLabel}
              </label>
              <input
                type="number"
                min="0"
                placeholder="e.g. 500"
                value={eggCount}
                onChange={(e) => setEggCount(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
                className="w-full bg-white px-4 py-2.5 border border-navy-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bio-500 text-sm placeholder:text-navy-300 text-navy-950 font-mono shadow-inner"
              />
            </div>
          </div>
        )}
      </div>

      {/* Step 3: Calculation Summary */}
      <div className="bg-[#D8E6DF] rounded-3xl p-6 sm:p-8 text-navy-950 shadow-xl shadow-navy-950/5 relative overflow-hidden border border-navy-200">
        <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-bio-500/5 blur-3xl pointer-events-none" />

        <h3 className="font-display text-lg font-semibold border-b border-navy-200 pb-4 text-navy-950">
          {t.summaryTitle}
        </h3>

        {hasInputs && calculation ? (
          <div className="mt-6 space-y-8 animate-fade-rise">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/40 border border-navy-200 rounded-2xl p-5">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-navy-700">
                  {t.reqWater}
                </span>
                <span className="block font-mono text-3xl font-bold text-navy-950 mt-1">
                  {calculation.waterLiters.toFixed(1)} <span className="text-lg">{t.litersUnit}</span>
                </span>
              </div>
              <div className="bg-bio-500/15 border border-bio-500/30 rounded-2xl p-5">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-bio-800">
                  {t.reqVirukill}
                </span>
                <span className="block font-mono text-3xl font-bold text-bio-700 mt-1">
                  {calculation.virukillMl >= 1000 ? (
                    <>
                      {calculation.virukillLiters.toFixed(2)}{" "}
                      <span className="text-lg">{t.litersFull}</span>
                    </>
                  ) : (
                    <>
                      {Math.ceil(calculation.virukillMl)}{" "}
                      <span className="text-lg">{t.mlUnit}</span>
                    </>
                  )}
                </span>
              </div>
            </div>

            <div className="text-xs text-navy-700 border-l-2 border-bio-500 pl-4 py-1 leading-normal italic">
              {calculation.coverageText[language]}
            </div>

            {/* Mixing Ratio Details */}
            <div className="border-t border-navy-200 pt-6 space-y-4">
              <h4 className="font-display text-sm font-semibold text-navy-950">
                {t.stepInstructionsTitle}
              </h4>
              <ol className="space-y-3">
                {activeContent.instructions.map((inst, index) => (
                  <li key={index} className="flex gap-3 text-xs leading-relaxed text-navy-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bio-100 text-[10px] font-bold text-bio-700 border border-bio-200">
                      {index + 1}
                    </span>
                    <span>{inst}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ) : (
          <div className="mt-8 mb-4 text-center max-w-sm mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-navy-600 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h4 className="mt-4 font-display text-2xl font-bold text-navy-950">
              {t.awaitingTitle}
            </h4>
          </div>
        )}
      </div>

      {/* Technical Guidance Warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex gap-4 items-start shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-amber-600 shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <h4 className="font-display text-sm font-semibold text-navy-950">
            {t.safetyTitle}
          </h4>
          <p className="mt-1 text-xs text-navy-600 leading-relaxed">
            {t.safetyDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
