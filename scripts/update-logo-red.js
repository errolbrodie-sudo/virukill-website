const fs = require("fs");
const path = require("path");

const logoPath = path.join(__dirname, "..", "public", "logo.png");
console.log("Logo file exists:", fs.existsSync(logoPath));
if (fs.existsSync(logoPath)) {
  const stat = fs.statSync(logoPath);
  console.log("Logo size bytes:", stat.size);
}
