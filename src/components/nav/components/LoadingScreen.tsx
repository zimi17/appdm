import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => {
              onComplete();
            }, 500);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-oxford-blue flex items-center justify-center transition-all duration-500 ${
      isAnimating ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="text-center">
        {/* Animated Logo */}
        <div className="animate-pulse mb-8">
          <Logo size="xl" variant="dark" />
        </div>
        
        {/* Institution Name */}
        <h1 className="text-title text-white font-merriweather mb-2">
          STIE Dwimulya
        </h1>
        <p className="text-body text-sky-blue font-montserrat mb-8">
          Sekolah Tinggi Ilmu Ekonomi
        </p>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-oxford-blue/30 rounded-full h-1 mb-4">
            <div 
              className="bg-brand-gold rounded-full h-1 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-caption text-sky-blue font-montserrat">
            Loading... {Math.round(progress)}%
          </p>
        </div>
        
        {/* Animated Elements */}
        <div className="mt-8 flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}