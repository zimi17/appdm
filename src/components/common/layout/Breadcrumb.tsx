import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav aria-label="breadcrumb" className={`text-sm font-medium ${className}`}>
      <ol className="flex items-center space-x-2 text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            <a
              href={item.url}
              className={`transition-colors ${index === items.length - 1 ? 'text-gray-800 font-semibold' : 'hover:text-blue-600'}`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
