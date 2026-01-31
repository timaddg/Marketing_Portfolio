'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = theme === 'dark' || (!theme && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDF0E6]/95 backdrop-blur-sm dark:bg-gray-900/95 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand - Left */}
          <div className="flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="text-lg font-medium text-accent dark:text-orange-400 hover:opacity-80 transition-opacity cursor-pointer"
            >
              Nanditha Suresh Pendakur
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-accent dark:text-orange-400 hover:opacity-80 text-sm font-medium transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA - Right */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-accent dark:border-orange-400 text-accent dark:text-orange-400 text-sm font-medium hover:bg-accent hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile: CTA or menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="text-accent dark:text-orange-400 text-sm font-medium"
            >
              Get in Touch
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-accent dark:text-orange-400 hover:opacity-80 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 bg-[#FDF0E6] dark:bg-gray-900 border-t border-accent/20 dark:border-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-accent dark:text-orange-400 block px-3 py-3 text-base font-medium hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mx-3 mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-full border-2 border-accent dark:border-orange-400 text-accent dark:text-orange-400 text-sm font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
