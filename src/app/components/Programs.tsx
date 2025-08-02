import { FiArrowRight, FiUsers, FiBook, FiGlobe, FiMonitor } from 'react-icons/fi';

const programs = [
  {
    title: 'MBA Program',
    description: 'A two-year, full-time program that transforms students into principled leaders who make a difference in the world.',
    icon: FiUsers,
    duration: '2 Years',
    format: 'Full-time',
    color: 'red',
    features: ['Case Method Learning', 'Global Network', 'Leadership Development', 'Career Services'],
  },
  {
    title: 'Doctoral Programs',
    description: 'Rigorous research-based programs that prepare scholars for careers in academia and research institutions.',
    icon: FiBook,
    duration: '4-5 Years',
    format: 'Full-time',
    color: 'blue',
    features: ['Research Focus', 'Academic Mentorship', 'Teaching Experience', 'Publication Support'],
  },
  {
    title: 'Executive Education',
    description: 'Short-term programs designed for experienced professionals looking to enhance their leadership skills.',
    icon: FiGlobe,
    duration: '1-12 Weeks',
    format: 'Part-time',
    color: 'green',
    features: ['Flexible Schedule', 'Peer Learning', 'Real-world Application', 'Executive Network'],
  },
  {
    title: 'Online Programs',
    description: 'Digital learning experiences that bring world-class education to learners anywhere in the world.',
    icon: FiMonitor,
    duration: 'Varies',
    format: 'Online',
    color: 'purple',
    features: ['Self-paced Learning', 'Interactive Content', 'Global Community', '24/7 Access'],
  },
];

const colorClasses = {
  red: 'bg-red-50 border-red-200 text-red-700',
  blue: 'bg-blue-50 border-blue-200 text-blue-700',
  green: 'bg-green-50 border-green-200 text-green-700',
  purple: 'bg-purple-50 border-purple-200 text-purple-700',
};

export default function Programs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to prepare leaders 
            for the challenges of tomorrow's business world.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.title}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg ${colorClasses[program.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Format:</span>
                    <span className="font-medium">{program.format}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`/programs/${program.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-200 group-hover:translate-x-1"
                >
                  Learn More
                  <FiArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have chosen our programs to advance their careers 
              and make a positive impact in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Apply Now
              </a>
              <a
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                View All Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}