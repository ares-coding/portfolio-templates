interface SectionWrapperProps {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, label, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative z-10 py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs text-neon tracking-[0.3em] font-mono">{label}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
}
