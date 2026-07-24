import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { BG_SONG } from '@/data/artist';

interface AudioContextType {
  isBgMuted: boolean;
  toggleBgMute: () => void;
  playBgAudio: () => void;
  activePreview: string | null;
  playPreview: (src: string) => void;
  stopPreview: () => void;
  suspendForVideo: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBgMuted, setIsBgMuted] = useState(false);
  const [activePreview, setActivePreview] = useState<string | null>(null);
  
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const previewAudioRef = useRef<HTMLAudioElement | null>(null);
  const isBgMutedRef = useRef(isBgMuted);
  const bgSuspendedRef = useRef(false);

  useEffect(() => {
    // Setup Background Audio
    bgAudioRef.current = new Audio(BG_SONG.src);
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 0.5;

    // Setup Preview Audio
    previewAudioRef.current = new Audio();
    previewAudioRef.current.volume = 0.8;

    previewAudioRef.current.addEventListener('ended', () => {
      setActivePreview(null);
      if (bgAudioRef.current && !isBgMutedRef.current && !bgSuspendedRef.current) {
        bgAudioRef.current.play().catch(console.error);
      }
    });

    return () => {
      bgAudioRef.current?.pause();
      previewAudioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    isBgMutedRef.current = isBgMuted;
    if (bgAudioRef.current) {
      bgAudioRef.current.muted = isBgMuted;
    }
  }, [isBgMuted]);

  const playBgAudio = () => {
    if (bgAudioRef.current && !activePreview && !isBgMuted && !bgSuspendedRef.current) {
      bgAudioRef.current.play().catch(console.error);
    }
  };

  const toggleBgMute = () => {
    setIsBgMuted(prev => {
      const next = !prev;
      if (!next) bgSuspendedRef.current = false;
      if (!next && bgAudioRef.current && !activePreview) {
        bgAudioRef.current.play().catch(console.error);
      }
      return next;
    });
  };

  // Pause everything when an embedded video starts, so audio never overlaps
  const suspendForVideo = () => {
    bgSuspendedRef.current = true;
    bgAudioRef.current?.pause();
    if (previewAudioRef.current) {
      previewAudioRef.current.pause();
      setActivePreview(null);
    }
  };

  const playPreview = (src: string) => {
    if (!previewAudioRef.current) return;

    if (activePreview === src) {
      // Toggle play/pause
      if (previewAudioRef.current.paused) {
        previewAudioRef.current.play();
        bgAudioRef.current?.pause();
      } else {
        previewAudioRef.current.pause();
        setActivePreview(null);
        if (!isBgMuted && !bgSuspendedRef.current) bgAudioRef.current?.play().catch(console.error);
      }
      return;
    }

    // Play new preview
    previewAudioRef.current.src = src;
    previewAudioRef.current.play().catch(console.error);
    setActivePreview(src);
    bgAudioRef.current?.pause();
  };

  const stopPreview = () => {
    if (previewAudioRef.current) {
      previewAudioRef.current.pause();
      setActivePreview(null);
      if (!isBgMuted && !bgSuspendedRef.current) bgAudioRef.current?.play().catch(console.error);
    }
  };

  return (
    <AudioContext.Provider value={{ isBgMuted, toggleBgMute, playBgAudio, activePreview, playPreview, stopPreview, suspendForVideo }}>
      {children}
    </AudioContext.Provider>
  );
};
