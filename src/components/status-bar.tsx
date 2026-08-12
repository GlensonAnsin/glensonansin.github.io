import { GitBranch, CheckCircle2, MapPin, Mail, Linkedin, Facebook, Github } from 'lucide-react';

const SOCIALS = [
  { label: 'Email', href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox', icon: Mail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/glenson-ansin-8862752b3/', icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/glenson.ansin', icon: Facebook },
  { label: 'GitHub', href: 'https://github.com/glensonansin', icon: Github },
];

export function StatusBar() {
  return (
    <footer className="relative border-t border-border bg-bg-elevated">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-fg-muted">
          <span className="inline-flex items-center gap-1.5">
            <GitBranch size={13} className="text-accent-function" />
            main
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-accent-string" />
            build passing
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-accent-type" />
            Cagayan de Oro, PH
          </span>
        </div>

        <div className="flex items-center gap-1">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-7 h-7 rounded-md flex items-center justify-center text-fg-subtle hover:text-accent-type hover:bg-surface-hover transition-colors duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border px-4 sm:px-6 py-3 text-center font-mono text-[11px] text-fg-subtle">
        © {new Date().getFullYear()} Glenson Ansin — built with React, Vite &amp; Tailwind CSS
      </div>
    </footer>
  );
}
