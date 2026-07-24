import { motion } from 'framer-motion';
import { DISCOGRAPHY } from '@/data/artist';
import { LINKS } from '@/data/artist';

export const Discography = () => {
  return (
    <section className="relative w-full py-24 bg-[#050000] z-20 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 border-l-4 border-primary pl-4 sm:pl-6"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white">
            <span className="glitch" data-text="DISCOGRAPHY">DISCOGRAPHY</span>
          </h2>
          <p className="font-sans text-primary mt-2 tracking-widest text-xs sm:text-sm uppercase">
            // Full Catalog
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {DISCOGRAPHY.map((release, idx) => {
            const isMajor = release.kind === 'Album' || release.kind === 'EP';

            return (
              <motion.a
                href={release.appleUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={release.title + release.date}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (idx % 5) * 0.1 }}
                className={`group relative block cursor-pointer ${
                  isMajor ? 'col-span-2 row-span-2' : 'col-span-1'
                }`}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-black opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />
                <div className="relative bg-black border border-white/5 group-hover:border-primary/50 transition-colors h-full flex flex-col p-2 sm:p-3">
                  
                  {/* Cover Art */}
                  <div className="relative aspect-square w-full overflow-hidden bg-black/50 mb-3">
                    <img 
                      src={release.cover} 
                      alt={release.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 sm:gap-4 p-2 sm:p-4 text-center">
                      <span className="bg-primary text-black font-display px-3 py-1 text-xs sm:text-sm uppercase tracking-widest">
                        Listen
                      </span>
                      {release.tracks && (
                        <span className="font-sans text-[10px] sm:text-xs text-white/80 uppercase tracking-widest border border-white/20 px-2 py-1">
                          {release.tracks} Tracks
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-grow flex flex-col justify-between">
                    <h3 className={`font-display tracking-wide uppercase line-clamp-2 transition-colors ${
                      isMajor ? 'text-lg sm:text-2xl text-primary' : 'text-sm sm:text-base text-white group-hover:text-primary'
                    }`}>
                      {release.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2">
                      <span className="font-sans text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest">
                        {release.year}
                      </span>
                      <span className={`font-sans text-[9px] sm:text-[10px] uppercase tracking-widest px-1.5 py-0.5 ${
                        isMajor ? 'bg-primary/20 text-primary border border-primary/30' : 'text-white/40 border border-white/10'
                      }`}>
                        {release.kind}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
