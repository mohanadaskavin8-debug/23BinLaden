import { useState } from 'react';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { ParticleBackground } from '@/components/ui/particle-background';
import { LoadingScreen } from '@/components/sections/loading-screen';
import { Hero } from '@/components/sections/hero';
import { MusicVideos } from '@/components/sections/music-videos';
import { Timeline } from '@/components/sections/timeline';
import { StreamingLinks } from '@/components/sections/streaming-links';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {/* Background Effects visible after loading starts but persistent */}
      <div className="scanlines" />
      <div className="noise-overlay" />
      <ParticleBackground />

      <main className={`relative z-20 transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Hero />
        <MusicVideos />
        <Timeline />
        <StreamingLinks />
        <Footer />
      </main>
    </>
  );
}
