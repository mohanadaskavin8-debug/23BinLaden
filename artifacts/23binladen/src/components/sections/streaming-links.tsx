import { motion } from 'framer-motion';
import { SiSpotify, SiApplemusic, SiYoutube, SiInstagram } from 'react-icons/si';

const links = [
  {
    name: 'SPOTIFY',
    url: 'https://open.spotify.com/artist/4opjs7fSDObYx57qmLzGuu',
    icon: SiSpotify,
    color: 'hover:text-[#1DB954] hover:border-[#1DB954]',
  },
  {
    name: 'APPLE MUSIC',
    url: 'https://music.apple.com/us/artist/23-binladen/1549249490',
    icon: SiApplemusic,
    color: 'hover:text-[#FA243C] hover:border-[#FA243C]',
  },
  {
    name: 'YOUTUBE',
    url: 'https://www.youtube.com/@23binladenn/videos',
    icon: SiYoutube,
    color: 'hover:text-[#FF0000] hover:border-[#FF0000]',
  },
  {
    name: 'INSTAGRAM',
    url: 'https://www.instagram.com/real23binnymontana/',
    icon: SiInstagram,
    color: 'hover:text-[#E1306C] hover:border-[#E1306C]',
  },
];

export const StreamingLinks = () => {
  return (
    <section className="relative w-full py-24 bg-[#0a0000] z-20 border-y border-primary/20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNDBoNDBWMHoiLz48L2c+PC9zdmc+')] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-sans text-primary text-sm tracking-[0.5em] uppercase mb-4">
            [ Transmission Channels ]
          </p>
          <h2 className="text-4xl md:text-6xl font-display text-white">
            <span className="glitch" data-text="ESTABLISH LINK">ESTABLISH LINK</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {links.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-black border border-white/10 text-white/80 transition-all duration-300 ${link.color} group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <link.icon className="w-6 h-6 relative z-10" />
              <span className="font-display tracking-widest text-xl relative z-10">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
