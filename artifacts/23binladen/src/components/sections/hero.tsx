import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player('bg-player', {
        height: '0',
        width: '0',
        videoId: '6j_Odz-OfM4',
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: '6j_Odz-OfM4',
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
            setIsReady(true);
            setPlayer(event.target);
          },
        },
      });
    };

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Hidden Player */}
      <div id="bg-player" className="hidden" />

      {/* Main Content */}
      <div className="relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-7xl md:text-[12vw] leading-none font-display text-white uppercase flex flex-col items-center">
            <span className="block glitch text-primary mb-[-2vw]" data-text="23">23</span>
            <span className="block glitch" data-text="BINLADEN">BINLADEN</span>
          </h1>
          
          <p className="mt-6 text-muted-foreground font-sans tracking-[0.3em] text-sm uppercase">
            [ Operation: Classified ]
          </p>
        </motion.div>
      </div>

      {/* Audio Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={toggleMute}
        className="absolute bottom-12 right-8 z-30 flex items-center gap-3 bg-black/50 border border-primary/30 px-4 py-2 rounded-none backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-colors"
      >
        <div className="flex gap-1 h-4 items-end">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-primary"
              animate={isMuted ? { height: '20%' } : {
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
        <span className="font-sans text-xs tracking-widest text-white/80">
          {isMuted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}
        </span>
        {isMuted ? <VolumeX className="w-4 h-4 text-primary" /> : <Volume2 className="w-4 h-4 text-primary" />}
      </motion.button>
      
      {/* Visual Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="font-sans text-[10px] tracking-widest text-primary/70 uppercase">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-primary/70 to-transparent"
          animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
