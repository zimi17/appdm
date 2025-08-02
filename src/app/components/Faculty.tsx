import { FiAward, FiBookOpen, FiTrendingUp, FiGlobe, FiZap } from 'react-icons/fi';

const facultyMembers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Professor of Management',
    department: 'Strategy & Innovation',
    image: '/api/placeholder/200/200',
    research: 'Digital Transformation & Innovation',
    publications: 45,
    awards: 12,
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Associate Professor',
    department: 'Finance & Economics',
    image: '/api/placeholder/200/200',
    research: 'Behavioral Finance & Market Dynamics',
    publications: 38,
    awards: 8,
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Professor of Marketing',
    department: 'Consumer Behavior',
    image: '/api/placeholder/200/200',
    research: 'Consumer Psychology & Brand Strategy',
    publications: 52,
    awards: 15,
  },
  {
    name: 'Dr. James Wilson',
    title: 'Assistant Professor',
    department: 'Operations Management',
    image: '/api/placeholder/200/200',
    research: 'Supply Chain Optimization',
    publications: 28,
    awards: 6,
  },
];

const researchAreas = [
  {
    title: 'Innovation & Entrepreneurship',
    description: 'Exploring how organizations create and capture value through innovation.',
    icon: FiTrendingUp,
    projects: 24,
  },
  {
    title: 'Global Business Strategy',
    description: 'Understanding how firms compete and succeed in international markets.',
    icon: FiGlobe,
    projects: 18,
  },
  {
    title: 'Sustainable Business',
    description: 'Developing business models that create value while preserving resources.',
    icon: FiZap,
    projects: 31,
  },
];

export default function Faculty() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Faculty & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our distinguished faculty are thought leaders who advance knowledge 
            and inspire the next generation of business leaders.
          </p>
        </div>

        {/* Featured Faculty */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Faculty
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Faculty Image */}
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Faculty Info */}
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm text-red-600 font-medium">{member.title}</p>
                  <p className="text-xs text-gray-500">{member.department}</p>
                </div>

                {/* Research Area */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Research:</strong> {member.research}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex justify-center space-x-4 text-xs">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{member.publications}</div>
                    <div className="text-gray-500">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{member.awards}</div>
                    <div className="text-gray-500">Awards</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Research Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={area.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {area.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {area.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {area.projects} active projects
                    </span>
                    <a
                      href="#"
                      className="text-red-600 hover:text-red-700 font-medium text-sm"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">1,200+</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">$50M+</div>
              <div className="text-gray-600">Research Funding</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Research Centers</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/faculty"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Meet Our Faculty
          </a>
        </div>
      </div>
    </section>
  );
}