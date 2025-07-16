import React from 'react';
import Button from '@/components/common/ui/Button/Button';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="bg-brand-secondary text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-xl mb-8">{subtitle}</p>}
        <Button variant="primary" size="lg" onClick={() => window.location.href = ctaLink}>
          {ctaText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
