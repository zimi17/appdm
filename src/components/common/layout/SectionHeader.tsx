import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  level?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, level = 2, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className={`text-center mb-12 ${className}`}>
      <Tag className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{title}</Tag>
      {subtitle && <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
