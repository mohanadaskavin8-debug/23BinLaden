import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '@/components/audio-provider';
import { PHOTOS } from '@/data/artist';

export const Hero = () => {
  const { isBgMuted, toggleBgMute } = useAudio();

  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Layer */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img 
          src={PHOTOS.ytAvatar} 
          alt="23 Binladen" 
          className="w-full h-full object-cover object-top grayscale contrast-[1.5]"
        />
        {/* Red tint gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center flex flex-col items-center w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-[12vw] sm:text-8xl md:text-[10vw] leading-none font-display text-white uppercase flex flex-col items-center">
            <span className="block glitch text-primary mb-[-2vw] sm:mb-[-1rem] drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]" data-text="23">23</span>
            <span className="block glitch" data-text="BINLADEN">BINLADEN</span>
          </h1>
          
          <p className="mt-8 text-white/70 font-sans tracking-[0.2em] sm:tracking-[0.4em] text-xs sm:text-sm uppercase max-w-lg mx-auto leading-relaxed">
            TORONTO // ARTIST
          </p>
        </motion.div>
      </div>

      {/* Audio Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleBgMute}
        className="absolute bottom-8 sm:bottom-12 right-6 sm:right-8 z-30 flex items-center gap-3 bg-black/50 border border-primary/30 px-3 sm:px-4 py-2 backdrop-blur-md hover:border-primary hover:bg-primary/20 transition-all group"
      >
        <div className="flex gap-[2px] sm:gap-1 h-3 sm:h-4 items-end">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-primary"
              animate={isBgMuted ? { height: '20%' } : {
                height: ['20%', '100%', '40%', '80%', '20%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        <span className="font-sans text-[10px] sm:text-xs tracking-widest text-white/80 group-hover:text-white transition-colors">
          {isBgMuted ? 'UNMUTE' : 'MUTE'}
        </span>
        {isBgMuted ? <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 text-primary" /> : <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />}
      </motion.button>
      
      {/* Visual Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-sans text-[8px] sm:text-[10px] tracking-widest text-primary/70 uppercase">Scroll</span>
        <motion.div 
          className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-primary/70 to-transparent"
          animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
