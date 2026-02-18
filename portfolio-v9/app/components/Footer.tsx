export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neon/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-sm neon-text tracking-widest">Au.dev</div>

        <p className="text-xs text-gray-600 tracking-wider text-center">
          © {new Date().getFullYear()} Au Amores · Built with Next.js & Tailwind CSS
        </p>

        <a
          href="#home"
          className="text-xs text-neon/60 hover:text-neon tracking-widest transition-colors duration-300 flex items-center gap-2 group"
        >
          BACK TO TOP
          <span className="group-hover:-translate-y-1 transition-transform duration-300 inline-block">↑</span>
        </a>
      </div>
    </footer>
  );
}
