interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, subtitle, badge, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#D8E6DF] py-24 lg:py-28 text-navy-950 border-b border-navy-200">
      {/* Visual background accents - clean gradients, no blur circles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />
      {/* Small design accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-bio-500" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-rise">
          {badge && (
            <span className="text-bio-800 font-extrabold uppercase tracking-widest text-[20px] mb-4 block">
              {badge}
            </span>
          )}
          <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-navy-950 leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-navy-800 max-w-2xl">
            {subtitle}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
