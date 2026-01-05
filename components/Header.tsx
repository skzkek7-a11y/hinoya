
import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: '히노야카레', href: '#hero' },
    { name: '히노야 메뉴', href: '#menu' },
    { name: '회사소개', href: '#brand-story' },
    { name: '프랜차이즈', href: '#franchise' },
    { name: '매장안내', href: '#store-locator' },
    { name: '문의', href: '#contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Official Image Logo */}
        <a href="#hero" className="flex items-center transition-transform hover:scale-105">
          <img 
            src="./logo.png" 
            alt="히노야카레 로고" 
            className={`${scrolled ? 'h-10' : 'h-12'} w-auto transition-all duration-300 object-contain`}
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
            }}
          />
          {/* Fallback text logo if image is missing */}
          <div className="fallback-logo hidden flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#006335] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">日</span>
            </div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-[#006335]' : 'text-white'}`}>
              HINOYA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium hover:text-[#006335] transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://hinoya.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-1 text-sm font-medium px-4 py-2 rounded-full border transition-all ${
              scrolled 
                ? 'border-[#006335] text-[#006335] hover:bg-[#006335] hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-[#006335]'
            }`}
          >
            <span>히노야카레日本</span>
            <ExternalLink size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#006335]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-[#006335]' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="text-2xl font-bold text-gray-800 hover:text-[#006335]"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://hinoya.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xl font-bold text-[#006335] border-t pt-6"
          >
            <span>히노야카레日本 바로가기</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
