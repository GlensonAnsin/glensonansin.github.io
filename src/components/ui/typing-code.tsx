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

function lineLength(line: CodeLine): number {
  return line.reduce((sum, t) => sum + t.text.length, 0);
}

export function TypingCode({ lines, speed = 18, startDelay = 300, lineDelay = 120, className, onDone }: TypingCodeProps) {
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  // cumulative[i] = total characters typed by the start of line i; cumulative[lines.length] = total length.
  const cumulative = useMemo(() => {
    const result = [0];
    for (const line of lines) {
      result.push(result[result.length - 1] + lineLength(line));
    }
    return result;
  }, [lines]);

  const totalLength = cumulative[cumulative.length - 1];

  const [typedCount, setTypedCount] = useState(prefersReducedMotion ? totalLength : 0);
  const doneCalled = useRef(false);

  // Single linear timer chain — driven entirely by a local counter, not by
  // reading state back inside nested setState updaters (which stalls once
  // the per-line typing loop stops self-scheduling at a line boundary).
  useEffect(() => {
    if (prefersReducedMotion || totalLength === 0) return;

    let count = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const step = () => {
      count += 1;
      setTypedCount(count);
      if (count >= totalLength) return;

      const justFinishedLine = cumulative.includes(count);
      timeoutId = setTimeout(step, justFinishedLine ? speed + lineDelay : speed);
    };

    timeoutId = setTimeout(step, startDelay);
    return () => clearTimeout(timeoutId);
  }, [cumulative, totalLength, speed, startDelay, lineDelay, prefersReducedMotion]);

  useEffect(() => {
    if (typedCount >= totalLength && !doneCalled.current) {
      doneCalled.current = true;
      onDone?.();
    }
  }, [typedCount, totalLength, onDone]);

  return (
    <div className={cn('font-mono text-sm sm:text-[15px] leading-relaxed', className)}>
      {lines.map((line, i) => {
        const start = cumulative[i];
        const end = cumulative[i + 1];
        if (typedCount <= start && !prefersReducedMotion) return null;

        const isFullyTyped = prefersReducedMotion || typedCount >= end;
        const visibleTokens = isFullyTyped ? line : sliceTokens(line, typedCount - start);
        const isCurrentLine = !prefersReducedMotion && typedCount >= start && typedCount < end;
        const showCursor = isCurrentLine || (typedCount >= totalLength && i === lines.length - 1);

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
