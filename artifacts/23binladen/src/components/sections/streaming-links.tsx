import { motion } from 'framer-motion';
import { SiSpotify, SiApplemusic, SiYoutube, SiInstagram } from 'react-icons/si';
import { LINKS } from '@/data/artist';

const platforms = [
  {
    name: 'SPOTIFY',
    url: LINKS.spotify,
    icon: SiSpotify,
    color: 'hover:text-[#1DB954] hover:border-[#1DB954]',
  },
  {
    name: 'APPLE MUSIC',
    url: LINKS.appleMusic,
    icon: SiApplemusic,
    color: 'hover:text-[#FA243C] hover:border-[#FA243C]',
  },
  {
    name: 'YOUTUBE',
    url: LINKS.youtube,
    icon: SiYoutube,
    color: 'hover:text-[#FF0000] hover:border-[#FF0000]',
  },
  {
    name: 'INSTAGRAM',
    url: LINKS.instagram,
    icon: SiInstagram,
    color: 'hover:text-[#E1306C] hover:border-[#E1306C]',
  },
];

export const StreamingLinks = () => {
  return (
    <section className="relative w-full py-24 bg-[#0a0000] z-20 border-y border-primary/20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNDBoNDBWMHoiLz48L2c+PC9zdmc+')] pointer-events-none opacity-50" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-sans text-primary text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-4">
            // Follow the Movement
          </p>
          <h2 className="text-4xl md:text-6xl font-display text-white">
            <span className="glitch" data-text="CONNECT">CONNECT</span>
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
          {platforms.map((platform, idx) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-black border border-white/10 text-white/80 transition-all duration-300 ${platform.color} group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <platform.icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              <span className="font-display tracking-widest text-lg sm:text-xl relative z-10">{platform.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
