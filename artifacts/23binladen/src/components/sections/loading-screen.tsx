import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Phase 0: Show "23" with static
      await new Promise((r) => setTimeout(r, 1200));
      // Phase 1: Explosion & BINLADEN reveal
      setPhase(1);
      await new Promise((r) => setTimeout(r, 1800));
      // Phase 2: Fade out
      setPhase(2);
      setTimeout(onComplete, 500); // Allow time for exit animation
    };
    sequence();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Scanlines internal for loading */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {phase === 0 && (
                <motion.h1
                  key="23"
                  className="text-8xl md:text-[12rem] font-display text-white tracking-tighter"
                  initial={{ opacity: 0, filter: "blur(20px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="glitch" data-text="23">23</span>
                </motion.h1>
              )}

              {phase === 1 && (
                <motion.div
                  key="explosion"
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                >
                  {/* Explosion Ring */}
                  <motion.div
                    className="absolute inset-0 border border-primary rounded-full mix-blend-screen"
                    initial={{ width: 0, height: 0, opacity: 1 }}
                    animate={{ width: "200vw", height: "200vw", opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  
                  <h1 className="text-6xl md:text-[8rem] font-display text-primary tracking-tighter uppercase whitespace-nowrap">
                    <span className="glitch" data-text="BINLADEN">BINLADEN</span>
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
