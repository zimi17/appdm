'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Download, Share2 } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface PodcastPlayerProps {
  title?: string;
  description?: string;
  audioSrc: string;
  episodeTitle?: string;
  episodeDescription?: string;
  duration?: number;
  showControls?: boolean;
  showDownload?: boolean;
  showShare?: boolean;
  autoplay?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function PodcastPlayer({
  title,
  description,
  audioSrc,
  episodeTitle,
  episodeDescription,
  duration: initialDuration,
  showControls = true,
  showDownload = true,
  showShare = true,
  autoplay = false,
  theme = 'default',
  className
}: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(initialDuration || 0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadstart', handleLoadStart);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const skipBackward = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Math.max(0, audio.currentTime - 10);
  };

  const skipForward = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = audioSrc;
    link.download = episodeTitle || 'podcast-episode';
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: episodeTitle || 'Podcast Episode',
          text: episodeDescription || '',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.section 
      className={cn(
        "py-16 md:py-24",
        themeClasses[theme],
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full">
          {title && (
            <ComponentHeader 
              title={title} 
              description={description}
              className="mb-12"
            />
          )}

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-card border border-border rounded-lg p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Episode Info */}
              {episodeTitle && (
                <div className="mb-6">
                  <h3 className="font-headline text-xl font-semibold mb-2">
                    {episodeTitle}
                  </h3>
                  {episodeDescription && (
                    <p className="text-muted-foreground">
                      {episodeDescription}
                    </p>
                  )}
                </div>
              )}

              {/* Audio Element */}
              <audio
                ref={audioRef}
                src={audioSrc}
                preload="metadata"
                autoPlay={autoplay}
                className="hidden"
              />

              {/* Player Controls */}
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${(currentTime / duration) * 100}%, hsl(var(--muted)) ${(currentTime / duration) * 100}%, hsl(var(--muted)) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Main Controls */}
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={skipBackward}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                    aria-label="Skip backward 10 seconds"
                  >
                    <SkipBack className="w-6 h-6" />
                  </button>

                  <button
                    onClick={togglePlayPause}
                    disabled={isLoading}
                    className="p-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6 ml-1" />
                    )}
                  </button>

                  <button
                    onClick={skipForward}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                    aria-label="Skip forward 10 seconds"
                  >
                    <SkipForward className="w-6 h-6" />
                  </button>
                </div>

                {/* Volume and Additional Controls */}
                <div className="flex items-center justify-between">
                  {/* Volume Control */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Additional Controls */}
                  <div className="flex items-center space-x-2">
                    {showDownload && (
                      <button
                        onClick={handleDownload}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Download episode"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                    )}
                    {showShare && (
                      <button
                        onClick={handleShare}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Share episode"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
