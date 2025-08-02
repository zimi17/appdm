import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const footerLinks = {
  programs: [
    { label: 'MBA Program', href: '/programs/mba' },
    { label: 'Doctoral Programs', href: '/programs/doctoral' },
    { label: 'Executive Education', href: '/programs/executive' },
    { label: 'Online Programs', href: '/programs/online' },
  ],
  faculty: [
    { label: 'Faculty Directory', href: '/faculty/directory' },
    { label: 'Research Centers', href: '/faculty/research' },
    { label: 'Publications', href: '/faculty/publications' },
    { label: 'Case Studies', href: '/faculty/cases' },
  ],
  alumni: [
    { label: 'Alumni Network', href: '/alumni/network' },
    { label: 'Events', href: '/alumni/events' },
    { label: 'Career Services', href: '/alumni/careers' },
    { label: 'Alumni Stories', href: '/alumni/stories' },
  ],
  about: [
    { label: 'Our Mission', href: '/about/mission' },
    { label: 'Leadership', href: '/about/leadership' },
    { label: 'History', href: '/about/history' },
    { label: 'Contact Us', href: '/about/contact' },
  ],
};

const socialLinks = [
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">University</h3>
                <p className="text-sm text-gray-400">Business School</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Educating leaders who make a difference in the world through 
              innovative research, transformative learning, and global impact.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  123 Business Ave, University City, UC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@university.edu</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Faculty */}
          <div>
            <h4 className="font-semibold mb-4">Faculty</h4>
            <ul className="space-y-2">
              {footerLinks.faculty.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 University Business School. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/accessibility" className="hover:text-white transition-colors duration-200">
              Accessibility
            </a>
            <a href="/sitemap" className="hover:text-white transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}