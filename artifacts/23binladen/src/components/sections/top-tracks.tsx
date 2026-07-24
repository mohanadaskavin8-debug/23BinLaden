import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { TOP_TRACKS, TopTrack } from '@/data/artist';
import { useAudio } from '@/components/audio-provider';

export const TopTracks = () => {
  const { activePreview, playPreview } = useAudio();

  return (
    <section className="relative w-full py-24 bg-[#050000] z-20 border-t border-primary/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-l-4 border-primary pl-4 sm:pl-6"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white">
            <span className="glitch" data-text="TOP TRACKS">TOP TRACKS</span>
          </h2>
          <p className="font-sans text-primary mt-2 tracking-widest text-xs sm:text-sm uppercase">
            // Most Streamed
          </p>
        </motion.div>

        <div className="flex flex-col gap-2">
          {TOP_TRACKS.map((track, idx) => {
            const isPlaying = activePreview === track.preview;

            return (
              <motion.div
                key={track.rank}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => playPreview(track.preview)}
                role="button"
                tabIndex={0}
                aria-pressed={isPlaying}
                aria-label={`${isPlaying ? 'Pause' : 'Play'} preview: ${track.title} by ${track.artists}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    playPreview(track.preview);
                  }
                }}
                className={`group relative flex items-center gap-4 sm:gap-6 p-3 sm:p-4 transition-all duration-300 cursor-none sm:cursor-pointer border focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                  isPlaying 
                    ? 'bg-primary/10 border-primary shadow-[0_0_15px_rgba(255,0,0,0.2)]' 
                    : 'bg-black/40 border-white/5 hover:bg-black/80 hover:border-primary/50'
                }`}
              >
                {/* Rank */}
                <div className="w-6 sm:w-8 text-center font-display text-lg sm:text-2xl text-white/40 group-hover:text-primary transition-colors">
                  {track.rank}
                </div>

                {/* Cover Art with Play Button */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0 overflow-hidden bg-black/50 border border-white/10 group-hover:border-primary transition-colors">
                  <img 
                    src={track.cover} 
                    alt={track.title} 
                    className={`w-full h-full object-cover transition-all duration-500 ${isPlaying ? 'scale-110' : 'group-hover:scale-110'}`} 
                  />
                  <div className={`absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-primary" fill="currentColor" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    )}
                  </div>
                </div>

                {/* Track Info */}
                <div className="flex-grow min-w-0">
                  <h3 className={`font-display text-lg sm:text-xl tracking-wide truncate transition-colors ${isPlaying ? 'text-primary' : 'text-white group-hover:text-white'}`}>
                    {track.title}
                  </h3>
                  <p className="font-sans text-[10px] sm:text-xs text-white/50 truncate uppercase tracking-wider">
                    {track.artists}
                  </p>
                </div>

                {/* Animated Eq & Year */}
                <div className="flex items-center gap-4 sm:gap-6 shrink-0 pr-2">
                  {isPlaying ? (
                    <div className="flex gap-1 h-4 sm:h-6 items-end">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1 sm:w-1.5 bg-primary"
                          animate={{ height: ['20%', '100%', '30%', '80%', '20%'] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="hidden sm:block font-sans text-xs text-white/30 tracking-widest">
                      {track.year}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
