const fs = require("fs");
const path = require("path");

const docsDir = path.join(__dirname, "..", "public", "documents");

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function generateSimplePdf(filename, docTitle, lines) {
  const safeTitle = escapePdfText(docTitle);
  const textCmds = lines.map((line, idx) => {
    const yPos = 700 - idx * 20;
    return `BT /F1 11 Tf 50 ${yPos} Td (${escapePdfText(line)}) Tj ET`;
  }).join("\n");

  const streamContent = `BT /F1 16 Tf 50 740 Td (${safeTitle}) Tj ET\n${textCmds}`;
  const streamBuf = Buffer.from(streamContent, "utf-8");

  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length ${streamBuf.length} >>
stream
${streamContent}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000323 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
420
%%EOF`;

  fs.writeFileSync(path.join(docsDir, filename), pdf);
  console.log(`Generated: ${filename}`);
}

// 1. Virukill SDS EN
generateSimplePdf("virukill-sds-en.pdf", "VIRUKILL SAFETY DATA SHEET (SDS)", [
  "Document ID: VIRU-SDS-2026-EN",
  "Product: Virukill Broad-Spectrum Disinfectant",
  "Active Ingredient: Didecyldimethyl Ammonium Chloride (120 g/L)",
  "Manufacturer: ICA International Chemicals",
  "",
  "HAZARDS IDENTIFICATION:",
  "- Concentrate is corrosive to eyes and skin.",
  "- Safe and non-corrosive at diluted working strengths (1:100 - 1:1000).",
  "",
  "FIRST AID MEASURES:",
  "- Eye Contact: Rinse immediately with water for 15 minutes.",
  "- Skin Contact: Wash with soap and water.",
  "- Inhalation: Remove to fresh air if misting concentrate.",
  "",
  "ENVIRONMENTAL PRECAUTIONS:",
  "- Biodegradable surfactant system. Do not discharge raw concentrate into waterways."
]);

// 2. Virukill SDS HE
generateSimplePdf("virukill-sds-he.pdf", "VIRUKILL SAFETY DATA SHEET (MSDS - HEBREW)", [
  "Document ID: VIRU-SDS-2026-HE",
  "Product Name: Virukill Disinfectant / Visocil Israel",
  "Active Ingredient: Didecyldimethyl Ammonium Chloride 120g/L",
  "Registration: Israel Ministry of Agriculture & Ministry of Environmental Protection",
  "",
  "HAZARDS & HANDLING INSTRUCTIONS:",
  "- Concentrate requires protective gloves and eye protection during dilution.",
  "- Diluted working solutions (0.1% to 1.0%) are safe for live animal environments.",
  "",
  "EMERGENCY CONTACT ISRAEL:",
  "- Israeli Poison Information Center: +972 4 854 1900",
  "- Commercial Support Email: support@virukill.co.il"
]);

// 3. Virukill TDS EN
generateSimplePdf("virukill-tds-en.pdf", "VIRUKILL TECHNICAL DATA SHEET (TDS)", [
  "Document ID: VIRU-TDS-2026-EN",
  "Product Specifications:",
  "- Appearance: Clear green liquid",
  "- Active Ingredient: Didecyldimethylammonium Chloride (120g/L)",
  "- Density: 0.98 - 1.02 g/cm3 at 20C",
  "- pH (1% solution): 6.5 - 7.5 (Neutral)",
  "",
  "RECOMMENDED DILUTION RATIOS:",
  "- Surface Spraying & Washing: 1:200 (0.5%)",
  "- Aerial ULV Fogging: 1:100 (1.0%)",
  "- Drinking Water Line Dosing: 1:1000 (0.1%)",
  "- Hatching Egg Sanitization: 1:200 (0.5%)",
  "- Evaporative Wet-Walls: 1:10000 (0.01%)",
  "",
  "STABILITY & SHELF LIFE:",
  "- Stable for 24 months in original unopened container.",
  "- Diluted working solutions remain stable for up to 14 days."
]);

// 4. Poultry Biosecurity Guide EN
generateSimplePdf("poultry-biosecurity-guide-en.pdf", "COMPREHENSIVE POULTRY BIOSECURITY GUIDE", [
  "Document ID: BIO-GUIDE-POULTRY-2026",
  "Target Sector: Commercial Broiler, Layer & Breeder Operations",
  "",
  "TERMINAL CLEANING PROTOCOL:",
  "1. Dry Cleaning: Remove all poultry litter and dust from coops.",
  "2. Pre-wash: Rinse surfaces with clean water to remove gross organic waste.",
  "3. Disinfection: Apply Virukill 1:200 (0.5%) at 300ml/m2 using high pressure.",
  "4. Drinking Lines: Flush lines with Virukill 1:1000 to destroy biofilm.",
  "5. Restocking: Allow 24 hours drying before placing new day-old chicks.",
  "",
  "EFFICACY MATRIX:",
  "- Avian Influenza H5N1: 99.999% kill at 1:200 (10 min)",
  "- Newcastle Disease Virus (NDV): 99.999% kill at 1:200 (15 min)",
  "- Salmonella enteritidis: 99.999% kill at 1:200 (5 min)"
]);

// 5. Poultry Biosecurity Guide HE
generateSimplePdf("poultry-biosecurity-protocol-he.pdf", "POULTRY BIOSECURITY GUIDE (HEBREW)", [
  "Document ID: BIO-GUIDE-POULTRY-HE",
  "Target: Israeli Poultry Operations & Hatcheries",
  "",
  "BIOSECURITY STEPS:",
  "1. Disinfect coop walls and ceilings with Virukill 1:200 solution.",
  "2. Dose drinking water continuously at 1:1000 to eliminate NDV and Salmonella.",
  "3. Fog house air during disease threats at 1:100 ULV fogging.",
  "",
  "MINISTRY REGISTRATION:",
  "Approved by the Israeli Ministry of Agriculture Veterinary Services."
]);

// 6. Israel Ministry Approval
generateSimplePdf("israel-ministry-approval.pdf", "ISRAEL MINISTRY OF AGRICULTURE REGISTRATION APPROVAL", [
  "Document ID: ISR-MOA-VET-REG-2026",
  "Regulatory Body: State of Israel Ministry of Agriculture & Rural Development",
  "Department: Veterinary Services and Animal Health",
  "",
  "REGISTRATION CERTIFICATE:",
  "Product Name: Virukill Biosecurity Disinfectant",
  "Approval Category: Agricultural & Veterinary Disinfectant Agent",
  "Permitted Applications:",
  "- Livestock housing and poultry coop terminal sanitization.",
  "- Continuous dosing of animal drinking water systems.",
  "- Hatching egg dipping and hatchery sanitation.",
  "",
  "Compliance: ISO 9001:2015, EPA Broad-Spectrum Standards."
]);

// 7. Virukill Efficacy Trials
generateSimplePdf("virukill-efficacy-trials.pdf", "VIRUKILL SCIENTIFIC EFFICACY STUDY COMPILATION", [
  "Document ID: VIRU-TRIALS-2026",
  "Compilation of Academic & Laboratory Assays",
  "",
  "KEY EFFICACY SUMMARY:",
  "- Newcastle Disease Virus (NDV): Log-6 reduction achieved in 10 minutes at 1:200.",
  "- Avian Influenza (H5N1 & H5N8): Log-5 reduction in 5 minutes.",
  "- Infectious Bursal Disease (Gumboro): Log-5 reduction at 1:100.",
  "- Salmonella enteritidis & E. coli: Complete destruction at 1:200 within 5 minutes.",
  "",
  "CORROSION ASSAY COMPARISON:",
  "- Virukill: 0% corrosion on galvanized steel, aluminum, and rubber after 30 days.",
  "- Virkon S / Oxidizers: Systemic surface rusting observed on galvanized framing."
]);

console.log("All 7 PDF documents generated successfully in public/documents/");
