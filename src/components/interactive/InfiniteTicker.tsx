import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface InfiniteTickerProps {
  keywords: string[];
}

const InfiniteTicker: React.FC<InfiniteTickerProps> = ({ keywords }) => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tickerRef.current) {
      const tickerWidth = tickerRef.current.scrollWidth;
      gsap.to(tickerRef.current, {
        x: -tickerWidth / 2, // Adjust for seamless loop
        duration: 20, // Adjust duration for speed
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (tickerWidth / 2)), // Loop seamlessly
        },
      });
    }
  }, [keywords]);

  return (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-oxford-blue text-white">
      <div ref={tickerRef} className="inline-block">
        {/* Duplicate content to ensure seamless loop */}
        {keywords.map((keyword, index) => (
          <span key={index} className="text-display inline-block mx-8 text-gold">
            {keyword}
          </span>
        ))}
        {keywords.map((keyword, index) => (
          <span key={index + keywords.length} className="text-display inline-block mx-8 text-gold">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteTicker;
