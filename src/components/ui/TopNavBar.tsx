'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { menuItems } from '../../data/navigation';

interface TopNavBarProps {
  position?: 'sticky' | 'fixed';
}

const TopNavBar: React.FC<TopNavBarProps> = ({ position = 'sticky' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY >= 80) {
          navbarRef.current.classList.add('nav-sticky');
        } else {
          navbarRef.current.classList.remove('nav-sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      id="navbar"
      className={`
        ${position} top-0 z-50 w-full border-b border-transparent bg-white transition-all duration-300
        lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl
      `}
    >
      <div className="flex h-full items-center py-4">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href="/">
                <img src="/branding-assets/logo_primary.svg" alt="STIE Dwimulya Logo" className="h-10" />
              </a>
              <div className="flex items-center gap-2">
                <button
                  className="inline-block lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-7 w-7 text-default-600 hover:text-default-900" />
                  ) : (
                    <Menu className="h-7 w-7 text-default-600 hover:text-default-900" />
                  )}
                </button>
              </div>
            </div>
            <ul className="menu relative mx-auto hidden grow items-center justify-center lg:flex">
              {menuItems.map((item, idx) => (
                <li key={idx} className="menu-item mx-2 text-default-800 transition-all duration-300 hover:text-primary">
                  <a
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsMobileMenuOpen(false);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close mobile menu"
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`
          fixed bottom-0 left-0 top-0 z-50 h-screen w-full max-w-[270px] transform border-r border-default-200 bg-white transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:hidden
        `}
      >
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4">
          <a href="/">
            <img src="/branding-assets/stie-logo.png" alt="STIE Dwimulya Logo" className="h-10" />
          </a>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <nav className="flex h-full w-full flex-col flex-wrap p-4">
            <ul className="space-y-1">
              {menuItems.map((item, idx) => (
                <li key={idx} className="rounded text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary">
                  <a className="block w-full px-4 py-2.5" href={item.link} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
