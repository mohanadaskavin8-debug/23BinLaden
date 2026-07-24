import { useState } from 'react';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { ParticleBackground } from '@/components/ui/particle-background';
import { LoadingScreen } from '@/components/sections/loading-screen';
import { Hero } from '@/components/sections/hero';
import { TopTracks } from '@/components/sections/top-tracks';
import { MusicVideos } from '@/components/sections/music-videos';
import { Discography } from '@/components/sections/discography';
import { Timeline } from '@/components/sections/timeline';
import { StreamingLinks } from '@/components/sections/streaming-links';
import { Footer } from '@/components/sections/footer';
import { useAudio } from '@/components/audio-provider';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { playBgAudio } = useAudio();

  const handleEnter = () => {
    // Attempt play immediately on interaction
    playBgAudio();
  };

  return (
    <>
      <CustomCursor />
      
      {isLoading && <LoadingScreen onEnter={handleEnter} onComplete={() => setIsLoading(false)} />}
      
      {/* Background Effects visible after loading starts but persistent */}
      <div className="scanlines z-[15]" />
      <div className="noise-overlay z-[15]" />
      <ParticleBackground />

      <main className={`relative z-20 transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-[100dvh] overflow-hidden' : 'opacity-100'}`}>
        <Hero />
        <TopTracks />
        <MusicVideos />
        <Discography />
        <Timeline />
        <StreamingLinks />
        <Footer />
      </main>
    </>
  );
}
