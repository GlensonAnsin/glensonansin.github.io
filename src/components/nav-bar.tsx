import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const TABS = [
  { id: 'home', label: 'hero.ts', href: '#home' },
  { id: 'about', label: 'About.tsx', href: '#about' },
  { id: 'tech-stack', label: 'Skills.json', href: '#tech-stack' },
  { id: 'projects', label: 'Projects.tsx', href: '#projects' },
  { id: 'contact', label: 'Contact.ts', href: '#contact' },
];

export function NavBar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ids = TABS.map((t) => t.id);
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg-elevated/85 backdrop-blur-xl">
      <div className="h-14 max-w-6xl mx-auto px-3 sm:px-6 flex items-center gap-2 sm:gap-4">
        <a href="#home" className="shrink-0 font-mono font-bold text-sm sm:text-base tracking-tight" aria-label="Home">
          <span className="text-accent-keyword">&lt;</span>
          <span className="text-fg">GA</span>
          <span className="text-accent-keyword">/&gt;</span>
        </a>

        <div className="h-6 w-px bg-border shrink-0 hidden sm:block" />

        {/* Desktop: full tab strip */}
        <div className="flex-1 min-w-0 hidden sm:flex items-center gap-1">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <a
                key={tab.id}
                href={tab.href}
                className={`relative shrink-0 px-3 py-1.5 rounded-md font-mono text-sm whitespace-nowrap transition-colors duration-200 ${
                  isActive ? 'text-fg' : 'text-fg-muted hover:text-fg hover:bg-surface-hover'
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute left-2 right-2 -bottom-[1px] h-[2px] bg-accent-type rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile: current tab label, menu opens the full list */}
        <div className="flex-1 min-w-0 sm:hidden">
          <span className="font-mono text-sm text-fg-muted truncate">
            {TABS.find((t) => t.id === active)?.label ?? TABS[0].label}
          </span>
        </div>

        <div className="h-6 w-px bg-border shrink-0 hidden sm:block" />

        <a
          href="/Ansin_Glenson_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-mono text-fg-muted hover:text-fg hover:border-border-strong transition-colors duration-200"
        >
          <Download size={13} />
          resume.pdf
        </a>

        <ThemeToggle className="shrink-0" />

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="sm:hidden shrink-0 w-9 h-9 rounded-md flex items-center justify-center text-fg-muted hover:text-fg hover:bg-surface-hover transition-colors duration-200"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden overflow-hidden border-t border-border bg-bg-elevated"
          >
            <div className="px-3 py-2 flex flex-col">
              {TABS.map((tab) => {
                const isActive = active === tab.id;
                return (
                  <a
                    key={tab.id}
                    href={tab.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-md font-mono text-sm transition-colors duration-200 ${
                      isActive ? 'text-fg bg-surface-hover' : 'text-fg-muted hover:text-fg hover:bg-surface-hover'
                    }`}
                  >
                    {tab.label}
                  </a>
                );
              })}
              <a
                href="/Ansin_Glenson_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-1 inline-flex items-center gap-1.5 px-3 py-2.5 rounded-md border border-border text-sm font-mono text-fg-muted hover:text-fg hover:border-border-strong transition-colors duration-200"
              >
                <Download size={14} />
                resume.pdf
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
