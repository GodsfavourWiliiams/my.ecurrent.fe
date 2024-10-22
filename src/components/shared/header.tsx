'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AppLogo } from './app-logo';
import { Icons } from '@/app/assets/icons';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Shop', path: '/shop' },
  { name: 'FAQs', path: '/faqs' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app-container relative">
      <div className="md:max-w-xl mx-auto py-6 absolute top-0 z-50 flex items-center justify-between w-full">
        <AppLogo isDarkView />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`text-primary hover:text-primary/80 transition-colors ${
                    pathname === item.path ? 'font-bold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <Icons.Close className="h-6 w-6" />
          ) : (
            <Icons.Hamburger className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}

        <div
          className={`${
            isMenuOpen ? 'right-0' : '-right-[300px]'
          } md:hidden  absolute top-full bg-white rounded-2xl shadow-lg transition-all ease-in-out duration-300 w-40`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block p-2 text-primary hover:text-primary/80 hover:bg-slate-50 rounded-xl transition-colors ${
                    pathname === item.path ? 'font-bold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
