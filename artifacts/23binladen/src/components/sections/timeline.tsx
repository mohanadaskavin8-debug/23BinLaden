import { motion } from 'framer-motion';
import { TIMELINE } from '@/data/artist';

export const Timeline = () => {
  return (
    <section className="relative w-full py-24 bg-black z-20 border-t border-primary/20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white">
            <span className="glitch" data-text="THE JOURNEY">THE JOURNEY</span>
          </h2>
          <p className="font-sans text-primary mt-4 tracking-widest text-xs sm:text-sm uppercase">
            // Releases by Year
          </p>
        </motion.div>

        <div className="relative ml-4 md:ml-0">
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 w-px bg-primary/30 pointer-events-none" aria-hidden="true" />
          {TIMELINE.map((yearGroup, idx) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mb-16 sm:mb-24 md:grid md:grid-cols-2 group"
            >
              {/* Pulse Dot */}
              <div className="absolute left-[-5px] md:left-1/2 top-0 md:-translate-x-1/2 w-3 h-3 bg-black border-2 border-primary rounded-full group-hover:bg-primary transition-colors z-10 shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
              
              <div className={`relative ml-8 md:ml-0 px-4 sm:px-8 ${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                {/* Large Year Number */}
                <div className={`text-6xl sm:text-8xl font-display text-white/5 tracking-tighter absolute top-0 ${
                  idx % 2 === 0 ? 'md:right-8 left-8 md:left-auto' : 'left-8'
                } -translate-y-6 sm:-translate-y-10 group-hover:text-primary/10 transition-colors pointer-events-none`}>
                  {yearGroup.year}
                </div>

                <div className={`relative flex flex-col gap-4 ${idx % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} pt-4`}>
                  
                  {/* Highlights or Grid of Covers for that year */}
                  <div className={`flex flex-wrap gap-2 sm:gap-3 ${idx % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'}`}>
                    {yearGroup.releases.slice(0, 5).map((release, rIdx) => (
                      <motion.a
                        href={release.appleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={release.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, zIndex: 20 }}
                        viewport={{ once: true }}
                        transition={{ delay: rIdx * 0.1 }}
                        className={`relative block ${
                          release.kind === 'Album' || release.kind === 'EP' 
                            ? 'w-20 h-20 sm:w-28 sm:h-28 border-2 border-primary shadow-[0_0_15px_rgba(255,0,0,0.3)]' 
                            : 'w-12 h-12 sm:w-16 sm:h-16 border border-white/20'
                        }`}
                        title={release.title}
                      >
                        <img 
                          src={release.cover} 
                          alt={release.title} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          loading="lazy"
                        />
                      </motion.a>
                    ))}
                    {yearGroup.releases.length > 5 && (
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border border-white/10 bg-white/5 font-sans text-xs text-white/50">
                        +{yearGroup.releases.length - 5}
                      </div>
                    )}
                  </div>
                  
                  {/* Text Summary */}
                  <div className="mt-4">
                    <span className="font-sans text-primary font-bold text-lg sm:text-xl tracking-widest bg-black/50 px-2 py-1 inline-block mb-3">
                      <span className={yearGroup.year === 2026 ? "bg-primary text-black px-2" : ""}>
                        {yearGroup.year}
                      </span>
                    </span>
                    <p className="font-sans text-muted-foreground text-xs sm:text-sm uppercase leading-relaxed max-w-sm">
                      {yearGroup.releases.length} Release{yearGroup.releases.length > 1 ? 's' : ''} including{' '}
                      <span className="text-white/80">{yearGroup.releases[0].title}</span>
                      {yearGroup.releases[1] && <span className="text-white/50"> and {yearGroup.releases[1].title}</span>}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
