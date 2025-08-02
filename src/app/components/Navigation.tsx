'use client';

import { useState } from 'react';
import { FiChevronDown, FiSearch, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  grandchildren?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: 'Academic Programs',
    href: '/programs',
    description: 'Discover our comprehensive range of programs designed to prepare leaders for tomorrow\'s challenges.',
    children: [
      {
        label: 'MBA Program',
        href: '/programs/mba',
        description: 'Transform your career with our flagship MBA program.',
        grandchildren: [
          { label: 'Full-Time MBA', href: '/programs/mba/full-time' },
          { label: 'Part-Time MBA', href: '/programs/mba/part-time' },
          { label: 'Executive MBA', href: '/programs/mba/executive' },
          { label: 'Global MBA', href: '/programs/mba/global' },
          { label: 'MBA Admissions', href: '/programs/mba/admissions' },
        ]
      },
      {
        label: 'Doctoral Programs',
        href: '/programs/doctoral',
        description: 'Rigorous research-based programs for academic excellence.',
        grandchildren: [
          { label: 'PhD in Management', href: '/programs/doctoral/management' },
          { label: 'PhD in Finance', href: '/programs/doctoral/finance' },
          { label: 'PhD in Marketing', href: '/programs/doctoral/marketing' },
          { label: 'PhD in Operations', href: '/programs/doctoral/operations' },
          { label: 'Research Areas', href: '/programs/doctoral/research' },
        ]
      },
      {
        label: 'Executive Education',
        href: '/programs/executive',
        description: 'Short-term programs for experienced professionals.',
        grandchildren: [
          { label: 'Leadership Programs', href: '/programs/executive/leadership' },
          { label: 'Strategy Programs', href: '/programs/executive/strategy' },
          { label: 'Finance Programs', href: '/programs/executive/finance' },
          { label: 'Custom Programs', href: '/programs/executive/custom' },
          { label: 'Certificate Programs', href: '/programs/executive/certificates' },
        ]
      },
      {
        label: 'Online Programs',
        href: '/programs/online',
        description: 'Flexible digital learning experiences for global learners.',
        grandchildren: [
          { label: 'Online MBA', href: '/programs/online/mba' },
          { label: 'Online Certificates', href: '/programs/online/certificates' },
          { label: 'Micro-Credentials', href: '/programs/online/micro-credentials' },
          { label: 'Professional Development', href: '/programs/online/professional' },
          { label: 'Learning Platform', href: '/programs/online/platform' },
        ]
      },
      {
        label: 'Undergraduate',
        href: '/programs/undergraduate',
        description: 'Foundation programs for future business leaders.',
        grandchildren: [
          { label: 'Business Administration', href: '/programs/undergraduate/business' },
          { label: 'Economics', href: '/programs/undergraduate/economics' },
          { label: 'International Business', href: '/programs/undergraduate/international' },
          { label: 'Entrepreneurship', href: '/programs/undergraduate/entrepreneurship' },
          { label: 'Admissions', href: '/programs/undergraduate/admissions' },
        ]
      },
      {
        label: 'Specialized Programs',
        href: '/programs/specialized',
        description: 'Niche programs for specific industries and skills.',
        grandchildren: [
          { label: 'Healthcare Management', href: '/programs/specialized/healthcare' },
          { label: 'Technology Management', href: '/programs/specialized/technology' },
          { label: 'Sustainability', href: '/programs/specialized/sustainability' },
          { label: 'Social Impact', href: '/programs/specialized/social-impact' },
          { label: 'Innovation', href: '/programs/specialized/innovation' },
        ]
      }
    ],
  },
  {
    label: 'Faculty & Research',
    href: '/faculty',
    description: 'Our distinguished faculty advance knowledge and inspire the next generation.',
    children: [
      {
        label: 'Faculty Directory',
        href: '/faculty/directory',
        description: 'Meet our world-class faculty members.',
        grandchildren: [
          { label: 'Management Faculty', href: '/faculty/directory/management' },
          { label: 'Finance Faculty', href: '/faculty/directory/finance' },
          { label: 'Marketing Faculty', href: '/faculty/directory/marketing' },
          { label: 'Operations Faculty', href: '/faculty/directory/operations' },
          { label: 'Visiting Faculty', href: '/faculty/directory/visiting' },
        ]
      },
      {
        label: 'Research Centers',
        href: '/faculty/research',
        description: 'Cutting-edge research initiatives and centers.',
        grandchildren: [
          { label: 'Innovation Center', href: '/faculty/research/innovation' },
          { label: 'Sustainability Center', href: '/faculty/research/sustainability' },
          { label: 'Global Business Center', href: '/faculty/research/global' },
          { label: 'Digital Transformation', href: '/faculty/research/digital' },
          { label: 'Social Impact', href: '/faculty/research/social-impact' },
        ]
      },
      {
        label: 'Publications',
        href: '/faculty/publications',
        description: 'Latest research and academic publications.',
        grandchildren: [
          { label: 'Journal Articles', href: '/faculty/publications/journals' },
          { label: 'Working Papers', href: '/faculty/publications/working-papers' },
          { label: 'Books', href: '/faculty/publications/books' },
          { label: 'Research Reports', href: '/faculty/publications/reports' },
          { label: 'Conference Papers', href: '/faculty/publications/conferences' },
        ]
      },
      {
        label: 'Case Studies',
        href: '/faculty/cases',
        description: 'Real-world business cases for learning.',
        grandchildren: [
          { label: 'Strategy Cases', href: '/faculty/cases/strategy' },
          { label: 'Finance Cases', href: '/faculty/cases/finance' },
          { label: 'Marketing Cases', href: '/faculty/cases/marketing' },
          { label: 'Operations Cases', href: '/faculty/cases/operations' },
          { label: 'Global Cases', href: '/faculty/cases/global' },
        ]
      },
      {
        label: 'Research Areas',
        href: '/faculty/areas',
        description: 'Explore our key research domains.',
        grandchildren: [
          { label: 'Strategy & Innovation', href: '/faculty/areas/strategy' },
          { label: 'Finance & Economics', href: '/faculty/areas/finance' },
          { label: 'Marketing & Consumer', href: '/faculty/areas/marketing' },
          { label: 'Operations & Supply Chain', href: '/faculty/areas/operations' },
          { label: 'Organizational Behavior', href: '/faculty/areas/organizational' },
        ]
      }
    ],
  },
  {
    label: 'Alumni',
    href: '/alumni',
    description: 'Connect with our global network of successful alumni.',
    children: [
      {
        label: 'Alumni Network',
        href: '/alumni/network',
        description: 'Stay connected with fellow alumni worldwide.',
        grandchildren: [
          { label: 'Alumni Directory', href: '/alumni/network/directory' },
          { label: 'Regional Chapters', href: '/alumni/network/chapters' },
          { label: 'Industry Groups', href: '/alumni/network/industry' },
          { label: 'Mentorship Program', href: '/alumni/network/mentorship' },
          { label: 'Alumni Benefits', href: '/alumni/network/benefits' },
        ]
      },
      {
        label: 'Events',
        href: '/alumni/events',
        description: 'Join us for networking and learning opportunities.',
        grandchildren: [
          { label: 'Alumni Reunions', href: '/alumni/events/reunions' },
          { label: 'Networking Events', href: '/alumni/events/networking' },
          { label: 'Professional Development', href: '/alumni/events/professional' },
          { label: 'Global Conferences', href: '/alumni/events/conferences' },
          { label: 'Virtual Events', href: '/alumni/events/virtual' },
        ]
      },
      {
        label: 'Career Services',
        href: '/alumni/careers',
        description: 'Career support and job opportunities for alumni.',
        grandchildren: [
          { label: 'Job Board', href: '/alumni/careers/jobs' },
          { label: 'Career Coaching', href: '/alumni/careers/coaching' },
          { label: 'Resume Review', href: '/alumni/careers/resume' },
          { label: 'Interview Prep', href: '/alumni/careers/interview' },
          { label: 'Career Transitions', href: '/alumni/careers/transitions' },
        ]
      },
      {
        label: 'Alumni Stories',
        href: '/alumni/stories',
        description: 'Inspiring stories from our alumni community.',
        grandchildren: [
          { label: 'Success Stories', href: '/alumni/stories/success' },
          { label: 'Entrepreneurs', href: '/alumni/stories/entrepreneurs' },
          { label: 'Industry Leaders', href: '/alumni/stories/leaders' },
          { label: 'Social Impact', href: '/alumni/stories/social-impact' },
          { label: 'Alumni Spotlights', href: '/alumni/stories/spotlights' },
        ]
      },
      {
        label: 'Giving Back',
        href: '/alumni/giving',
        description: 'Support the next generation of business leaders.',
        grandchildren: [
          { label: 'Annual Fund', href: '/alumni/giving/annual-fund' },
          { label: 'Scholarships', href: '/alumni/giving/scholarships' },
          { label: 'Endowments', href: '/alumni/giving/endowments' },
          { label: 'Planned Giving', href: '/alumni/giving/planned' },
          { label: 'Volunteer Opportunities', href: '/alumni/giving/volunteer' },
        ]
      }
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
    description: 'Latest research, thought leadership, and industry insights.',
    children: [
      {
        label: 'Research Insights',
        href: '/insights/research',
        description: 'Cutting-edge research findings and analysis.',
        grandchildren: [
          { label: 'Latest Research', href: '/insights/research/latest' },
          { label: 'Research Highlights', href: '/insights/research/highlights' },
          { label: 'Faculty Publications', href: '/insights/research/publications' },
          { label: 'Research Impact', href: '/insights/research/impact' },
          { label: 'Research Methodology', href: '/insights/research/methodology' },
        ]
      },
      {
        label: 'Industry Reports',
        href: '/insights/reports',
        description: 'Comprehensive industry analysis and reports.',
        grandchildren: [
          { label: 'Market Analysis', href: '/insights/reports/market' },
          { label: 'Industry Trends', href: '/insights/reports/trends' },
          { label: 'Economic Outlook', href: '/insights/reports/economic' },
          { label: 'Technology Reports', href: '/insights/reports/technology' },
          { label: 'Sustainability Reports', href: '/insights/reports/sustainability' },
        ]
      },
      {
        label: 'Thought Leadership',
        href: '/insights/thought-leadership',
        description: 'Expert perspectives on business and leadership.',
        grandchildren: [
          { label: 'Faculty Blogs', href: '/insights/thought-leadership/blogs' },
          { label: 'Executive Insights', href: '/insights/thought-leadership/executive' },
          { label: 'Leadership Perspectives', href: '/insights/thought-leadership/leadership' },
          { label: 'Innovation Insights', href: '/insights/thought-leadership/innovation' },
          { label: 'Global Perspectives', href: '/insights/thought-leadership/global' },
        ]
      },
      {
        label: 'News & Media',
        href: '/insights/news',
        description: 'Latest news, press releases, and media coverage.',
        grandchildren: [
          { label: 'Press Releases', href: '/insights/news/press' },
          { label: 'Media Coverage', href: '/insights/news/media' },
          { label: 'Faculty in the News', href: '/insights/news/faculty' },
          { label: 'School News', href: '/insights/news/school' },
          { label: 'Newsletter', href: '/insights/news/newsletter' },
        ]
      },
      {
        label: 'Events & Webinars',
        href: '/insights/events',
        description: 'Upcoming events, webinars, and conferences.',
        grandchildren: [
          { label: 'Upcoming Events', href: '/insights/events/upcoming' },
          { label: 'Webinars', href: '/insights/events/webinars' },
          { label: 'Conferences', href: '/insights/events/conferences' },
          { label: 'Panel Discussions', href: '/insights/events/panels' },
          { label: 'Event Archives', href: '/insights/events/archives' },
        ]
      }
    ],
  },
  {
    label: 'About',
    href: '/about',
    description: 'Learn about our mission, history, and community.',
    children: [
      {
        label: 'Our Mission',
        href: '/about/mission',
        description: 'Our commitment to educating leaders who make a difference.',
        grandchildren: [
          { label: 'Vision & Values', href: '/about/mission/vision' },
          { label: 'Strategic Plan', href: '/about/mission/strategic-plan' },
          { label: 'Diversity & Inclusion', href: '/about/mission/diversity' },
          { label: 'Sustainability', href: '/about/mission/sustainability' },
          { label: 'Global Impact', href: '/about/mission/global-impact' },
        ]
      },
      {
        label: 'Leadership',
        href: '/about/leadership',
        description: 'Meet our leadership team and governance structure.',
        grandchildren: [
          { label: 'Dean\'s Office', href: '/about/leadership/dean' },
          { label: 'Senior Leadership', href: '/about/leadership/senior' },
          { label: 'Department Chairs', href: '/about/leadership/chairs' },
          { label: 'Advisory Board', href: '/about/leadership/advisory' },
          { label: 'Governance', href: '/about/leadership/governance' },
        ]
      },
      {
        label: 'History',
        href: '/about/history',
        description: 'Our rich history and tradition of excellence.',
        grandchildren: [
          { label: 'Timeline', href: '/about/history/timeline' },
          { label: 'Milestones', href: '/about/history/milestones' },
          { label: 'Historical Photos', href: '/about/history/photos' },
          { label: 'Alumni Legacy', href: '/about/history/alumni' },
          { label: 'Archives', href: '/about/history/archives' },
        ]
      },
      {
        label: 'Contact Us',
        href: '/about/contact',
        description: 'Get in touch with our team and departments.',
        grandchildren: [
          { label: 'General Inquiries', href: '/about/contact/general' },
          { label: 'Admissions Office', href: '/about/contact/admissions' },
          { label: 'Alumni Relations', href: '/about/contact/alumni' },
          { label: 'Media Inquiries', href: '/about/contact/media' },
          { label: 'Directions & Map', href: '/about/contact/directions' },
        ]
      },
      {
        label: 'Campus Life',
        href: '/about/campus',
        description: 'Experience our vibrant campus community.',
        grandchildren: [
          { label: 'Campus Facilities', href: '/about/campus/facilities' },
          { label: 'Student Life', href: '/about/campus/student-life' },
          { label: 'Campus Events', href: '/about/campus/events' },
          { label: 'Campus Map', href: '/about/campus/map' },
          { label: 'Virtual Tour', href: '/about/campus/virtual-tour' },
        ]
      }
    ],
  },
];

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [activeLevel1, setActiveLevel1] = useState<string | null>(null);
  const [activeLevel2, setActiveLevel2] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLevel1Click = (label: string) => {
    setActiveLevel1(label);
    setActiveLevel2(null);
  };

  const handleLevel2Click = (label: string) => {
    setActiveLevel2(label);
  };

  const handleBackToLevel1 = () => {
    setActiveLevel2(null);
  };

  const handleBackToLevel0 = () => {
    setActiveLevel1(null);
    setActiveLevel2(null);
  };

  const getActiveLevel1Data = () => {
    return navigationItems.find(item => item.label === activeLevel1);
  };

  const getActiveLevel2Data = () => {
    const level1Data = getActiveLevel1Data();
    return level1Data?.children?.find(item => item.label === activeLevel2);
  };

  return (
    <>
      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900">University</h1>
                <p className="text-xs text-gray-600">Business School</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors duration-200 py-2">
                    <span>{item.label}</span>
                    <FiChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.label && item.children && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-200"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
                <FiSearch className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsFullMenuOpen(true)}
                className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                <FiMenu className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Full Screen Navigation Overlay */}
      {isFullMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-50 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-8 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <div>
                <h1 className="text-white text-xl font-semibold">University</h1>
                <p className="text-gray-400">Business School</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-red-400 transition-colors duration-200">
                <FiSearch className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  setIsFullMenuOpen(false);
                  setActiveLevel1(null);
                  setActiveLevel2(null);
                }}
                className="text-white hover:text-red-400 transition-colors duration-200"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Content */}
          <div className="flex h-full" style={{ height: 'calc(100vh - 120px)' }}>
            {/* Level 1 - 6 Grid */}
            <div 
              className={`w-full transition-transform duration-500 ease-in-out ${
                activeLevel1 ? 'transform -translate-x-full' : 'transform translate-x-0'
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
                {navigationItems.map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleLevel1Click(item.label)}
                  >
                    <h3 className="text-white text-xl font-semibold mb-2">{item.label}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center text-red-400">
                      <span className="text-sm">Explore</span>
                      <FiArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 2 - 5 Grid */}
            <div 
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                activeLevel1 && !activeLevel2 ? 'transform translate-x-0' : 'transform translate-x-full'
              }`}
            >
              {activeLevel1 && (
                <div className="h-full">
                  {/* Back Button */}
                  <div className="p-8 border-b border-gray-800">
                    <button
                      onClick={handleBackToLevel0}
                      className="flex items-center text-white hover:text-red-400 transition-colors duration-200"
                    >
                      <FiArrowRight className="w-4 h-4 mr-2 rotate-180" />
                      Back to Main Menu
                    </button>
                    <h2 className="text-white text-2xl font-bold mt-4">{activeLevel1}</h2>
                    <p className="text-gray-400 mt-2">{getActiveLevel1Data()?.description}</p>
                  </div>

                  {/* Level 2 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-8">
                    {getActiveLevel1Data()?.children?.map((item) => (
                      <div
                        key={item.label}
                        className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                        onClick={() => handleLevel2Click(item.label)}
                      >
                        <h3 className="text-white text-lg font-semibold mb-2">{item.label}</h3>
                        <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                        <div className="flex items-center text-red-400">
                          <span className="text-sm">Learn More</span>
                          <FiArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Level 3 - 5 Grid */}
            <div 
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                activeLevel2 ? 'transform translate-x-0' : 'transform translate-x-full'
              }`}
            >
              {activeLevel2 && (
                <div className="h-full">
                  {/* Back Button */}
                  <div className="p-8 border-b border-gray-800">
                    <button
                      onClick={handleBackToLevel1}
                      className="flex items-center text-white hover:text-red-400 transition-colors duration-200"
                    >
                      <FiArrowRight className="w-4 h-4 mr-2 rotate-180" />
                      Back to {activeLevel1}
                    </button>
                    <h2 className="text-white text-2xl font-bold mt-4">{activeLevel2}</h2>
                    <p className="text-gray-400 mt-2">{getActiveLevel2Data()?.description}</p>
                  </div>

                  {/* Level 3 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-8">
                    {getActiveLevel2Data()?.grandchildren?.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-200 block"
                      >
                        <h3 className="text-white text-lg font-semibold mb-2">{item.label}</h3>
                        <div className="flex items-center text-red-400">
                          <span className="text-sm">Visit</span>
                          <FiArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Social Media Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">YouTube</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
              </div>
              <a
                href="/give"
                className="text-white text-lg font-medium underline hover:text-red-400 transition-colors duration-200"
              >
                Make a Gift
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}