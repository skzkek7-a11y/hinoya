
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Section - Optimized for horizontal logo */}
        <a href="#hero" className="relative z-50 flex items-center transition-transform hover:scale-105 active:scale-95">
          <img 
            src="logo.png" 
            alt="히노야카레" 
            className={`${scrolled ? 'h-10 md:h-12' : 'h-14 md:h-18'} w-auto transition-all duration-500 object-contain`}
            style={{ 
              // 투명 헤더일 때 어두운 배경에서도 녹색 글자가 잘 보이도록 화이트 글로우 효과 적용
              filter: scrolled ? 'none' : 'drop-shadow(0px 0px 8px rgba(255,255,255,0.8)) brightness(1.1)'
            }}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.fallback-text');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div className="fallback-text hidden flex items-center">
            <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-[#006335]' : 'text-white'}`}>
              HINOYA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[15px] font-bold tracking-tight hover:text-[#006335] transition-colors relative group ${
                scrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#006335] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://hinoya.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 text-xs font-black px-6 py-3 rounded-full border-2 transition-all ${
              scrolled 
                ? 'border-[#006335] text-[#006335] hover:bg-[#006335] hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-[#006335]'
            }`}
          >
            <span>JAPAN HINOYA</span>
            <ExternalLink size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 rounded-lg relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={32} className="text-gray-900" />
          ) : (
            <Menu size={32} className={scrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-32 space-y-8">
          <div className="mb-8">
            <img src="logo.png" alt="히노야카레" className="h-14 w-auto object-contain" />
          </div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="text-4xl font-black text-gray-900 hover:text-[#006335] transition-colors tracking-tighter"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-10 border-t border-gray-100 mt-auto pb-10">
            <a
              href="https://hinoya.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xl font-bold text-[#006335]"
            >
              <span>일본 공식 홈페이지</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
