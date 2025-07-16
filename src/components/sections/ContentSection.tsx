import React from 'react';

interface ContentSectionProps {
  title: string;
  content: string; // HTML content
  variant?: 'default' | 'full-width';
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content, variant = 'default' }) => {
  const containerClasses = variant === 'full-width' ? 'w-full' : 'container mx-auto';

  return (
    <section className="py-16 md:py-24">
      <div className={containerClasses}>
        <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
};

export default ContentSection;
