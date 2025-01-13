import React from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrollToSection: (section: string) => void;
}

export default function Header({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }: HeaderProps) {
  const menuItems = [
    { id: 'inicio', label: 'inicio', path: '/' },
    { id: 'sobre', label: 'sobre', path: '/' },
    { id: 'contato', label: 'contato', path: '/' },
    { id: 'legal', label: 'legal', path: '/legal' },
    { id: 'faq', label: 'faq', path: '/faq' },
    { id: 'blog', label: 'blog', path: '/blog' },
    { id: 'client-area', label: 'client area', path: '/client-area' },
  ];

  return (
    <header className="fixed w-full bg-emerald-900/95 backdrop-blur-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Plane className="text-amber-500 h-8 w-8" />
            <span className="text-white font-bold text-xl">AeroTech</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.path === '/') {
                    scrollToSection(item.id);
                  }
                }}
                className={`text-white hover:text-amber-500 capitalize transition-colors ${
                  activeSection === item.id ? 'text-amber-500' : ''
                }`}
              >
                {item.path === '/' ? item.label : <Link to={item.path}>{item.label}</Link>}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        } overflow-hidden bg-emerald-900/95`}
      >
        <div className="container mx-auto px-4 py-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.path === '/') {
                  scrollToSection(item.id);
                }
              }}
              className="block w-full text-left py-2 text-white hover:text-amber-500 capitalize"
            >
              {item.path === '/' ? item.label : <Link to={item.path}>{item.label}</Link>}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
