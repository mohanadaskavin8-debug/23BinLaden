import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHOTOS } from '@/data/artist';

interface LoadingScreenProps {
  onComplete: () => void;
  onEnter: () => void;
}

export const LoadingScreen = ({ onComplete, onEnter }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Phase 0: Show "23" with static
      await new Promise((r) => setTimeout(r, 1200));
      // Phase 1: Explosion & BINLADEN reveal
      setPhase(1);
      await new Promise((r) => setTimeout(r, 1500));
      // Phase 2: Enter Button & Photo reveal
      setPhase(2);
    };
    sequence();
  }, []);

  const handleEnter = () => {
    onEnter();
    setPhase(3); // Exit phase
    setTimeout(onComplete, 800);
  };

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Scanlines internal for loading */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-20" />
          
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            {phase >= 2 && (
              <motion.div 
                className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <img src={PHOTOS.ytBanner} alt="" className="w-full h-full object-cover object-center grayscale contrast-200" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply" />
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {phase === 0 && (
                <motion.h1
                  key="23"
                  className="text-8xl md:text-[12rem] font-display text-white tracking-tighter relative z-30"
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
                  className="relative flex items-center justify-center z-30"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -50 }}
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

              {phase === 2 && (
                <motion.div
                  key="enter"
                  className="relative z-30 flex flex-col items-center gap-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h1 className="text-5xl md:text-7xl font-display text-white tracking-tighter uppercase whitespace-nowrap text-center drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                    <span className="block glitch text-primary mb-[-1vw]" data-text="23">23</span>
                    <span className="block glitch" data-text="BINLADEN">BINLADEN</span>
                  </h1>

                  <motion.button
                    onClick={handleEnter}
                    className="group relative px-10 sm:px-14 py-4 bg-black/80 border border-primary/50 text-white font-display text-xl sm:text-2xl tracking-[0.25em] overflow-hidden transition-colors hover:border-primary active:scale-95"
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(255,0,0,0)',
                        '0 0 25px rgba(255,0,0,0.6)',
                        '0 0 0px rgba(255,0,0,0)',
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                  >
                    <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex group-hover:text-black transition-colors duration-300">
                      {'TAP TO ENTER'.split('').map((ch, i) => (
                        <motion.span
                          key={i}
                          className={ch === ' ' ? 'w-3' : ''}
                          animate={{ opacity: [1, 0.25, 1] }}
                          transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.08, ease: 'easeInOut' }}
                        >
                          {ch === ' ' ? '\u00A0' : ch}
                        </motion.span>
                      ))}
                    </span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
