import React from 'react';
import Icon from '../../common/Icon/Icon'; // Assuming Icon component exists

interface ColumnData {
  icon: string;
  title: string;
  description: string;
}

interface ThreeColumnFeatureProps {
  columnData: ColumnData[];
  className?: string;
}

const ThreeColumnFeature: React.FC<ThreeColumnFeatureProps> = ({ columnData, className }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {columnData.map((column, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-5 bg-blue-100 rounded-full">
                <Icon name={column.icon} size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{column.title}</h3>
              <p className="text-gray-600 leading-relaxed">{column.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnFeature;
