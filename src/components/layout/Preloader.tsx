import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Preloader({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.floor(Math.random() * 14) + 4));
    }, 110);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <Logo className="text-3xl md:text-5xl" />
          <span className="absolute bottom-10 right-10 font-display text-6xl font-extrabold tabular-nums tracking-[-0.04em] text-foreground/90 md:text-8xl">
            {progress.toString().padStart(3, '0')}
            <span className="text-primary">%</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
