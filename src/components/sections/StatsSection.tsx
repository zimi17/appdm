import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats, title }) => {
  return (
    <section className="bg-brand-primary text-white py-20">
      <div className="container mx-auto text-center">
        {title && <h2 className="text-4xl font-bold mb-12">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-6xl font-extrabold text-brand-secondary">{stat.value}</p>
              <p className="text-xl font-semibold mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
