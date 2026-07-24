import { LINKS } from '@/data/artist';

export const Footer = () => {
  return (
    <footer className="w-full bg-black py-12 border-t border-primary/20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl font-display text-primary tracking-widest drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
            23 BINLADEN
          </h2>
          <p className="font-sans text-muted-foreground text-[10px] sm:text-xs uppercase tracking-widest mt-2">
            © {new Date().getFullYear()} OFFICIAL
          </p>
        </div>
        
        <div className="font-sans text-[9px] sm:text-[10px] text-muted-foreground/50 tracking-widest uppercase flex flex-col gap-1 md:text-right">
          <p>Toronto, ON</p>
          <div className="flex gap-4 justify-center md:justify-end mt-2 md:mt-1">
            <a href={LINKS.spotify} className="hover:text-primary transition-colors">Spotify</a>
            <a href={LINKS.appleMusic} className="hover:text-primary transition-colors">Apple</a>
            <a href={LINKS.youtube} className="hover:text-primary transition-colors">YouTube</a>
            <a href={LINKS.instagram} className="hover:text-primary transition-colors">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
