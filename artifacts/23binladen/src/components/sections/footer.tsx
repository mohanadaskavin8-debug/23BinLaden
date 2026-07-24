export const Footer = () => {
  return (
    <footer className="w-full bg-black py-12 border-t border-primary/20 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-display text-primary tracking-widest drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
            23 BINLADEN
          </h2>
          <p className="font-sans text-muted-foreground text-xs uppercase tracking-widest mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        
        <div className="text-center md:text-right font-sans text-[10px] text-muted-foreground/50 tracking-widest uppercase flex flex-col gap-1">
          <p>System Status: Online</p>
          <p>Location: Classified</p>
          <p>Threat Level: Maximum</p>
        </div>
      </div>
    </footer>
  );
};
