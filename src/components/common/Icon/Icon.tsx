import React from 'react';

interface IconProps {
  name: string; // e.g., 'arrow-right', 'play-circle'
  className?: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 24, color = 'currentColor' }) => {
  // In a real app, you might use a library like react-icons
  // or have a mapping of names to SVG paths.
  // This is a placeholder implementation.
  const getIconPath = (iconName: string) => {
    switch (iconName) {
      case 'arrow-right':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />;
      case 'play-circle':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
      default:
        return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
    >
      {getIconPath(name)}
    </svg>
  );
};

export default Icon;
