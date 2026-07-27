import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      {/* SVG filter to map checkmark strictly to F51515 */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="logo-precise-filter" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                1.44 -0.96 -0.48 0 0
                0.12 -0.08 -0.04 0 0
                0.12 -0.08 -0.04 0 0
                0.0   0.0   0.0  1 0
              "
            />
          </filter>
        </defs>
      </svg>
      <Image
        src="/logo.png"
        alt="Virukill Logo"
        width={260}
        height={80}
        className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
        style={{ filter: "url(#logo-precise-filter)" }}
        priority
      />
    </Link>
  );
}
