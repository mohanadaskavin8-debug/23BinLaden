import { motion } from 'framer-motion';

const videos = [
  { id: '6j_Odz-OfM4', title: 'CODE: RED', date: '2023-11-04' },
  { id: 'Q5o1s9lE2zU', title: 'OPERATION: SHADOW', date: '2023-08-12' }, // Mock/Secondary ID
  { id: 'w3zV4lqX9tA', title: 'PROTOCOL: ZERO', date: '2024-01-22' },    // Mock/Secondary ID
];

export const MusicVideos = () => {
  return (
    <section className="relative w-full min-h-screen py-24 bg-black/90 z-20 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-primary pl-6"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white">
            <span className="glitch" data-text="VISUAL INTEL">VISUAL INTEL</span>
          </h2>
          <p className="font-sans text-primary mt-2 tracking-widest text-sm uppercase">
            // Authorized Personnel Only
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-black opacity-20 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative bg-card border border-primary/20 p-2 flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?controls=1&modestbranding=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow bg-black/50 mt-2">
                  <div className="flex justify-between items-start mb-4 border-b border-primary/30 pb-2">
                    <h3 className="font-display text-xl text-white group-hover:text-primary transition-colors tracking-wide">
                      {video.title}
                    </h3>
                    <span className="font-sans text-xs text-muted-foreground bg-primary/10 px-2 py-1">
                      {video.date}
                    </span>
                  </div>
                  <div className="mt-auto flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-sans text-[10px] tracking-widest text-primary/70">
                      STATUS: VERIFIED
                    </span>
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
