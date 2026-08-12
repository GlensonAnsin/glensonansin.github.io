import { ScrollReveal } from './ui/scroll-reveal';

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <ScrollReveal>
      <div className="text-center">
        <h3 className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg">
          <span className="text-fg-subtle">// </span>
          {title}
        </h3>
        {description && <p className="mt-4 text-fg-muted max-w-lg mx-auto leading-relaxed">{description}</p>}
      </div>
    </ScrollReveal>
  );
}
