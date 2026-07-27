const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const logoPath = path.join(__dirname, "..", "public", "logo.png");
const buffer = fs.readFileSync(logoPath);

// Parse PNG chunks
let offset = 8;
let width = 0;
let height = 0;
let bitDepth = 0;
let colorType = 0;
let idatChunks = [];
let beforeIdat = buffer.slice(0, 8);
let ihdrChunk = null;
let otherChunksBefore = [];
let otherChunksAfter = [];

offset = 8;
while (offset < buffer.length) {
  const length = buffer.readUInt32BE(offset);
  const type = buffer.toString("ascii", offset + 4, offset + 8);
  const totalChunkSize = 12 + length;
  const chunkData = buffer.slice(offset, offset + totalChunkSize);

  if (type === "IHDR") {
    width = buffer.readUInt32BE(offset + 8);
    height = buffer.readUInt32BE(offset + 12);
    bitDepth = buffer[offset + 16];
    colorType = buffer[offset + 17];
    ihdrChunk = chunkData;
  } else if (type === "IDAT") {
    idatChunks.push(buffer.slice(offset + 8, offset + 8 + length));
  } else if (type === "IEND") {
    otherChunksAfter.push(chunkData);
  } else {
    if (idatChunks.length === 0) {
      otherChunksBefore.push(chunkData);
    } else {
      otherChunksAfter.push(chunkData);
    }
  }
  
  offset += totalChunkSize;
}

const compressed = Buffer.concat(idatChunks);
const decompressed = zlib.inflateSync(compressed);

const bpp = 4;
const rowSize = width * bpp + 1;

let modifiedCount = 0;
for (let y = 0; y < height; y++) {
  const rowStart = y * rowSize;
  for (let x = 0; x < width; x++) {
    const px = rowStart + 1 + x * bpp;
    const r = decompressed[px];
    const g = decompressed[px + 1];
    const b = decompressed[px + 2];
    const a = decompressed[px + 3];

    // Detect red checkmark pixels (high R, lower G and B)
    if (a > 30 && r > 120 && g < 110 && b < 110) {
      decompressed[px] = 245;   // R = 245 (#F5)
      decompressed[px + 1] = 21; // G = 21 (#15)
      decompressed[px + 2] = 21; // B = 21 (#15)
      modifiedCount++;
    }
  }
}

console.log(`Modified ${modifiedCount} pixels to #F51515`);

// Re-compress IDAT
const newIdatData = zlib.deflateSync(decompressed, { level: 9 });

// CRC32 helper
function crc32(buf) {
  let c;
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(typeStr, dataBuf) {
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(dataBuf.length, 0);
  const typeBuf = Buffer.from(typeStr, "ascii");
  const typeAndData = Buffer.concat([typeBuf, dataBuf]);
  const crcVal = crc32(typeAndData);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcVal, 0);
  return Buffer.concat([lenBuf, typeAndData, crcBuf]);
}

const newIdatChunk = makeChunk("IDAT", newIdatData);
const iendChunk = makeChunk("IEND", Buffer.alloc(0));

const newPng = Buffer.concat([
  beforeIdat,
  ihdrChunk,
  ...otherChunksBefore,
  newIdatChunk,
  iendChunk
]);

fs.writeFileSync(logoPath, newPng);
console.log(`Successfully written recolored PNG (${newPng.length} bytes) to public/logo.png!`);
