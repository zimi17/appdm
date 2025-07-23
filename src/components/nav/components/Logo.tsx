import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ size = 'md', variant = 'light', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  // Updated colors menggunakan STIE Dwimulya brand palette
  const colors = {
    light: {
      outerRing: '#002147', // Oxford Blue
      innerCircle: '#FFFFFF',
      bookOrange: '#D4AF37', // Brand Gold
      bookBlue: '#002147', // Oxford Blue
      text: '#FFFFFF',
      accents: '#D4AF37' // Brand Gold
    },
    dark: {
      outerRing: '#A9D6E5', // Sky Blue
      innerCircle: '#FFFFFF',
      bookOrange: '#D4AF37', // Brand Gold
      bookBlue: '#002147', // Oxford Blue
      text: '#FFFFFF',
      accents: '#D4AF37' // Brand Gold
    }
  };

  const currentColors = colors[variant];

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-shadow"
      >
        <defs>
          <filter id={`logo-shadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="rgba(0,33,71,0.25)"/>
          </filter>
        </defs>
        
        {/* Outer Circle dengan Oxford Blue */}
        <circle
          cx="60"
          cy="60"
          r="58"
          fill={currentColors.outerRing}
          filter={`url(#logo-shadow-${variant})`}
        />
        
        {/* Inner White Circle */}
        <circle
          cx="60"
          cy="60"
          r="42"
          fill={currentColors.innerCircle}
        />
        
        {/* Book Symbol - Left Gold Page */}
        <path
          d="M35 45 L35 75 Q35 78 38 78 L50 78 L50 45 Q50 42 47 42 L38 42 Q35 42 35 45 Z"
          fill={currentColors.bookOrange}
        />
        
        {/* Book Symbol - Right Oxford Blue Page */}
        <path
          d="M70 45 L70 75 Q70 78 73 78 L82 78 Q85 78 85 75 L85 45 Q85 42 82 42 L73 42 Q70 42 70 45 Z"
          fill={currentColors.bookBlue}
        />
        
        {/* Book Center Binding - Oxford Blue */}
        <rect
          x="50"
          y="42"
          width="20"
          height="36"
          fill={currentColors.bookBlue}
        />
        
        {/* Book Pages Lines */}
        <line x1="52" y1="48" x2="68" y2="48" stroke={currentColors.innerCircle} strokeWidth="1"/>
        <line x1="52" y1="52" x2="68" y2="52" stroke={currentColors.innerCircle} strokeWidth="1"/>
        <line x1="52" y1="56" x2="68" y2="56" stroke={currentColors.innerCircle} strokeWidth="1"/>
        <line x1="52" y1="60" x2="68" y2="60" stroke={currentColors.innerCircle} strokeWidth="1"/>
        <line x1="52" y1="64" x2="68" y2="64" stroke={currentColors.innerCircle} strokeWidth="1"/>
        <line x1="52" y1="68" x2="68" y2="68" stroke={currentColors.innerCircle} strokeWidth="1"/>
        <line x1="52" y1="72" x2="68" y2="72" stroke={currentColors.innerCircle} strokeWidth="1"/>
        
        {/* Gold Accent Dots */}
        <circle cx="60" cy="28" r="3" fill={currentColors.accents} />
        <circle cx="60" cy="92" r="3" fill={currentColors.accents} />
        <circle cx="28" cy="60" r="3" fill={currentColors.accents} />
        <circle cx="92" cy="60" r="3" fill={currentColors.accents} />
        
        {/* Star Decorations at Bottom - White */}
        <g transform="translate(45, 85)">
          <path d="M0 0 L2 3 L0 6 L-2 3 Z" fill={currentColors.text} />
          <path d="M3 1.5 L5 1.5 M4 0.5 L4 2.5" stroke={currentColors.text} strokeWidth="0.5"/>
        </g>
        <g transform="translate(75, 85)">
          <path d="M0 0 L2 3 L0 6 L-2 3 Z" fill={currentColors.text} />
          <path d="M3 1.5 L5 1.5 M4 0.5 L4 2.5" stroke={currentColors.text} strokeWidth="0.5"/>
        </g>
        
        {/* Text Path for "SEKOLAH TINGGI ILMU EKONOMI" (Top Arc) - Montserrat */}
        <defs>
          <path id={`topTextPath-${variant}`} d="M 20 60 A 40 40 0 0 1 100 60" />
        </defs>
        <text className="font-montserrat font-bold text-[6px] fill-current" fill={currentColors.text}>
          <textPath href={`#topTextPath-${variant}`} startOffset="0%">
            SEKOLAH TINGGI ILMU EKONOMI
          </textPath>
        </text>
        
        {/* Text Path for "DWIMULYA" (Bottom Arc) - Montserrat */}
        <defs>
          <path id={`bottomTextPath-${variant}`} d="M 100 60 A 40 40 0 0 1 20 60" />
        </defs>
        <text className="font-montserrat font-bold text-[8px] fill-current" fill={currentColors.text}>
          <textPath href={`#bottomTextPath-${variant}`} startOffset="25%">
            DWIMULYA
          </textPath>
        </text>
      </svg>
    </div>
  );
}