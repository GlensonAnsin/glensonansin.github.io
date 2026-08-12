import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '../../utils/aceternity';

export type CodeToken = { text: string; tone?: 'keyword' | 'function' | 'string' | 'number' | 'type' | 'muted' };
export type CodeLine = CodeToken[];

interface TypingCodeProps {
  lines: CodeLine[];
  speed?: number;
  startDelay?: number;
  lineDelay?: number;
  className?: string;
  onDone?: () => void;
}

const toneClass: Record<NonNullable<CodeToken['tone']>, string> = {
  keyword: 'text-accent-keyword',
  function: 'text-accent-function',
  string: 'text-accent-string',
  number: 'text-accent-number',
  type: 'text-accent-type',
  muted: 'text-fg-subtle',
};

function sliceTokens(tokens: CodeToken[], count: number): CodeToken[] {
  const result: CodeToken[] = [];
  let remaining = count;
  for (const token of tokens) {
    if (remaining <= 0) break;
    if (token.text.length <= remaining) {
      result.push(token);
      remaining -= token.text.length;
    } else {
      result.push({ ...token, text: token.text.slice(0, remaining) });
      remaining = 0;
    }
  }
  return result;
}

export function TypingCode({ lines, speed = 18, startDelay = 300, lineDelay = 120, className, onDone }: TypingCodeProps) {
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const [lineIndex, setLineIndex] = useState(prefersReducedMotion ? lines.length : 0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(prefersReducedMotion);
  const doneCalled = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (!doneCalled.current) {
        doneCalled.current = true;
        onDone?.();
      }
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      setLineIndex((currentLine) => {
        if (currentLine >= lines.length) return currentLine;
        const lineLength = lines[currentLine].reduce((sum, t) => sum + t.text.length, 0);

        setCharIndex((currentChar) => {
          if (currentChar >= lineLength) return currentChar;
          timeoutId = setTimeout(tick, speed);
          return currentChar + 1;
        });

        return currentLine;
      });
    };

    const start = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || lineIndex >= lines.length) return;
    const lineLength = lines[lineIndex].reduce((sum, t) => sum + t.text.length, 0);
    if (charIndex < lineLength) return;

    const advance = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, lineDelay);
    return () => clearTimeout(advance);
  }, [charIndex, lineIndex, lineDelay, lines, prefersReducedMotion]);

  useEffect(() => {
    if (lineIndex >= lines.length && !doneCalled.current) {
      doneCalled.current = true;
      setDone(true);
      onDone?.();
    }
  }, [lineIndex, lines.length, onDone]);

  return (
    <div className={cn('font-mono text-sm sm:text-[15px] leading-relaxed', className)}>
      {lines.map((line, i) => {
        const isPast = i < lineIndex || prefersReducedMotion;
        const isCurrent = i === lineIndex && !prefersReducedMotion;
        if (!isPast && !isCurrent) return null;

        const visibleTokens = isPast ? line : sliceTokens(line, charIndex);
        const showCursor = isCurrent || (done && i === lines.length - 1);

        return (
          <div key={i} className="flex gap-4">
            <span className="select-none w-5 sm:w-6 shrink-0 text-right text-fg-subtle/60">{i + 1}</span>
            <span className="whitespace-pre-wrap break-words">
              {visibleTokens.map((token, j) => (
                <span key={j} className={token.tone ? toneClass[token.tone] : 'text-fg'}>
                  {token.text}
                </span>
              ))}
              {showCursor && <span className="inline-block w-[7px] h-[1em] -mb-[2px] bg-accent-type animate-blink" />}
            </span>
          </div>
        );
      })}
    </div>
  );
}
