import { AnimatePresence, motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/use-theme-hook';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className={`relative shrink-0 inline-flex items-center w-[3.25rem] h-7 rounded-full border border-border bg-bg-inset transition-colors duration-300 hover:border-border-strong ${className}`}
    >
      <motion.span
        className="absolute top-[3px] left-[3px] w-5 h-5 rounded-full bg-surface border border-border-strong flex items-center justify-center shadow-sm"
        animate={{ x: isDark ? 0 : 24 }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -60 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 60 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <Moon size={12} className="text-accent-type" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: -60 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 60 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <Sun size={12} className="text-accent-number" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  );
}
