import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { MUSIC_VIDEOS } from '@/data/artist';
import { useAudio } from '@/components/audio-provider';

export const MusicVideos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { suspendForVideo } = useAudio();

  const activateVideo = (id: string) => {
    suspendForVideo();
    setActiveVideo(id);
  };

  return (
    <section className="relative w-full py-24 bg-black/90 z-20 border-t border-primary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 border-l-4 border-primary pl-4 sm:pl-6"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white">
            <span className="glitch" data-text="VISUALS">VISUALS</span>
          </h2>
          <p className="font-sans text-primary mt-2 tracking-widest text-xs sm:text-sm uppercase">
            // Official Music Videos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MUSIC_VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 6) * 0.1 }}
              className="group relative cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              onClick={() => activateVideo(video.id)}
              role={activeVideo === video.id ? undefined : 'button'}
              tabIndex={activeVideo === video.id ? -1 : 0}
              aria-label={`Play video: ${video.title}`}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && activeVideo !== video.id) {
                  e.preventDefault();
                  activateVideo(video.id);
                }
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-black opacity-0 group-hover:opacity-60 blur-md transition duration-500" />
              <div className="relative bg-card border border-white/10 group-hover:border-primary/50 transition-colors p-2 flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden bg-black group-hover:scale-[0.98] transition-transform duration-500 ease-out">
                  {activeVideo === video.id ? (
                    <iframe
                      className="w-full h-full absolute inset-0"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&modestbranding=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img 
                        src={video.thumb} 
                        alt={video.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/90 flex items-center justify-center scale-90 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                          <Play className="w-5 h-5 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-3 sm:p-4 flex flex-col flex-grow bg-black/50 mt-2">
                  <h3 className="font-display text-lg sm:text-xl text-white group-hover:text-primary transition-colors tracking-wide line-clamp-2 leading-tight">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
