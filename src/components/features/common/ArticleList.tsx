import React from 'react';

interface Article {
  imageUrl: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

interface ArticleListProps {
  articles: Article[];
  title?: string;
  className?: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, title, className }) => {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        {title && <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <a href={article.link} className="block">
                <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
              </a>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2 font-medium">{article.date}</p>
                <h3 className="text-xl font-bold mb-3">
                  <a href={article.link} className="text-gray-800 hover:text-blue-600 transition-colors">{article.title}</a>
                </h3>
                <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleList;
