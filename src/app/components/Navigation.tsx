'use client';

import { useState } from 'react';
import { FiChevronDown, FiSearch, FiMenu, FiX } from 'react-icons/fi';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: 'Academic Programs',
    href: '/programs',
    children: [
      { label: 'MBA Program', href: '/programs/mba' },
      { label: 'Doctoral Programs', href: '/programs/doctoral' },
      { label: 'Executive Education', href: '/programs/executive' },
      { label: 'Online Programs', href: '/programs/online' },
    ],
  },
  {
    label: 'Faculty & Research',
    href: '/faculty',
    children: [
      { label: 'Faculty Directory', href: '/faculty/directory' },
      { label: 'Research Centers', href: '/faculty/research' },
      { label: 'Publications', href: '/faculty/publications' },
      { label: 'Case Studies', href: '/faculty/cases' },
    ],
  },
  {
    label: 'Alumni',
    href: '/alumni',
    children: [
      { label: 'Alumni Network', href: '/alumni/network' },
      { label: 'Events', href: '/alumni/events' },
      { label: 'Career Services', href: '/alumni/careers' },
      { label: 'Alumni Stories', href: '/alumni/stories' },
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
    children: [
      { label: 'Research Insights', href: '/insights/research' },
      { label: 'Industry Reports', href: '/insights/reports' },
      { label: 'Thought Leadership', href: '/insights/thought-leadership' },
      { label: 'News & Media', href: '/insights/news' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Mission', href: '/about/mission' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'History', href: '/about/history' },
      { label: 'Contact Us', href: '/about/contact' },
    ],
  },
];

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
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
        <div className="fixed inset-0 bg-gray-900 z-50">
          <div className="flex h-full">
            {/* Left Column - Main Navigation */}
            <div className="w-1/3 bg-gray-900 p-8 flex flex-col">
              <div className="flex items-center space-x-3 mb-12">
                <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">U</span>
                </div>
                <div>
                  <h1 className="text-white text-xl font-semibold">University</h1>
                  <p className="text-gray-400">Business School</p>
                </div>
              </div>

              <nav className="flex-1 space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      className="text-white text-2xl font-medium hover:text-red-400 transition-colors duration-200 flex items-center justify-between"
                    >
                      {item.label}
                      <FiChevronDown className="w-5 h-5" />
                    </a>
                  </div>
                ))}
                <a
                  href="/give"
                  className="text-white text-2xl font-medium underline hover:text-red-400 transition-colors duration-200"
                >
                  Make a Gift
                </a>
              </nav>

              {/* Social Media */}
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
              </div>
            </div>

            {/* Right Column - Content Area */}
            <div className="flex-1 bg-gray-800 p-8">
              <div className="flex justify-end space-x-4 mb-8">
                <button className="text-white hover:text-red-400 transition-colors duration-200">
                  <FiSearch className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setIsFullMenuOpen(false)}
                  className="text-white hover:text-red-400 transition-colors duration-200"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Welcome to University Business School</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Combining bold ideas, powerful pedagogy, and collaborative cohort-based learning 
                  to deliver unparalleled management education and foster lifelong learning networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}