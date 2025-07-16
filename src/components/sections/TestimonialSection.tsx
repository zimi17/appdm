import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  imageUrl: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  title?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials, title }) => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        {title && <h2 className="text-4xl font-bold mb-12">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <img src={testimonial.imageUrl} alt={testimonial.author} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-gray-900">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
