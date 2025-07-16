import React from 'react';

interface LinkItem {
  title: string;
  description: string;
  link: string;
}

interface FeaturedLinkBlockProps {
  featuredImageUrl: string;
  featuredImageAlt: string;
  linkItems: LinkItem[];
  className?: string;
}

const FeaturedLinkBlock: React.FC<FeaturedLinkBlockProps> = ({ featuredImageUrl, featuredImageAlt, linkItems, className }) => {
  return (
    <section className={`flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow-lg ${className}`}>
      <div className="w-full md:w-2/5">
        <img src={featuredImageUrl} alt={featuredImageAlt} className="object-cover w-full h-full" />
      </div>
      <div className="w-full md:w-3/5 p-10">
        <ul className="space-y-6">
          {linkItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="group block hover:bg-gray-100 p-4 rounded-lg transition-colors">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedLinkBlock;
