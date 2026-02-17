import { useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

export function SmoothCursor() {
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const trailConfig = { damping: 20, stiffness: 150, mass: 0.8 };

  const dotX = useSpring(0, springConfig);
  const dotY = useSpring(0, springConfig);
  const ringX = useSpring(0, trailConfig);
  const ringY = useSpring(0, trailConfig);
  const ringScale = useSpring(1, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const onMouseDown = () => ringScale.set(0.75);
    const onMouseUp = () => ringScale.set(1);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')
      ) {
        ringScale.set(1.6);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')
      ) {
        ringScale.set(1);
      }
    };

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, [dotX, dotY, ringX, ringY, ringScale]);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: dotX,
          top: dotY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9999,
          pointerEvents: 'none',
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#818cf8',
          boxShadow: '0 0 12px 2px rgba(129, 140, 248, 0.6), 0 0 30px 6px rgba(99, 102, 241, 0.3)',
        }}
      />

      {/* Trailing ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: ringX,
          top: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: ringScale,
          zIndex: 9998,
          pointerEvents: 'none',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(129, 140, 248, 0.4)',
          backgroundColor: 'rgba(99, 102, 241, 0.05)',
          willChange: 'transform',
          transition: 'border-color 0.3s, background-color 0.3s',
        }}
      />
    </>
  );
}
